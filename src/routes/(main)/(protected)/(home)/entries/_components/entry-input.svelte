<script lang="ts">
	import type { AccountEntity } from 'src/lib/domain/entity/account.entity';
	import type { CategoryGroupEntity } from 'src/lib/domain/entity/category-group.entity';
	import type { CategoryEntity } from 'src/lib/domain/entity/category.entity';
	import { fade, slide } from 'svelte/transition';
	import YenInput from '../../../../../../ui/common/yen-input.svelte';
	import type { UpsertEntryDto } from 'src/routes/api/entries/dto/upsert-entry.dto';
	import { EntryType } from '@prisma/client';
	import type { EntryEntity } from 'src/lib/domain/entity/entry.entity';
	import type { EntryItemEntity } from 'src/lib/domain/entity/entry-item.entity';

	export let categoryGroups: CategoryGroupEntity[];
	export let accounts: AccountEntity[];
	export let initialEntry: EntryEntity | undefined = undefined;
	export let onSubmit: (entry: UpsertEntryDto) => Promise<void>;

	let memo = initialEntry?.memo ?? '';
	let selectedAccount: AccountEntity | undefined = initialEntry
		? accounts.find((a) => a.id === initialEntry.accountId)
		: accounts[0] ?? undefined;

	let entryItems: EntryItemEntity[] = initialEntry?.entryItems ?? [
		{ amount: 0, categoryId: undefined }
	];

	let showCategoryPanel = false;

	function selectCategory(category: CategoryEntity) {
		selectedCategory = category;
		showCategoryPanel = false;
	}

	function clearForm() {
		date = new Date();
		amount = 0;
		selectedCategory = undefined;
		memo = '';
		selectedAccount = undefined;
	}

	async function handleSubmit() {
		try {
			if (!selectedAccount) throw new Error('アカウントが選択されていません');

			await onSubmit({
				id: initialEntry?.id,
				accountId: selectedAccount.id,
				categoryId: selectedCategory?.id,
				date,
				amount,
				memo,
				type: EntryType.EXPENSE
			});

			clearForm();
		} catch (error) {
			alert((error as Error).message);
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4 pb-24">
	<div>
		<label for="amount" class="block text-sm font-medium mb-1 text-gray-700">金額</label>
	</div>
	{#each entryItems as item, index}
		<p class="block text-sm font-medium mb-1 text-gray-700">項目 {index + 1}</p>
		<div class="flex items-center gap-2">
			<div class="w-2/5">
				<div class="relative">
					<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">¥</span>
					<YenInput
						value={item.amount}
						on:input={(e) => updateEntryItem(index, 'amount', e.detail)}
					/>
				</div>
			</div>
			<div class="w-3/5">
				<button
					type="button"
					class="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white cursor-pointer flex justify-between items-center"
					on:click={() => (showCategoryPanel = true)}
				>
					<span class={item.categoryId ? 'text-gray-900' : 'text-gray-500'}>
						{item.categoryId
							? categoryGroups.flatMap((g) => g.categories).find((c) => c.id === item.categoryId)
									?.name
							: 'カテゴリーを選択'}
					</span>
					<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
			</div>
			{#if index > 0}
				<button
					type="button"
					class="text-red-600 hover:text-red-800"
					on:click={() => removeEntryItem(index)}
				>
					削除
				</button>
			{/if}
		</div>
	{/each}

	<div>
		<label for="account" class="block text-sm font-medium mb-1 text-gray-700">資産</label>
		<div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
			{#each accounts as account}
				<button
					type="button"
					class="p-2 text-sm border rounded-md hover:bg-blue-50 focus:ring-2 focus:ring-blue-500"
					class:bg-blue-100={selectedAccount?.id === account.id}
					on:click={() => (selectedAccount = account)}
				>
					{account.name}
				</button>
			{/each}
		</div>
	</div>

	<div>
		<label for="memo" class="block text-sm font-medium mb-1 text-gray-700">メモ</label>
		<textarea
			id="memo"
			bind:value={memo}
			class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
			rows="3"
		></textarea>
	</div>

	<div class="space-y-2">
		{#if initialEntry}
			<button
				type="submit"
				class="w-full bg-blue-50 text-blue-600 border border-blue-200 p-2 rounded hover:bg-blue-100 transition-colors"
			>
				更新
			</button>
			<button
				type="button"
				class="w-full bg-red-50 text-red-600 border border-red-200 p-2 rounded hover:bg-red-100 transition-colors"
				on:click={() => {
					/* Add delete function here */
				}}
			>
				削除
			</button>
		{:else}
			<button
				type="submit"
				class="w-full bg-blue-50 text-blue-600 border border-blue-200 p-2 rounded hover:bg-blue-100 transition-colors"
			>
				保存
			</button>
			<button
				type="button"
				class="w-full bg-gray-50 text-gray-600 border border-gray-200 p-2 rounded hover:bg-gray-100 transition-colors"
				on:click={async () => {
					await handleSubmit();
				}}
			>
				続けて入力
			</button>
		{/if}
	</div>
</form>

{#if showCategoryPanel}
	<button
		class="fixed inset-0 bg-black bg-opacity-50 z-40"
		on:click={() => (showCategoryPanel = false)}
		transition:fade={{ duration: 200 }}
	>
		<button
			class="fixed inset-x-0 bottom-0 bg-white border-t border-gray-200 shadow-lg h-1/2 overflow-y-auto z-50 rounded-t-2xl"
			on:click|stopPropagation
			transition:slide={{ duration: 300, axis: 'y' }}
		>
			<div class="p-4">
				<h3 class="text-lg font-medium text-gray-900 mb-4">カテゴリーを選択</h3>
				{#each categoryGroups as group}
					<div class="mb-4">
						<h4 class="font-medium text-gray-700 mb-2">{group.name}</h4>
						<div class="grid grid-cols-3 gap-2">
							{#each group.categories as category}
								<button
									type="button"
									class="p-2 text-sm border rounded-md hover:bg-blue-50 focus:ring-2 focus:ring-blue-500"
									class:bg-blue-100={selectedCategory?.id === category.id}
									on:click={() => selectCategory(category)}
								>
									{category.name}
								</button>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</button>
	</button>
{/if}

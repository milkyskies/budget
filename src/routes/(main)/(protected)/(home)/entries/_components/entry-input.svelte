<script lang="ts">
	import dayjs from '$lib/app/time/dayjs';
	import type { AccountEntity } from 'src/lib/domain/entity/account.entity';
	import type { CategoryGroupEntity } from 'src/lib/domain/entity/category-group.entity';
	import type { CategoryEntity } from 'src/lib/domain/entity/category.entity';
	import { fade, slide } from 'svelte/transition';
	import YenInput from './yen-input.svelte';
	import type { UpsertEntryDto } from 'src/routes/api/entries/dto/upsert-entry.dto';
	import { EntryType } from '@prisma/client';

	export let categoryGroups: CategoryGroupEntity[];
	export let accounts: AccountEntity[];

	let date = new Date();
	let amount = 0;
	let selectedCategory: CategoryEntity | undefined;
	let memo = '';
	let selectedAccount: AccountEntity | undefined = accounts[0] ?? undefined;

	let showCategoryPanel = false;

	function selectCategory(category: CategoryEntity) {
		selectedCategory = category;
		showCategoryPanel = false;
	}

	async function addEntry() {
		try {
			if (!selectedAccount) throw new Error('アカウントが選択されていません');

			await onAddEntry({
				accountId: selectedAccount.id,
				categoryId: selectedCategory?.id,
				date,
				amount,
				memo,
				type: EntryType.EXPENSE
			});
		} catch (error) {
			alert((error as Error).message);
		}
	}

	export let onAddEntry: (entry: UpsertEntryDto) => Promise<void>;

	function clearForm() {
		date = new Date();
		amount = 0;
		selectedCategory = undefined;
		memo = '';
		selectedAccount = undefined;
	}
</script>

<form on:submit|preventDefault={addEntry} class="space-y-4">
	<div>
		<label for="amount" class="block text-sm font-medium mb-1 text-gray-700">金額</label>
		<div class="relative">
			<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">¥</span>
			<YenInput bind:value={amount} />
		</div>
	</div>
	<div>
		<label for="category" class="block text-sm font-medium mb-1 text-gray-700">分類</label>
		<button
			id="category"
			type="button"
			class="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white cursor-pointer flex justify-between items-center"
			on:click={() => (showCategoryPanel = true)}
		>
			<span class={selectedCategory ? 'text-gray-900' : 'text-gray-500'}>
				{selectedCategory ? selectedCategory.name : 'カテゴリーを選択'}
			</span>
			<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
	</div>

	<div>
		<label class="block text-sm font-medium mb-1 text-gray-700">資産</label>
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

	<div class="flex justify-end space-x-2">
		<button
			type="submit"
			class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 transition-colors"
		>
			保存
		</button>
		<button
			type="button"
			class="bg-gray-100 text-gray-700 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors"
			on:click={async () => {
				await addEntry();

				clearForm();
			}}
		>
			続ける
		</button>
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

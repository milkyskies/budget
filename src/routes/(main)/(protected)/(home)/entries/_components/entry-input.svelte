<script lang="ts">
	import type { AccountEntity } from 'src/lib/domain/entity/account.entity';
	import type { CategoryGroupEntity } from 'src/lib/domain/entity/category-group.entity';
	import type { CategoryEntity } from 'src/lib/domain/entity/category.entity';
	import { fade, slide } from 'svelte/transition';
	import YenInput from '../../../../../../ui/common/yen-input.svelte';
	import type {
		UpsertEntryDto,
		UpsertEntryItemDto
	} from 'src/routes/api/entries/_dto/upsert-entry.dto';
	import { EntryType } from '@prisma/client';
	import type { EntryEntity } from 'src/lib/domain/entity/entry.entity';
	import type { EntryItemEntity } from 'src/lib/domain/entity/entry-item.entity';
	import dayjs from '$lib/app/time/dayjs';

	export let categoryGroups: CategoryGroupEntity[];
	export let accounts: AccountEntity[];
	export let initialEntry: EntryEntity | undefined = undefined;
	export let onSubmit: (entry: UpsertEntryDto) => Promise<void>;

	type EntryItem = {
		amount: number;
		category?: CategoryEntity;
	};

	let date = dayjs();
	let memo = initialEntry?.memo ?? '';
	let selectedAccount = initialEntry
		? accounts.find((a) => a.id === initialEntry.accountId)
		: accounts[0];

	let entryItems: EntryItem[] = initialEntry?.entryItems ?? [{ amount: 0 }];

	let categoryPanelState:
		| {
				open: boolean;
				entryItemIndex: number;
		  }
		| {
				open: false;
		  } = { open: false };

	$: currentlySelectedEntryItem = categoryPanelState.open
		? entryItems[categoryPanelState.entryItemIndex]
		: undefined;

	function selectCurrentItemCategory(args: { category: CategoryEntity }) {
		if (!categoryPanelState.open) return;

		entryItems[categoryPanelState.entryItemIndex].category = args.category;

		categoryPanelState = {
			open: false
		};
	}

	function clearForm() {
		memo = '';
	}

	async function handleSubmit() {
		try {
			if (!selectedAccount) throw new Error('アカウントが選択されていません');

			await onSubmit({
				id: initialEntry?.id,
				accountId: selectedAccount.id,
				date: date.toDate(),
				entryItems,
				memo,
				type: EntryType.EXPENSE
			});

			clearForm();
		} catch (error) {
			alert((error as Error).message);
		}
	}

	function openCategoryPanel(args: { entryItemIndex: number }) {
		categoryPanelState = {
			open: true,
			entryItemIndex: args.entryItemIndex
		};
	}

	function closeCategoryPanel() {
		categoryPanelState = { open: false };
	}

	function addEntryItem() {
		entryItems = [...entryItems, { amount: 0 }];
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4 pb-24">
	<div>
		<label for="externalParty" class="block text-sm font-medium mb-1 text-gray-700">お店</label>
		<!-- <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"> -->
		<input
			id="externalParty"
			type="text"
			class="p-2 border border-gray-300 rounded-md shadow-sm w-full"
		/>
		<!-- </div> -->
	</div>
	<div>
		<div class="flex items-center gap-2 mb-1">
			<p class="block mb-1 text-sm font-medium text-gray-700">項目</p>
			<button
				type="button"
				class=" bg-blue-50 text-blue-200 border border-blue-200 rounded-full p-0.5 hover:bg-blue-200 transition-colors"
				on:click={addEntryItem}
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/>
				</svg>
			</button>
		</div>
		<div class="space-y-2 mb-4">
			{#each entryItems as item, index}
				<div class="flex items-center gap-2">
					<div class="w-2/5">
						<div class="relative">
							<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">¥</span>
							<YenInput bind:value={item.amount} />
						</div>
					</div>
					<div class="w-3/5">
						<button
							type="button"
							class="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white cursor-pointer flex justify-between items-center"
							on:click={() => openCategoryPanel({ entryItemIndex: index })}
						>
							<span class={item.category ? 'text-gray-900' : 'text-gray-500'}>
								{item.category?.name ?? 'カテゴリーを選択'}
							</span>
							<svg
								class="w-5 h-5 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>
					<button
						type="button"
						class="text-red-600 hover:text-red-800"
						on:click={() => removeEntryItem(index)}
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			{/each}

			<div class="flex justify-start"></div>
		</div>
	</div>

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

{#if categoryPanelState.open}
	<button
		class="fixed inset-0 bg-black bg-opacity-50 z-40"
		on:click={closeCategoryPanel}
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
									class:bg-blue-100={currentlySelectedEntryItem?.category?.id === category.id}
									on:click={() => selectCurrentItemCategory({ category })}
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

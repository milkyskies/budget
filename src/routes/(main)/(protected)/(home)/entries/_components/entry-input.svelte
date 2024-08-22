<script lang="ts">
	import { appDayjs } from '$lib/app/time/dayjs';
	import { EntryType } from '@prisma/client';
	import type { UpsertEntryDto } from 'src/lib/domain/dto/entry.dto';
	import type { AccountEntity } from 'src/lib/domain/entity/account.entity';
	import type { CategoryGroupEntity } from 'src/lib/domain/entity/category-group.entity';
	import type { CategoryEntity } from 'src/lib/domain/entity/category.entity';
	import type { EntryEntity } from 'src/lib/domain/entity/entry.entity';
	import type { ExternalPartyEntity } from 'src/lib/domain/entity/external-party.entity';
	import type { Item } from 'src/ui/common/searchable-select';
	import SearchableSelect from 'src/ui/common/searchable-select.svelte';
	import { fade, slide } from 'svelte/transition';
	import YenInput from '../../../../../../ui/common/yen-input.svelte';

	export let categoryGroups: CategoryGroupEntity[];
	export let externalParties: ExternalPartyEntity[];
	export let accounts: AccountEntity[];
	export let initialEntry: EntryEntity | undefined = undefined;
	export let modalTitle = '';
	export let onSubmit: (entry: UpsertEntryDto) => Promise<void>;
	export let onDelete: (entryId: string) => Promise<void> = () => {
		throw new Error('削除できません。');
	};

	$: {
		const getBaseTitle = () => {
			if (initialEntry?.systemType === 'INITIAL_BALANCE') {
				return initialEntry.type === EntryType.INCOME ? '初期残高' : '初期負債';
			}

			const type = entryType || initialEntry?.type;

			switch (type) {
				case EntryType.INCOME:
					return '収入';
				case EntryType.EXPENSE:
					return '支出';
				case EntryType.TRANSFER:
					return '振替';
				default:
					throw new Error('Invalid entry type');
			}
		};

		const base = getBaseTitle();

		modalTitle = `${base}を${initialEntry ? '編集' : '追加'}`;
	}

	type EntryItem = {
		id?: string;
		amount: number;
		category?: CategoryEntity;
	};

	let date = initialEntry?.date ?? appDayjs();
	let dateString = date.format('YYYY-MM-DD');
	let timeString = date.format('HH:mm');

	function updateDateTime() {
		date = appDayjs(`${dateString} ${timeString}`);
	}

	let memo = initialEntry?.memo ?? '';
	let selectedAccount = initialEntry
		? accounts.find((a) => a.id === initialEntry.accountId)
		: accounts[0];

	let selectedExternalParty:
		| {
				type: 'NONE';
		  }
		| {
				type: 'EXISTING';
				existingId: string;
		  }
		| {
				type: 'NEW';
				newName: string;
		  } = initialEntry?.externalPartyId
		? {
				type: 'EXISTING',
				existingId: initialEntry.externalPartyId
			}
		: {
				type: 'NONE'
			};

	let entryType: EntryType = initialEntry?.type ?? EntryType.EXPENSE;
	let destinationAccount: AccountEntity | undefined = undefined;

	let entryItems: EntryItem[] = initialEntry?.entryItems ?? [{ amount: 0 }];

	let categoryPanelState:
		| {
				open: boolean;
				entryItemIndex: number;
		  }
		| {
				open: false;
		  } = { open: false };

	let externalPartyInput = '';

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
		destinationAccount = undefined;
		memo = '';
		selectedExternalParty = { type: 'NONE' };
		entryItems = [{ amount: 0 }];
		categoryPanelState = { open: false };
	}

	async function handleSubmit() {
		try {
			if (!selectedAccount) throw new Error('アカウントが選択されていません');

			const baseUpsertEntryDto: UpsertEntryDto = {
				type: entryType,
				date: date.toDate(),
				memo,
				accountId: selectedAccount.id,
				entryItems: entryItems.map((item) => ({
					amount: item.amount,
					categoryId: item.category?.id
				})),
				destinationAccountId: destinationAccount?.id
			};

			const upsertEntryDto = (() => {
				if (
					selectedExternalParty.type === 'NEW' ||
					(externalPartyInput &&
						!externalParties.some(
							(ep) => ep.name.toLowerCase() === externalPartyInput.toLowerCase()
						))
				) {
					return {
						...baseUpsertEntryDto,
						newExternalPartyName:
							selectedExternalParty.type === 'NEW'
								? selectedExternalParty.newName
								: externalPartyInput
					};
				} else if (selectedExternalParty.type === 'EXISTING') {
					return {
						...baseUpsertEntryDto,
						existingExternalPartyId: selectedExternalParty.existingId
					};
				}

				return baseUpsertEntryDto;
			})();

			await onSubmit(upsertEntryDto);

			clearForm();
		} catch (error) {
			alert((error as Error).message);
		}
	}

	async function handleDelete() {
		if (!initialEntry) throw new Error('No entry');

		const isConfirmed = confirm('本当に削除しますか？');

		if (!isConfirmed) return;

		await onDelete(initialEntry.id);
		clearForm();
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

	function removeEntryItem(index: number) {
		entryItems = entryItems.filter((_, i) => i !== index);
	}

	function handleExternalPartySelect(item: Item) {
		if (item.isNew) {
			selectedExternalParty = {
				type: 'NEW',
				newName: item.name
			};
		} else {
			selectedExternalParty = {
				type: 'EXISTING',
				existingId: item.id
			};
		}

		externalPartyInput = item.name;
	}

	function selectEntryType(type: EntryType) {
		selectedExternalParty = { type: 'NONE' };
		destinationAccount = undefined;
		categoryPanelState = { open: false };

		entryType = type;
	}

	function handleExternalPartyInputChange(value: string) {
		externalPartyInput = value;

		if (value && !externalParties.some((ep) => ep.name.toLowerCase() === value.toLowerCase())) {
			selectedExternalParty = {
				type: 'NEW',
				newName: value
			};
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4 pb-24">
	{#if initialEntry?.systemType !== 'INITIAL_BALANCE'}
		<div>
			<div class="grid grid-cols-3 gap-2">
				<button
					type="button"
					class="p-2 text-sm border rounded-md hover:bg-blue-50 focus:ring-2 focus:ring-blue-500"
					class:bg-blue-100={entryType === EntryType.EXPENSE}
					on:click={() => selectEntryType(EntryType.EXPENSE)}
				>
					支出
				</button>
				<button
					type="button"
					class="p-2 text-sm border rounded-md hover:bg-blue-50 focus:ring-2 focus:ring-blue-500"
					class:bg-blue-100={entryType === EntryType.INCOME}
					on:click={() => selectEntryType(EntryType.INCOME)}
				>
					収入
				</button>
				<button
					type="button"
					class="p-2 text-sm border rounded-md hover:bg-blue-50 focus:ring-2 focus:ring-blue-500"
					class:bg-blue-100={entryType === EntryType.TRANSFER}
					on:click={() => selectEntryType(EntryType.TRANSFER)}
				>
					振替
				</button>
			</div>
		</div>
	{/if}

	<div>
		<label for="date" class="block text-sm font-medium mb-1 text-gray-700">日付</label>
		<div class="flex gap-2">
			<input
				type="date"
				id="date"
				bind:value={dateString}
				on:change={updateDateTime}
				class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
			/>
			<input
				type="time"
				id="time"
				bind:value={timeString}
				on:change={updateDateTime}
				class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
			/>
		</div>
	</div>
	{#if entryType !== EntryType.TRANSFER && initialEntry?.systemType !== 'INITIAL_BALANCE'}
		<div>
			<label for="externalParty" class="block text-sm font-medium mb-1 text-gray-700">
				{entryType === EntryType.EXPENSE ? 'お店' : '収入源'}
			</label>
			{#key entryType}
				<SearchableSelect
					items={externalParties}
					placeholder="検索または新規作成"
					initialValue={initialEntry?.externalParty?.name}
					onSelect={handleExternalPartySelect}
					onInputChange={handleExternalPartyInputChange}
				/>
			{/key}
		</div>
	{/if}
	<div>
		<div class="flex gap-2 items-end">
			{#if entryType === EntryType.EXPENSE && initialEntry?.systemType !== 'INITIAL_BALANCE'}
				<p class="block mb-1 text-sm font-medium text-gray-700">項目</p>
				<button
					type="button"
					class=" bg-gray-50 mb-1 text-gray-400 border border-gray-300 rounded-full transition-colors"
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
			{:else}
				<p class="block mb-1 text-sm font-medium text-gray-700">金額</p>
			{/if}
		</div>
		<div class="space-y-2 mb-4">
			{#each entryItems as item, index}
				<div class="flex items-center gap-2">
					<div class="flex-1">
						<div class="relative">
							<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">¥</span>
							<YenInput bind:value={item.amount} />
						</div>
					</div>
					{#if entryType === EntryType.EXPENSE && initialEntry?.systemType !== 'INITIAL_BALANCE'}
						<div class="w-3/5">
							<button
								type="button"
								class="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white cursor-pointer flex justify-between items-center"
								on:click={() => openCategoryPanel({ entryItemIndex: index })}
							>
								<span class={item.category ? 'text-gray-900' : 'text-gray-500'}>
									{item.category?.name ?? '分類を選択'}
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
					{/if}
					{#if entryItems.length > 1}
						<button type="button" class="text-gray-400" on:click={() => removeEntryItem(index)}>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					{/if}
				</div>
			{/each}

			<div class="flex justify-start"></div>
		</div>
	</div>

	<div>
		<label for="account" class="block text-sm font-medium mb-1 text-gray-700">
			{entryType === EntryType.TRANSFER ? '振替元' : '資産'}
		</label>
		<div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
			{#each accounts as account}
				<button
					type="button"
					class={`p-2 text-sm border rounded-md
						${
							initialEntry?.systemType === 'INITIAL_BALANCE' && selectedAccount?.id !== account.id
								? 'cursor-not-allowed bg-gray-200 text-black/30'
								: 'hover:bg-blue-50 focus:ring-2 focus:ring-blue-500'
						}
						${selectedAccount?.id === account.id && 'bg-blue-100'}
					`}
					class:bg-blue-100={selectedAccount?.id === account.id}
					on:click={() => (selectedAccount = account)}
					disabled={initialEntry?.systemType === 'INITIAL_BALANCE'}
				>
					{account.name}
				</button>
			{/each}
		</div>
	</div>

	{#if entryType === EntryType.TRANSFER}
		<div>
			<label for="destinationAccount" class="block text-sm font-medium mb-1 text-gray-700"
				>振替先</label
			>
			<div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
				{#each accounts as account}
					<button
						type="button"
						class={`p-2 text-sm border rounded-md
						${
							account.id === selectedAccount?.id
								? 'cursor-not-allowed bg-gray-200 text-black/30'
								: 'hover:bg-blue-50 focus:ring-2 focus:ring-blue-500'
						}
						${destinationAccount?.id === account.id && 'bg-blue-100'}
					`}
						disabled={account.id === selectedAccount?.id}
						on:click={() => (destinationAccount = account)}
					>
						{account.name}
					</button>
				{/each}
			</div>
		</div>
	{/if}

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
				on:click={handleDelete}
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
				<h3 class="text-lg font-medium text-gray-900 mb-4">分類を選択</h3>
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

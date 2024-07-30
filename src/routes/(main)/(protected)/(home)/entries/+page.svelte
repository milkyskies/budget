<script lang="ts">
	import { formatCurrency } from 'src/lib/app/presentation/format-currency.util';
	import { AccountEntity } from 'src/lib/domain/entity/account.entity';
	import { CategoryGroupEntity } from 'src/lib/domain/entity/category-group.entity';
	import { EntryEntity } from 'src/lib/domain/entity/entry.entity';
	import Modal from 'src/ui/common/modal.svelte';
	import type { PageServerData } from './$types';
	import EntryInput from './_components/entry-input.svelte';
	import { getSvetchClient } from 'src/lib/app/api/svetch.client';
	import type { UpsertEntryDto } from 'src/lib/domain/dto/entry.dto';
	import { invalidateAll } from '$app/navigation';
	import { groupBy } from 'lodash-es';
	import { appDayjs } from 'src/lib/app/time/dayjs';
	import { ExternalPartyEntity } from 'src/lib/domain/entity/external-party.entity';

	export let data: PageServerData;

	$: entries = data.entries.map((entry) => EntryEntity.create(entry));
	$: categoryGroups = data.categoryGroups.map((group) => CategoryGroupEntity.create(group));
	$: accounts = data.accounts.map((account) => AccountEntity.create(account));
	$: externalParties = data.externalParties.map((externalParty) =>
		ExternalPartyEntity.create(externalParty)
	);

	let openModal = 'NONE' as 'NEW_ENTRY' | 'EDIT_ENTRY' | 'NONE';

	let modalTitle = '';

	let editingEntry: EntryEntity | undefined;

	function openEditModal(entry: EntryEntity) {
		editingEntry = entry;
		openModal = 'EDIT_ENTRY';
	}

	async function updateEntry(args: { entry: UpsertEntryDto }) {
		const apiClient = getSvetchClient();
		const response = await apiClient.put(`api/budgets/:budgetId/entries`, {
			body: {
				...args.entry,
				id: editingEntry?.id
			},
			path: {
				budgetId: data.budgetId
			}
		});

		if (!response.ok) {
			alert('更新に失敗しました');

			return;
		}

		await invalidateAll();
	}

	async function deleteEntry(args: { entryId: string }) {
		const apiClient = getSvetchClient();
		const response = await apiClient.delete(`api/budgets/:budgetId/entries/:entryId`, {
			path: {
				entryId: args.entryId,
				budgetId: data.budgetId
			}
		});

		if (!response.ok) {
			alert('削除に失敗しました');

			return;
		}

		await invalidateAll();
	}

	function groupEntriesByDate(
		entries: EntryEntity[]
	): { date: appDayjs.Dayjs; entries: EntryEntity[] }[] {
		const grouped = groupBy<EntryEntity>(entries, (entry) => entry.date.format('YYYY-MM-DD'));

		return Object.entries(grouped)
			.map(([dateString, entries]) => ({
				date: appDayjs(dateString),
				entries
			}))
			.sort((a, b) => b.date.valueOf() - a.date.valueOf());
	}
</script>

<div class="flex-1 bg-gray-50">
	<!-- Header -->
	<header class="bg-white shadow-sm">
		<div class="flex flex-col lg:flex-row justify-between lg:items-center p-4">
			<h2 class="text-xl lg:text-2xl font-bold text-gray-800">家計簿</h2>
			<button
				class="mt-4 lg:mt-0 bg-blue-50 text-blue-600 border-blue-200 border px-4 py-2 text-sm rounded-md hover:bg-blue-100 transition-colors"
				on:click={() => (openModal = 'NEW_ENTRY')}>新規入力</button
			>
		</div>
	</header>

	<div class="bg-gray-50 p-4">
		{#each groupEntriesByDate(entries) as { date, entries: groupedEntries }}
			<div class="mb-6">
				<h3 class="text-lg font-semibold text-gray-700 mb-2">{date.format('MMMMDD日(dd)')}</h3>
				<div class="space-y-3">
					{#each groupedEntries as entry}
						<!-- First handle everything with a system type separately -->
						{#if entry.systemType === 'INITIAL_BALANCE'}
							<button class="w-full text-left" on:click={() => openEditModal(entry)}>
								<div class="bg-white rounded-lg shadow p-4">
									<div class="flex justify-between items-center mb-2 text-gray-900 font-medium">
										{#if entry.type === 'INCOME'}
											<span>初期残高</span>
											<span class="text-green-500"
												>{formatCurrency(entry.getTransactionSign() * entry.totalAmount)}</span
											>
										{:else if entry.type === 'EXPENSE'}
											<span>初期負債</span>
											<span class="font-medium"
												>{formatCurrency(entry.getTransactionSign() * entry.totalAmount)}</span
											>
										{/if}
									</div>
									<div class="flex justify-between items-center text-xs text-gray-500">
										<span>
											{entry.account?.name}
										</span>
									</div>
									{#if entry.memo}
										<p class="text-gray-600 text-xs mt-3">{entry.memo}</p>
									{/if}
								</div>
							</button>
						{:else if entry.type === 'EXPENSE'}
							<button class="w-full text-left" on:click={() => openEditModal(entry)}>
								<div class="bg-white rounded-lg shadow p-4">
									<div class="flex justify-between items-center mb-2 text-gray-900 font-medium">
										{#if entry.externalParty}
											<span class="">{entry.externalParty.name}</span>
										{:else}
											<span>未登録</span>
										{/if}
										<span class=""
											>{formatCurrency(entry.getTransactionSign() * entry.totalAmount)}</span
										>
									</div>
									<div class="space-y-2">
										{#each entry.entryItems as item}
											<div class="flex justify-between items-center text-xs text-gray-500">
												<span>
													{#if item.category}
														{item.category?.name}
													{:else}
														<span class="px-2 text-xs py-1 bg-yellow-300 rounded-xl"
															>分類が未登録</span
														>
													{/if}
												</span>
												<span class="font-medium"
													>{formatCurrency(entry.getTransactionSign() * item.amount)}</span
												>
											</div>
										{/each}
									</div>
									{#if entry.memo}
										<p class="text-gray-600 text-xs mt-3">{entry.memo}</p>
									{/if}
								</div>
							</button>
						{:else if entry.type === 'INCOME'}
							<button class="w-full text-left" on:click={() => openEditModal(entry)}>
								<div class="bg-white rounded-lg shadow p-4">
									<div class="flex justify-between items-center mb-2 text-gray-900 font-medium">
										<span>収入</span>
										<span class="text-green-500">{formatCurrency(Math.abs(entry.totalAmount))}</span
										>
									</div>
									<div class="flex justify-between items-center text-xs text-gray-500">
										<span>
											{entry.account?.name}
										</span>
									</div>
									{#if entry.memo}
										<p class="text-gray-600 text-xs mt-3">{entry.memo}</p>
									{/if}
								</div>
							</button>
						{:else if entry.type === 'TRANSFER'}
							<button class="w-full text-left" on:click={() => openEditModal(entry)}>
								<div class="bg-white rounded-lg shadow p-4">
									<div class="flex justify-between items-center mb-2 text-gray-900 font-medium">
										<span>振替</span>
										<span class="text-blue-500">{formatCurrency(Math.abs(entry.totalAmount))}</span>
									</div>
									<div class="flex justify-between items-center text-xs text-gray-500">
										<span>
											{entry.account?.name} → {entry.destinationAccount?.name}
										</span>
									</div>
									{#if entry.memo}
										<p class="text-gray-600 text-xs mt-3">{entry.memo}</p>
									{/if}
								</div>
							</button>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- New entry modal -->
{#if openModal === 'NEW_ENTRY'}
	<Modal
		onClose={() => {
			openModal = 'NONE';
		}}
		title={modalTitle}
	>
		<EntryInput
			{accounts}
			{categoryGroups}
			{externalParties}
			onSubmit={async (entry) => {
				await updateEntry({ entry });
				openModal = 'NONE';
				editingEntry = undefined;
			}}
			bind:modalTitle
		/>
	</Modal>
{:else if openModal === 'EDIT_ENTRY'}
	<Modal
		onClose={() => {
			openModal = 'NONE';
			editingEntry = undefined;
		}}
		title={modalTitle}
	>
		<EntryInput
			{accounts}
			{categoryGroups}
			{externalParties}
			initialEntry={editingEntry}
			onSubmit={async (entry) => {
				await updateEntry({ entry });
				openModal = 'NONE';
				editingEntry = undefined;
			}}
			onDelete={async (entryId) => {
				await deleteEntry({ entryId });
				openModal = 'NONE';
				editingEntry = undefined;
			}}
			bind:modalTitle
		/>
	</Modal>
{/if}

<script lang="ts">
	import { formatCurrency } from 'src/lib/app/presentation/format-currency.util';
	import { AccountEntity } from 'src/lib/domain/entity/account.entity';
	import { CategoryGroupEntity } from 'src/lib/domain/entity/category-group.entity';
	import { EntryEntity } from 'src/lib/domain/entity/entry.entity';
	import Modal from 'src/ui/common/modal.svelte';
	import type { PageServerData } from './$types';
	import EntryInput from './_components/entry-input.svelte';
	import { getSvetchClient } from 'src/lib/app/api/svetch.client';
	import type { UpsertEntryDto } from 'src/routes/api/entries/dto/upsert-entry.dto';
	import { invalidateAll } from '$app/navigation';

	export let data: PageServerData;

	$: entries = data.entries.map((entry) => EntryEntity.create(entry));
	$: categoryGroups = data.categoryGroups.map((group) => CategoryGroupEntity.create(group));
	$: accounts = data.accounts.map((account) => AccountEntity.create(account));

	let openModal = 'NONE' as 'NEW_ENTRY' | 'EDIT_ENTRY' | 'NONE';

	let editingEntry: EntryEntity | undefined;

	async function addEntry(args: { entry: UpsertEntryDto }) {
		const apiClient = getSvetchClient();
		const response = await apiClient.put('api/entries', {
			body: {
				...args.entry
			}
		});

		if (!response.ok) {
			// TODO: Show error message to user
			alert('失敗しました');

			return;
		}

		await invalidateAll();

		openModal = 'NONE';
	}

	function openEditModal(entry: EntryEntity) {
		editingEntry = entry;
		openModal = 'EDIT_ENTRY';
	}

	async function updateEntry(args: { entry: UpsertEntryDto }) {
		const apiClient = getSvetchClient();
		const response = await apiClient.put(`api/entries`, {
			body: {
				...args.entry,
				id: editingEntry?.id
			}
		});

		if (!response.ok) {
			alert('更新に失敗しました');

			return;
		}

		await invalidateAll();
		openModal = 'NONE';
		editingEntry = undefined;
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

	<div class="bg-white shadow-sm rounded-lg m-4 overflow-x-auto border">
		<table class="w-full">
			<thead class="text-gray-700">
				<tr>
					<th class="text-left py-3 px-4">日付</th>
					<th class="text-left py-3 px-4">カテゴリー</th>
					<th class="text-left py-3 px-4 hidden lg:table-cell">説明</th>
					<th class="text-right py-3 px-4">金額</th>
				</tr>
			</thead>
			<tbody>
				{#each entries as entry}
					<tr class="border-t border-gray-100" on:click={() => openEditModal(entry)}>
						<td class="py-3 px-4">{new Date(entry.date).toLocaleDateString('ja-JP')}</td>
						<td class="py-3 px-4">{entry.category?.name}</td>
						<td class="py-3 px-4 hidden lg:table-cell">{entry.memo}</td>
						<td class="py-3 px-4 text-right">{formatCurrency(entry.amount)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<!-- New entry modal -->
{#if openModal === 'NEW_ENTRY'}
	<Modal
		onClose={() => {
			openModal = 'NONE';
		}}
		title="支出"
	>
		<EntryInput
			{accounts}
			{categoryGroups}
			onSubmit={async (entry) => {
				await updateEntry({ entry });
			}}
		/>
	</Modal>
{:else if openModal === 'EDIT_ENTRY'}
	<Modal
		onClose={() => {
			openModal = 'NONE';
			editingEntry = undefined;
		}}
		title="支出を編集"
	>
		<EntryInput
			{accounts}
			{categoryGroups}
			initialEntry={editingEntry}
			onSubmit={async (entry) => {
				await updateEntry({ entry });
			}}
		/>
	</Modal>
{/if}

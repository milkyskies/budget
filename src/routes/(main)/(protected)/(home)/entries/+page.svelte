<script lang="ts">
	import { formatCurrency } from 'src/lib/app/presentation/format-currency.util';
	import { EntryEntity } from 'src/lib/domain/entity/entry.entity';
	import Modal from 'src/ui/common/modal.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	let entries: EntryEntity[] = data.entries.map((entry) => EntryEntity.create(entry));
	let openModal = 'NONE' as 'NEW_ENTRY' | 'EDIT_ENTRY' | 'NONE';
	let newEntry = {
		date: new Date().toISOString().split('T')[0],
		amount: 0,
		category: '',
		description: '',
		accountId: ''
	};

	async function addEntry() {
		// const apiClient = getSvetchClient();
		// const response = await apiClient.post('api/entries', { body: newEntry });
		// if (response.ok && response.data) {
		// 	entries = [...entries, EntryEntity.create(response.data)];
		// 	openModal = 'NONE';
		// }
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
					<tr class="border-t border-gray-100">
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
<Modal open={openModal === 'NEW_ENTRY'}>
	<h2 class="text-xl font-bold mb-4 text-gray-800">新規入力</h2>
	<form on:submit|preventDefault={addEntry}>
		<!-- Form fields remain the same -->
	</form>
</Modal>

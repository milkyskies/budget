<script lang="ts">
	import { formatCurrency } from 'src/lib/app/presentation/format-currency.util';
	import { BudgetEntity } from 'src/lib/domain/entity/budget.entity';
	import type { PageServerData } from './$types';
	import { appDayjs } from 'src/lib/app/time/dayjs';
	import { getSvetchClient } from 'src/lib/app/api/svetch.client';
	import { invalidateAll } from '$app/navigation';
	import Modal from 'src/ui/common/modal.svelte';
	import YenInput from 'src/ui/common/yen-input.svelte';
	import { CategoryEntity } from 'src/lib/domain/entity/category.entity';

	export let data: PageServerData;

	const now = appDayjs();

	$: budget = BudgetEntity.create(data.budget);

	$: readyToAssign = budget.getMonthAssignableAmount(now);
	$: categoryGroups = budget.categoryGroups;
	$: availableInJune = 217272;
	$: accounts = budget.accounts;

	let openModal = 'NONE' as 'SET_ASSIGNMENT' | 'NONE';

	// For assignment
	let selectedCategory: CategoryEntity;
	let assignmentAmount = 0;

	function changeMonth(direction: 'prev' | 'next') {
		throw new Error('Not implemented');
	}

	function formatUsedAmount(amount: number) {
		return amount > 0 ? `-${formatCurrency(amount)}` : formatCurrency(amount);
	}

	function handleClickAssignment(category: CategoryEntity) {
		selectedCategory = category;
		openModal = 'SET_ASSIGNMENT';
	}

	async function setAssignment() {
		const apiClient = getSvetchClient();

		const response = await apiClient.post('api/budgets/:budgetId/assignments', {
			body: {
				amount: assignmentAmount,
				categoryId: selectedCategory.id,
				date: now.toDate()
			},
			path: {
				budgetId: budget.id
			}
		});

		if (!response.ok) {
			throw new Error('Failed to set assignment');
		}

		await invalidateAll();

		assignmentAmount = 0;
		openModal = 'NONE';
	}
</script>

<!-- メインコンテンツ -->
<div class="flex-1 bg-gray-50">
	<!-- Header -->
	<header class="bg-white shadow-sm">
		<div class="flex flex-col lg:flex-row justify-between lg:items-center p-4">
			<h2 class="text-xl lg:text-2xl font-bold text-gray-800">
				{budget.createdAt.format('YYYY年MMMM')}
			</h2>
			<div
				class="bg-white mt-4 lg:mt-0 p-4 rounded-lg border lg:w-auto flex justify-between lg:min-w-72"
			>
				<div class="flex flex-col">
					<span class="font-bold">{formatCurrency(readyToAssign)}</span>
					<span class="text-sm">割り当て可能</span>
				</div>
				<button
					class="bg-green-50 text-green-500 border-green-200 border px-4 py-2 text-sm rounded-md hover:bg-green-100 transition-colors"
					>割り当て</button
				>
			</div>
		</div>
	</header>

	<div class="bg-white shadow-sm rounded-lg m-4 overflow-x-auto border">
		<table class="w-full">
			<thead class=" text-gray-700">
				<tr>
					<th class="text-left py-3 px-4">分類</th>
					<th class="text-right py-3 px-4">割り当て金額</th>
					<th class="text-right py-3 px-4 hidden lg:table-cell">使った金額</th>
					<th class="text-right py-3 px-4">残金</th>
				</tr>
			</thead>
			<tbody>
				{#each categoryGroups as categoryGroup}
					<tr class="border-t">
						<td class="py-3 px-4 font-medium text-gray-800">{categoryGroup.name}</td>
						<td class="py-3 px-4 text-right"
							>{formatCurrency(categoryGroup.getMonthAssignmentAmount(now))}</td
						>
						<td class="py-3 px-4 text-right hidden lg:table-cell"
							>{formatUsedAmount(categoryGroup.getMonthUsedAmount(now))}</td
						>
						<td class="py-3 px-4 text-right"
							>{formatCurrency(categoryGroup.getMonthRemainingAmount(now))}</td
						>
					</tr>
					{#each categoryGroup.categories as category}
						<tr class="border-t border-t-gray-100">
							<td class="py-3 px-4 pl-8 text-gray-700">{category.name}</td>
							<td class="py-3 px-4 text-right">
								<button
									class="text-blue-600 hover:text-blue-800"
									on:click={() => handleClickAssignment(category)}
									>{formatCurrency(category.getMonthAssignmentAmount(now))}</button
								>
							</td>
							<td class="py-3 px-4 text-right hidden lg:table-cell"
								>{formatUsedAmount(category.getMonthUsedAmount(now))}</td
							>
							<td class="py-3 px-4 text-right"
								>{formatCurrency(category.getMonthRemainingAmount(now))}</td
							>
						</tr>
					{/each}
				{/each}
			</tbody>
		</table>
	</div>
</div>

<!-- 右サイドバー (PCのみ表示) -->
<aside class="w-80 bg-white p-4 border-l hidden lg:block">
	<div class="mb-4 bg-blue-50 p-4 rounded-lg shadow-sm">
		<h4 class="font-bold mb-2 text-gray-800">{budget.createdAt.format('MMMM')}の利用可能額</h4>
		<p class="text-2xl font-bold text-blue-700">{formatCurrency(availableInJune)}</p>
	</div>
	<div class="space-y-3">
		<div class="flex justify-between p-2 bg-gray-50 rounded">
			<span class="text-gray-600">先月からの残り</span>
			<span class="font-medium">¥0</span>
		</div>
		<div class="flex justify-between p-2 bg-gray-50 rounded">
			<span class="text-gray-600">{budget.createdAt.format('MMMM')}に割り当て</span>
			<span class="font-medium">{formatCurrency(availableInJune)}</span>
		</div>
		<div class="flex justify-between p-2 bg-gray-50 rounded">
			<span class="text-gray-600">使った金額</span>
			<span class="font-medium">¥0</span>
		</div>
	</div>
</aside>

{#if openModal === 'SET_ASSIGNMENT'}
	<Modal onClose={() => (openModal = 'NONE')} title="{selectedCategory.name}に割り当て">
		<form on:submit|preventDefault={setAssignment} class="space-y-4">
			<div>
				<label for="assignment-amount" class="block text-sm font-medium mb-1 text-gray-700">
					割り当て金額
				</label>
				<div class="relative">
					<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
						<span>¥</span>
					</span>
					<YenInput
						id="assignment-amount"
						bind:value={assignmentAmount}
						placeholder="割り当て金額を入力"
					/>
				</div>
			</div>
			<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
				設定
			</button>
		</form>
	</Modal>
{/if}

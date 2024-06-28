<script lang="ts">
	import { formatCurrency } from 'src/lib/app/presentation/format-currency.util';
	import { BudgetEntity } from 'src/lib/domain/entity/budget.entity';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: budget = BudgetEntity.create(data.budget);

	$: readyToAssign = budget.monthlyAssignableAmount;
	$: categoryGroups = budget.categoryGroups;
	$: availableInJune = 217272;
	$: accounts = budget.accounts;

	let openModal = 'NONE' as 'NEW_ACCOUNT' | 'EDIT_ACCOUNT' | 'NONE';

	function changeMonth(direction: 'prev' | 'next') {
		throw new Error('Not implemented');
	}

	function formatUsedAmount(amount: number) {
		return amount > 0 ? `-${formatCurrency(amount)}` : formatCurrency(amount);
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
					<th class="text-left py-3 px-4">カテゴリー</th>
					<th class="text-right py-3 px-4">割り当て金額</th>
					<th class="text-right py-3 px-4 hidden lg:table-cell">使った金額</th>
					<th class="text-right py-3 px-4">残金</th>
				</tr>
			</thead>
			<tbody>
				{#each categoryGroups as categoryGroup}
					<tr class="border-t">
						<td class="py-3 px-4 font-medium text-gray-800">{categoryGroup.name}</td>
						<td class="py-3 px-4 text-right">{formatCurrency(categoryGroup.totalAssignedAmount)}</td
						>
						<td class="py-3 px-4 text-right hidden lg:table-cell"
							>{formatUsedAmount(categoryGroup.totalUsedAmount)}</td
						>
						<td class="py-3 px-4 text-right"
							>{formatCurrency(categoryGroup.totalRemainingAmount)}</td
						>
					</tr>
					{#each categoryGroup.categories as category}
						<tr class="border-t border-t-gray-100">
							<td class="py-3 px-4 pl-8 text-gray-700">{category.name}</td>
							<td class="py-3 px-4 text-right">
								<button class="text-blue-600 hover:text-blue-800"
									>{formatCurrency(category.assignedAmount)}</button
								>
							</td>
							<td class="py-3 px-4 text-right hidden lg:table-cell"
								>{formatUsedAmount(category.usedAmount)}</td
							>
							<td class="py-3 px-4 text-right">{formatCurrency(category.remainingAmount)}</td>
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

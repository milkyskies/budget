<script lang="ts">
	import { BudgetEntity } from 'src/lib/domain/entity/budget.entity';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const budget = BudgetEntity.create(data.budget);

	// Use regular variables instead of stores
	let currentMonth = 'Jun 2024';
	let readyToAssign = budget.accounts.reduce((sum, account) => sum + account.balance, 0);
	let categoryGroups = budget.categoryGroups;
	let selectedTab = 'All';
	let availableInJune = 217272;
	let accounts = budget.accounts;

	// async function updateCategory(
	// 	categoryGroupId: string,
	// 	categoryId: string,
	// 	amount: number
	// ): Promise<void> {
	// 	// Simulating API delay
	// 	await new Promise((resolve) => setTimeout(resolve, 300));

	// 	// API call comment
	// 	// await apiClient.updateCategory(categoryGroupId, categoryId, amount);

	// 	// Mock update logic
	// 	categoryGroups = categoryGroups.map((group) => {
	// 		if (group.id === categoryGroupId) {
	// 			const updatedCategories = group.categories.map((cat) => {
	// 				if (cat.id === categoryId) {
	// 					return {
	// 						...cat,
	// 						assigned: cat.assigned + amount,
	// 						available: cat.available + amount
	// 					};
	// 				}

	// 				return cat;
	// 			});

	// 			const totalAssigned = updatedCategories.reduce((sum, cat) => sum + cat.assigned, 0);
	// 			const totalAvailable = updatedCategories.reduce((sum, cat) => sum + cat.available, 0);

	// 			return {
	// 				...group,
	// 				assigned: totalAssigned,
	// 				available: totalAvailable,
	// 				categories: updatedCategories
	// 			};
	// 		}

	// 		return group;
	// 	});

	// 	readyToAssign -= amount;
	// 	availableInJune += amount;
	// }

	function formatCurrency(amount: number) {
		return new Intl.NumberFormat('ja-JP', {
			style: 'currency',
			currency: 'JPY',
			minimumFractionDigits: 0
		}).format(amount);
	}

	// function handleAssign(categoryGroupId: string, categoryId: string, currentAssigned: number) {
	// 	const input = prompt('Enter amount to assign:', currentAssigned.toString());

	// 	if (input !== null) {
	// 		const amount = parseFloat(input);

	// 		if (!isNaN(amount)) {
	// 			const difference = amount - currentAssigned;

	// 			updateCategory(categoryGroupId, categoryId, difference);
	// 		}
	// 	}
	// }

	function changeMonth(direction: 'prev' | 'next') {
		const [month, year] = currentMonth.split(' ');
		const date = new Date(`{month} 1, {year}`);

		date.setMonth(date.getMonth() + (direction === 'next' ? 1 : -1));

		currentMonth = `{date.toLocaleString('default', { month: 'short' })} {date.getFullYear()}`;

		// API call comment
		// const newMonthData = await apiClient.getMonthData(currentMonth);
		// Update relevant data with newMonthData
	}

	// async function handleQuickBudget(action: string) {
	// 	// API call comment
	// 	// const updatedBudget = await apiClient.quickBudget(action);

	// 	// Mock implementation
	// 	alert(`Quick budget action: {action}`);
	// 	// You would update the budget based on the selected action here
	// }
</script>

<main class="bg-gray-100 min-h-screen flex">
	<!-- Sidebar -->
	<aside class="w-64 bg-[#2c3d53] text-white p-4">
		<div class="mb-8">
			<h1 class="text-xl font-bold">{budget.name}</h1>
			<p class="text-sm text-gray-400">cr.heisei12@gmail.com</p>
		</div>
		<nav>
			<a href="#" class="block py-2 px-4 bg-[#394b61] rounded mb-1">Budget</a>
			<a href="#" class="block py-2 px-4 hover:bg-[#394b61] rounded mb-1">Reports</a>
			<a href="#" class="block py-2 px-4 hover:bg-[#394b61] rounded mb-1">All Accounts</a>
		</nav>
		<div class="mt-4">
			<h2 class="text-xs font-bold mb-2">BUDGET</h2>
			<div class="flex justify-between items-center mb-1">
				<span class="text-sm">関西みらい銀行</span>
				<span class="text-sm">¥270,175</span>
			</div>
			<div class="flex justify-between items-center">
				<span class="text-sm">楽天カード</span>
				<span class="text-sm text-red-400">-¥136,838</span>
			</div>
		</div>
		<button class="mt-4 text-sm text-blue-300 hover:underline">Add Account</button>
	</aside>

	<!-- Main content -->
	<div class="flex-1 p-8">
		<header class="mb-6">
			<div class="flex justify-between items-center mb-4">
				<div class="flex items-center">
					<button on:click={() => changeMonth('prev')} class="mr-2 text-gray-600">
						<svg
							class="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							></path></svg
						>
					</button>
					<h2 class="text-xl font-bold">{currentMonth}</h2>
					<button on:click={() => changeMonth('next')} class="ml-2 text-gray-600">
						<svg
							class="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							></path></svg
						>
					</button>
				</div>
				<div class="bg-green-100 px-4 py-2 rounded-lg">
					<span class="text-green-700 font-bold">{formatCurrency(readyToAssign)}</span>
					<span class="text-green-700 ml-2">Ready to Assign</span>
					<button class="ml-2 bg-green-500 text-white px-3 py-1 rounded">Assign</button>
				</div>
			</div>
			<div class="flex space-x-2 mb-4">
				{#each ['All', 'Underfunded', 'Overfunded', 'Money Available', 'Snoozed'] as tab}
					<button
						on:click={() => {
							selectedTab = tab;
						}}
						class={`px-3 py-1 rounded {
							selectedTab === tab ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-700'
						}`}>{tab}</button
					>
				{/each}
			</div>
		</header>

		<div class="bg-white rounded-lg shadow">
			<table class="w-full">
				<thead class="bg-gray-50 text-gray-700">
					<tr>
						<th class="text-left py-2 px-4">CATEGORY</th>
						<th class="text-right py-2 px-4">ASSIGNED</th>
						<th class="text-right py-2 px-4">ACTIVITY</th>
						<th class="text-right py-2 px-4">AVAILABLE</th>
					</tr>
				</thead>
				<tbody>
					{#each categoryGroups as categoryGroup}
						<tr class="border-t">
							<td class="py-2 px-4 font-medium">{categoryGroup.name}</td>
							<td class="py-2 px-4 text-right"
								>{formatCurrency(categoryGroup.totalAssignedAmount)}</td
							>
							<td class="py-2 px-4 text-right">{formatCurrency(categoryGroup.activity)}</td>
							<td class="py-2 px-4 text-right"
								>{formatCurrency(categoryGroup.totalAssignedAmount - categoryGroup.activity)}</td
							>
						</tr>
						{#each categoryGroup.categories as category}
							<tr class="bg-gray-50">
								<td class="py-2 px-4 pl-8">{category.name}</td>
								<td class="py-2 px-4 text-right">
									<button
										on:click={() => handleAssign(categoryGroup.id, category.id, category.assigned)}
										class="text-blue-600 hover:underline"
										>{formatCurrency(category.assignedAmount)}</button
									>
								</td>
								<td class="py-2 px-4 text-right">{formatCurrency(category.activity)}</td>
								<td class="py-2 px-4 text-right">{formatCurrency(category - category.available)}</td
								>
							</tr>
						{/each}
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Right sidebar -->
	<aside class="w-80 bg-white p-4 border-l">
		<h3 class="font-bold mb-4">Auto-Assign</h3>
		<div class="space-y-2 mb-6">
			<button on:click={() => handleQuickBudget('underfunded')} class="flex justify-between w-full">
				<span class="text-blue-600">Underfunded</span>
				<span>¥0</span>
			</button>
			<button
				on:click={() => handleQuickBudget('assigned-last-month')}
				class="flex justify-between w-full"
			>
				<span class="text-gray-600">Assigned Last Month</span>
				<span>¥0</span>
			</button>
			<button
				on:click={() => handleQuickBudget('spent-last-month')}
				class="flex justify-between w-full"
			>
				<span class="text-gray-600">Spent Last Month</span>
				<span>¥0</span>
			</button>
			<button
				on:click={() => handleQuickBudget('average-assigned')}
				class="flex justify-between w-full"
			>
				<span class="text-gray-600">Average Assigned</span>
				<span>¥0</span>
			</button>
			<button
				on:click={() => handleQuickBudget('average-spent')}
				class="flex justify-between w-full"
			>
				<span class="text-gray-600">Average Spent</span>
				<span>¥0</span>
			</button>
		</div>
		<div class="space-y-2 mb-6">
			<button
				on:click={() => handleQuickBudget('reset-available')}
				class="text-blue-600 hover:underline w-full text-left">Reset Available Amounts</button
			>
			<button
				on:click={() => handleQuickBudget('reset-assigned')}
				class="text-blue-600 hover:underline w-full text-left">Reset Assigned Amounts</button
			>
		</div>
		<div class="mb-4">
			<h4 class="font-bold mb-2">Available in {currentMonth.split(' ')[0]}</h4>
			<p class="text-2xl font-bold">{formatCurrency(availableInJune)}</p>
		</div>
		<div class="space-y-2">
			<div class="flex justify-between">
				<span class="text-gray-600">Left Over from Last Month</span>
				<span>¥0</span>
			</div>
			<div class="flex justify-between">
				<span class="text-gray-600">Assigned in {currentMonth.split(' ')[0]}</span>
				<span>{formatCurrency(availableInJune)}</span>
			</div>
			<div class="flex justify-between">
				<span class="text-gray-600">Activity</span>
				<span>¥0</span>
			</div>
		</div>
	</aside>
</main>

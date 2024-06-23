<script lang="ts">
	import { onMount } from 'svelte';

	// Define types
	type Subcategory = {
		id: string;
		name: string;
		assigned: number;
		activity: number;
		available: number;
	};

	type Category = {
		id: string;
		name: string;
		assigned: number;
		activity: number;
		available: number;
		subcategories: Subcategory[];
	};

	// Use regular variables instead of stores
	let currentBudget = "Ryan's Budget";
	let currentMonth = 'Jun 2024';
	let readyToAssign = 52903;
	let categories: Category[] = [];
	let selectedTab = 'All';
	let availableInJune = 217272;

	// Mock API functions
	async function fetchCategories(): Promise<Category[]> {
		// Simulating API delay
		await new Promise((resolve) => setTimeout(resolve, 500));

		// API call comment
		// const fetchedCategories = await apiClient.getCategories();

		// Mock data
		return [
			{
				id: '1',
				name: 'Credit Card Payments',
				assigned: 136838,
				activity: 0,
				available: 136838,
				subcategories: [
					{ id: '1-1', name: '楽天カード', assigned: 136838, activity: 0, available: 136838 }
				]
			},
			{
				id: '2',
				name: 'Bills',
				assigned: 74434,
				activity: 0,
				available: 74434,
				subcategories: [
					{ id: '2-1', name: 'Rent', assigned: 74434, activity: 0, available: 74434 },
					{ id: '2-2', name: 'Utilities', assigned: 0, activity: 0, available: 0 },
					{ id: '2-3', name: "Renter's insurance", assigned: 0, activity: 0, available: 0 },
					{ id: '2-4', name: 'Phone', assigned: 0, activity: 0, available: 0 },
					{ id: '2-5', name: 'Music', assigned: 0, activity: 0, available: 0 }
				]
			}
			// ... (other categories)
		];
	}

	async function updateCategory(
		categoryId: string,
		subcategoryId: string,
		amount: number
	): Promise<void> {
		// Simulating API delay
		await new Promise((resolve) => setTimeout(resolve, 300));

		// API call comment
		// await apiClient.updateCategory(categoryId, subcategoryId, amount);

		// Mock update logic
		categories = categories.map((cat) => {
			if (cat.id === categoryId) {
				const updatedSubcategories = cat.subcategories.map((subcat) => {
					if (subcat.id === subcategoryId) {
						return {
							...subcat,
							assigned: subcat.assigned + amount,
							available: subcat.available + amount
						};
					}

					return subcat;
				});

				const totalAssigned = updatedSubcategories.reduce(
					(sum, subcat) => sum + subcat.assigned,
					0
				);
				const totalAvailable = updatedSubcategories.reduce(
					(sum, subcat) => sum + subcat.available,
					0
				);

				return {
					...cat,
					assigned: totalAssigned,
					available: totalAvailable,
					subcategories: updatedSubcategories
				};
			}

			return cat;
		});

		readyToAssign -= amount;
		availableInJune += amount;
	}

	function formatCurrency(amount: number) {
		return new Intl.NumberFormat('ja-JP', {
			style: 'currency',
			currency: 'JPY',
			minimumFractionDigits: 0
		}).format(amount);
	}

	function handleAssign(categoryId: string, subcategoryId: string, currentAssigned: number) {
		const input = prompt('Enter amount to assign:', currentAssigned.toString());

		if (input !== null) {
			const amount = parseFloat(input);

			if (!isNaN(amount)) {
				const difference = amount - currentAssigned;

				updateCategory(categoryId, subcategoryId, difference);
			}
		}
	}

	function changeMonth(direction: 'prev' | 'next') {
		const [month, year] = currentMonth.split(' ');
		const date = new Date(`{month} 1, {year}`);

		date.setMonth(date.getMonth() + (direction === 'next' ? 1 : -1));

		currentMonth = `{date.toLocaleString('default', { month: 'short' })} {date.getFullYear()}`;

		// API call comment
		// const newMonthData = await apiClient.getMonthData(currentMonth);
		// Update relevant data with newMonthData
	}

	async function handleQuickBudget(action: string) {
		// API call comment
		// const updatedBudget = await apiClient.quickBudget(action);

		// Mock implementation
		alert(`Quick budget action: {action}`);
		// You would update the budget based on the selected action here
	}

	onMount(async () => {
		// API call comment
		// const initialData = await apiClient.getInitialData();
		// currentBudget = initialData.currentBudget;
		// currentMonth = initialData.currentMonth;
		// readyToAssign = initialData.readyToAssign;
		// availableInJune = initialData.availableInJune;

		const fetchedCategories = await fetchCategories();

		categories = fetchedCategories;
	});
</script>

<main class="bg-gray-100 min-h-screen flex">
	<!-- Sidebar -->
	<aside class="w-64 bg-[#2c3d53] text-white p-4">
		<div class="mb-8">
			<h1 class="text-xl font-bold">{currentBudget}</h1>
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
					{#each categories as category}
						<tr class="border-t">
							<td class="py-2 px-4 font-medium">{category.name}</td>
							<td class="py-2 px-4 text-right">{formatCurrency(category.assigned)}</td>
							<td class="py-2 px-4 text-right">{formatCurrency(category.activity)}</td>
							<td class="py-2 px-4 text-right">{formatCurrency(category.available)}</td>
						</tr>
						{#each category.subcategories as subcategory}
							<tr class="bg-gray-50">
								<td class="py-2 px-4 pl-8">{subcategory.name}</td>
								<td class="py-2 px-4 text-right">
									<button
										on:click={() => handleAssign(category.id, subcategory.id, subcategory.assigned)}
										class="text-blue-600 hover:underline"
										>{formatCurrency(subcategory.assigned)}</button
									>
								</td>
								<td class="py-2 px-4 text-right">{formatCurrency(subcategory.activity)}</td>
								<td class="py-2 px-4 text-right">{formatCurrency(subcategory.available)}</td>
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

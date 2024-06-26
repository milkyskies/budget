<script lang="ts">
	import { AccountType } from '@prisma/client';
	import { getSvetchClient } from 'src/lib/app/api/svetch.client';
	import { AccountEntity } from 'src/lib/domain/entity/account.entity';
	import { BudgetEntity } from 'src/lib/domain/entity/budget.entity';
	import type { CreateAccountDto } from 'src/routes/api/accounts/post/dto/create-account.dto';
	import Modal from 'src/ui/common/modal.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const budget = BudgetEntity.create(data.budget);

	let readyToAssign = budget.accounts.reduce((sum, account) => sum + account.balance, 0);
	let categoryGroups = budget.categoryGroups;
	let availableInJune = 217272;
	let accounts = budget.accounts;

	let openModal = 'NONE' as 'NEW_ACCOUNT' | 'EDIT_ACCOUNT' | 'NONE';
	let createAccountDto: CreateAccountDto = {
		name: '',
		type: 'CASH',
		balance: 0,
		budgetId: budget.id
	};

	function formatCurrency(amount: number) {
		return new Intl.NumberFormat('ja-JP', {
			style: 'currency',
			currency: 'JPY',
			minimumFractionDigits: 0
		}).format(amount);
	}

	function changeMonth(direction: 'prev' | 'next') {
		throw new Error('Not implemented');
	}

	async function addAccount() {
		const apiClient = getSvetchClient();

		const response = await apiClient.post('api/accounts/post', {
			body: {
				name: createAccountDto.name,
				type: createAccountDto.type,
				balance: createAccountDto.balance,
				budgetId: budget.id
			}
		});

		if (!response.ok || !response.data) {
			throw new Error('Failed to add account');
		}

		const newAccount = AccountEntity.create(response.data);

		accounts = [...accounts, newAccount];
	}
</script>

<main class="bg-gray-100 min-h-screen flex">
	<!-- サイドバー -->
	<aside class="w-64 bg-[#2c3d53] text-white p-4">
		<div class="mb-8">
			<h1 class="text-xl font-bold">{budget.name}</h1>
			<p class="text-sm text-gray-400">cr.heisei12@gmail.com</p>
		</div>
		<nav>
			<a href="#" class="block py-2 px-4 bg-[#394b61] rounded mb-1">予算</a>
			<a href="#" class="block py-2 px-4 hover:bg-[#394b61] rounded mb-1">レポート</a>
			<a href="#" class="block py-2 px-4 hover:bg-[#394b61] rounded mb-1">すべてのアカウント</a>
		</nav>
		<div class="mt-4">
			<h2 class="text-xs font-bold mb-2">予算</h2>
			{#each accounts as account}
				<div class="flex justify-between items-center mb-1">
					<span class="text-sm">{account.name}</span>
					<span class="text-sm {account.balance < 0 ? 'text-red-400' : 'text-green-400'}"
						>{formatCurrency(account.balance)}</span
					>
				</div>
			{/each}
		</div>
		<button
			class="mt-4 text-sm text-blue-300 hover:underline"
			on:click={() => (openModal = 'NEW_ACCOUNT')}>アカウントを追加</button
		>
	</aside>

	<!-- メインコンテンツ -->
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
					<h2 class="text-xl font-bold">{budget.createdAt.format('MMMM')}</h2>
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
					<span class="text-green-700 ml-2">割り当て可能</span>
					<button class="ml-2 bg-green-500 text-white px-3 py-1 rounded">割り当て</button>
				</div>
			</div>
		</header>

		<div class="bg-white rounded-lg shadow">
			<table class="w-full">
				<thead class="bg-gray-50 text-gray-700">
					<tr>
						<th class="text-left py-2 px-4">カテゴリー</th>
						<th class="text-right py-2 px-4">割り当て済み</th>
						<th class="text-right py-2 px-4">活動</th>
						<th class="text-right py-2 px-4">利用可能</th>
					</tr>
				</thead>
				<tbody>
					{#each categoryGroups as categoryGroup}
						<tr class="border-t">
							<td class="py-2 px-4 font-medium">{categoryGroup.name}</td>
							<td class="py-2 px-4 text-right"
								>{formatCurrency(categoryGroup.totalAssignedAmount)}</td
							>
							<td class="py-2 px-4 text-right">{formatCurrency(categoryGroup.totalUsedAmount)}</td>
							<td class="py-2 px-4 text-right"
								>{formatCurrency(categoryGroup.totalRemainingAmount)}</td
							>
						</tr>
						{#each categoryGroup.categories as category}
							<tr class="bg-gray-50">
								<td class="py-2 px-4 pl-8">{category.name}</td>
								<td class="py-2 px-4 text-right">
									<button class="text-blue-600 hover:underline"
										>{formatCurrency(category.assignedAmount)}</button
									>
								</td>
								<td class="py-2 px-4 text-right">{formatCurrency(category.usedAmount)}</td>
								<td class="py-2 px-4 text-right">{formatCurrency(category.remainingAmount)}</td>
							</tr>
						{/each}
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- 右サイドバー -->
	<aside class="w-80 bg-white p-4 border-l">
		<div class="mb-4">
			<h4 class="font-bold mb-2">{budget.createdAt.format('MMMM')}の利用可能額</h4>
			<p class="text-2xl font-bold">{formatCurrency(availableInJune)}</p>
		</div>
		<div class="space-y-2">
			<div class="flex justify-between">
				<span class="text-gray-600">先月からの残り</span>
				<span>¥0</span>
			</div>
			<div class="flex justify-between">
				<span class="text-gray-600">{budget.createdAt.format('MMMM')}に割り当て</span>
				<span>{formatCurrency(availableInJune)}</span>
			</div>
			<div class="flex justify-between">
				<span class="text-gray-600">活動</span>
				<span>¥0</span>
			</div>
		</div>
	</aside>
</main>
<!-- New account modal -->
<Modal open={openModal === 'NEW_ACCOUNT'}>
	<h2 class="text-xl font-bold mb-4">新しいアカウントを追加</h2>
	<form on:submit|preventDefault={addAccount}>
		<div class="mb-4">
			<label for="accountName" class="block text-sm font-medium mb-1">アカウント名</label>
			<input
				id="accountName"
				type="text"
				bind:value={createAccountDto.name}
				class="w-full p-2 border rounded"
				required
			/>
		</div>
		<div class="mb-4">
			<label for="accountType" class="block text-sm font-medium mb-1">アカウントタイプ</label>
			<select
				id="accountType"
				bind:value={createAccountDto.type}
				class="w-full p-2 border rounded"
				required
			>
				<option value="" disabled selected>選択してください</option>
				<option value={AccountType.CASH}>現金</option>
				<option value={AccountType.CHECKING}>チェック</option>
				<option value={AccountType.SAVINGS}>貯蓄</option>
				<option value={AccountType.CREDIT_CARD}>クレジット</option>
			</select>
		</div>
		<div class="mb-4">
			<label for="accountBalance" class="block text-sm font-medium mb-1">現在の残高</label>
			<input
				id="accountBalance"
				type="number"
				bind:value={createAccountDto.balance}
				class="w-full p-2 border rounded"
				required
			/>
		</div>
		<div class="flex justify-end">
			<button
				type="button"
				class="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded"
				on:click={() => (openModal = 'NONE')}>キャンセル</button
			>
			<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">追加</button>
		</div>
	</form>
</Modal>

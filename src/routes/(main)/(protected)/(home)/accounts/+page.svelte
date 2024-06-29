<script lang="ts">
	import { AccountType } from '@prisma/client';
	import { getSvetchClient } from 'src/lib/app/api/svetch.client';
	import { formatCurrency } from 'src/lib/app/presentation/format-currency.util';
	import { AccountEntity } from 'src/lib/domain/entity/account.entity';
	import Modal from 'src/ui/common/modal.svelte';
	import type { PageServerData } from './$types';
	import { invalidateAll } from '$app/navigation';
	import YenInput from 'src/ui/common/yen-input.svelte';

	export let data: PageServerData;

	$: accounts = data.budget.accounts.map((account) => AccountEntity.create(account));

	let openModal: 'NEW_ACCOUNT' | 'EDIT_ACCOUNT' | 'NONE' = 'NONE';
	let editingAccount = {
		id: '',
		name: '',
		type: AccountType.CASH as AccountType
	};

	const ACCOUNT_TYPES = Object.values(AccountType);

	let newAccount = {
		name: '',
		type: AccountType.CHECKING as AccountType,
		balance: 0
	};

	function openNewAccountModal() {
		newAccount = { name: '', type: AccountType.CASH, balance: 0 };
		openModal = 'NEW_ACCOUNT';
	}

	function openEditAccountModal(account: AccountEntity) {
		editingAccount = {
			id: account.id,
			name: account.name,
			type: account.type
		};

		openModal = 'EDIT_ACCOUNT';
	}

	function closeModal() {
		openModal = 'NONE';

		editingAccount = {
			id: '',
			name: '',
			type: AccountType.CASH
		};
	}

	async function addAccount() {
		const apiClient = getSvetchClient();

		const response = await apiClient.post('api/budgets/:budgetId/accounts', {
			body: {
				...newAccount,
				initialBalance: newAccount.balance
			},
			path: {
				budgetId: data.budget.id
			}
		});

		if (!response.ok || !response.data) {
			throw new Error('Failed to add account');
		}

		await invalidateAll();

		closeModal();
	}

	async function updateAccount() {
		if (!editingAccount) return;

		const apiClient = getSvetchClient();

		const response = await apiClient.patch(`api/budgets/:budgetId/accounts/:accountId`, {
			path: {
				accountId: editingAccount.id,
				budgetId: data.budget.id
			},
			body: {
				name: editingAccount.name,
				type: editingAccount.type
			}
		});

		if (!response.ok) {
			throw new Error('Failed to update account');
		}

		await invalidateAll();

		closeModal();
	}

	async function deleteAccount(id: string) {
		if (!confirm('本当に口座を削除しますか？')) return;

		const apiClient = getSvetchClient();

		const response = await apiClient.delete(`api/budgets/:budgetId/accounts/:accountId`, {
			path: {
				accountId: id,
				budgetId: data.budget.id
			}
		});

		if (!response.ok) {
			throw new Error('Failed to delete account');
		}

		await invalidateAll();

		closeModal();
	}

	function getJapaneseAccountType(type: AccountType): string {
		const ACCOUNT_TYPE_MAP = {
			CASH: '現金',
			CHECKING: '普通預金',
			SAVINGS: '貯蓄預金',
			CREDIT_CARD: 'クレジットカード'
		};

		return ACCOUNT_TYPE_MAP[type] || type;
	}
</script>

<div class="flex-1 bg-gray-50">
	<!-- Header -->
	<header class="bg-white">
		<div class="p-4">
			<h2 class="text-xl lg:text-2xl font-bold text-gray-800">口座</h2>
		</div>
	</header>

	<div class="bg-white">
		<!-- Total row -->
		<div class="bg-gray-100 flex items-center justify-between p-4 border-b border-gray-200">
			<p class="text-lg font-semibold">合計</p>
			<p class="text-lg font-semibold">
				{formatCurrency(accounts.reduce((sum, account) => sum + account.balance, 0))}
			</p>
		</div>

		{#each accounts as account, i}
			<button
				class="w-full text-left border-t border-gray-100 flex items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer shadow-sm hover:shadow-md {i ===
				accounts.length - 1
					? 'border-b'
					: ''}"
				on:click={() => openEditAccountModal(account)}
			>
				<div class="flex items-center">
					<p class="text-base font-medium">{account.name}</p>
					<svg
						class="w-4 h-4 ml-2 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</div>
				<p class="text-base font-medium" class:text-green-600={account.balance > 0}>
					{formatCurrency(account.balance)}
				</p>
			</button>
		{/each}
	</div>

	<!-- Add account button -->
	<div class="flex flex-col lg:flex-row justify-between lg:items-center px-4 mt-4">
		<button
			class="bg-blue-50 text-blue-600 border-blue-200 border px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
			on:click={openNewAccountModal}>口座を追加</button
		>
	</div>
</div>
{#if openModal === 'NEW_ACCOUNT'}
	<Modal onClose={closeModal} title="新しい口座を追加">
		<form on:submit|preventDefault={addAccount} class="space-y-4">
			<div>
				<label for="new-account-name" class="block text-sm font-medium mb-1 text-gray-700"
					>名前</label
				>
				<input
					id="new-account-name"
					type="text"
					bind:value={newAccount.name}
					placeholder="名前を入力"
					class="w-full p-2 border rounded"
				/>
			</div>
			<div>
				<label for="new-account-type" class="block text-sm font-medium mb-1 text-gray-700"
					>種類</label
				>
				<select
					id="new-account-type"
					bind:value={newAccount.type}
					class="w-full p-2 border rounded bg-white"
				>
					{#each ACCOUNT_TYPES as type}
						<option value={type}>{getJapaneseAccountType(type)}</option>
					{/each}
				</select>
			</div>
			<div>
				<label for="new-account-balance" class="block text-sm font-medium mb-1 text-gray-700">
					{#if newAccount.type === 'CREDIT_CARD'}
						初期負債
					{:else}
						初期残高
					{/if}
				</label>
				<div class="relative">
					<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
						<span>¥</span>
					</span>

					<YenInput
						id="new-account-balance"
						bind:value={newAccount.balance}
						placeholder={newAccount.type === 'CREDIT_CARD' ? '初期負債' : '初期残高'}
					/>
				</div>
			</div>
			<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
				>口座を追加</button
			>
		</form>
	</Modal>
{:else if openModal === 'EDIT_ACCOUNT'}
	<Modal onClose={closeModal} title="口座を編集">
		{#if editingAccount}
			<form on:submit|preventDefault={updateAccount} class="space-y-4">
				<div>
					<label for="edit-account-name" class="block text-sm font-medium mb-1 text-gray-700"
						>名前</label
					>
					<input
						id="edit-account-name"
						type="text"
						bind:value={editingAccount.name}
						placeholder="名前を入力"
						class="w-full p-2 border rounded"
					/>
				</div>
				<div>
					<label for="edit-account-type" class="block text-sm font-medium mb-1 text-gray-700"
						>種類</label
					>
					<select
						id="edit-account-type"
						bind:value={editingAccount.type}
						class="w-full p-2 border rounded bg-white"
					>
						{#each ACCOUNT_TYPES as type}
							<option value={type}>{getJapaneseAccountType(type)}</option>
						{/each}
					</select>
				</div>
				<div class="space-y-2">
					<button
						type="submit"
						class="w-full bg-blue-50 text-blue-600 border border-blue-200 p-2 rounded hover:bg-blue-100 transition-colors"
					>
						更新
					</button>
					<button
						type="button"
						on:click={() => deleteAccount(editingAccount?.id)}
						class="w-full bg-red-50 text-red-600 border border-red-200 p-2 rounded hover:bg-red-100 transition-colors"
					>
						削除
					</button>
				</div>
			</form>
		{/if}
	</Modal>
{/if}

<script lang="ts">
	import { page } from '$app/stores';
	import { formatCurrency } from 'src/lib/app/presentation/format-currency.util';
	import type { LayoutServerData } from './$types';
	import { BudgetEntity } from 'src/lib/domain/entity/budget.entity';
	import { AccountEntity } from 'src/lib/domain/entity/account.entity';
	import PigIcon from 'src/ui/icons/lucide/pig-icon.svelte';
	import BookIcon from 'src/ui/icons/lucide/book-icon.svelte';
	import TableIcon from 'src/ui/icons/lucide/table-icon.svelte';

	export let data: LayoutServerData;

	$: budget = BudgetEntity.create(data.budget);
	$: accounts = data.budget.accounts.map((account) => AccountEntity.create(account));

	type NavItem = {
		href: string;
		label: string;
		icon: typeof PigIcon;
	};

	const NAV_ITEMS: NavItem[] = [
		{ href: '/entries', label: '家計簿', icon: BookIcon },
		{ href: '/', label: '予算', icon: TableIcon },
		{ href: '/accounts', label: '口座', icon: PigIcon }
	];

	$: isActive = (href: string): boolean => $page.url.pathname === href;
</script>

<main class="bg-white min-h-screen flex flex-col lg:flex-row">
	<!-- サイドバー (PCのみ表示) -->
	<aside class="w-64 bg-gray-50 text-gray-800 p-4 hidden lg:block border-r">
		<div class="mb-8">
			<h1 class="text-xl font-bold text-gray-900">{budget.name}</h1>
			<p class="text-sm text-gray-600">cr.heisei12@gmail.com</p>
		</div>
		<nav>
			{#each NAV_ITEMS as { href, label }}
				<a
					{href}
					class="block py-2 px-4 rounded mb-1 {isActive(href)
						? 'bg-blue-100 text-blue-700 shadow-sm'
						: 'hover:bg-gray-100'}"
				>
					{label}
				</a>
			{/each}
		</nav>
		<div class="mt-6">
			<h2 class="text-sm font-semibold mb-3 text-gray-700">口座</h2>
			<div class="space-y-2">
				{#each accounts as account}
					<div
						class="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors"
					>
						<span class="text-sm font-medium text-gray-700">{account.name}</span>
						<span
							class="text-sm font-semibold {account.balance < 0
								? 'text-red-600'
								: 'text-green-600'}"
						>
							{formatCurrency(account.balance)}
						</span>
					</div>
				{/each}
			</div>
		</div>
		<!-- <button
			class="mt-4 text-sm text-blue-600 hover:text-blue-800"
			on:click={() => (openModal = 'NEW_ACCOUNT')}>口座を追加</button
		> -->
	</aside>
	<slot />
	<!-- モバイル用タブボタン -->
	<nav
		class="fixed bottom-0 left-0 right-0 bg-white text-gray-600 p-2 flex justify-around lg:hidden shadow-lg overscroll-none"
	>
		{#each NAV_ITEMS as { href, label, icon: Icon }}
			<a
				{href}
				class="flex flex-col items-center py-2 px-4 rounded-lg {isActive(href)
					? 'bg-blue-50 text-blue-700'
					: 'text-gray-600'}"
			>
				<Icon class="w-6 h-6 mb-1" />
				<span class="text-xs">{label}</span>
			</a>
		{/each}
	</nav>
</main>

<script lang="ts">
	import { formatCurrency } from 'src/lib/app/presentation/format-currency.util';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	const budget = data.budget;
	const accounts = data.budget.accounts;
</script>

<main class="bg-white min-h-screen flex flex-col lg:flex-row">
	<!-- サイドバー (PCのみ表示) -->
	<aside class="w-64 bg-gray-50 text-gray-800 p-4 hidden lg:block border-r">
		<div class="mb-8">
			<h1 class="text-xl font-bold text-gray-900">{budget.name}</h1>
			<p class="text-sm text-gray-600">cr.heisei12@gmail.com</p>
		</div>
		<nav>
			<a href="/" class="block py-2 px-4 bg-blue-100 text-blue-700 rounded mb-1 shadow-sm">予算</a>
			<a href="entries" class="block py-2 px-4 hover:bg-gray-100 rounded mb-1">家計簿</a>
			<a href="#" class="block py-2 px-4 hover:bg-gray-100 rounded mb-1">レポート</a>
			<a href="#" class="block py-2 px-4 hover:bg-gray-100 rounded mb-1">財布と口座</a>
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
		class="fixed bottom-0 left-0 right-0 bg-white text-gray-600 p-2 flex justify-around lg:hidden shadow-lg"
	>
		<a href="#" class="flex flex-col items-center py-2 px-4 bg-blue-50 rounded-lg text-blue-700">
			<svg
				class="w-6 h-6 mb-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
				></path></svg
			>
			<span class="text-xs">予算</span>
		</a>
		<a href="#" class="flex flex-col items-center py-2 px-4">
			<svg
				class="w-6 h-6 mb-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				></path></svg
			>
			<span class="text-xs">レポート</span>
		</a>
		<a href="#" class="flex flex-col items-center py-2 px-4">
			<svg
				class="w-6 h-6 mb-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
				></path></svg
			>
			<span class="text-xs">口座</span>
		</a>
	</nav>
</main>

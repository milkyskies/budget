<script lang="ts">
	// import AccountDropdownPc from '$lib/components/navigation/account-dropdown-pc.svelte';
	import { ChevronDownIcon } from 'lucide-svelte';
	import { navItems } from 'src/lib/app/presentation/navigation';

	// import HistoryItems from './history-items.svelte';
</script>

<!-- ========== MAIN SIDEBAR ========== -->
<aside
	id="hs-pro-sidebar"
	class="hs-overlay fixed inset-y-0 start-0 z-[60] hidden w-[260px] -translate-x-full transform border-e border-gray-200 bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-neutral-700 dark:bg-neutral-800 dark:hs-overlay-backdrop-open:bg-neutral-900/90 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0"
>
	<div class="flex h-full max-h-full flex-col py-3">
		<!-- Header -->
		<header class="h-[46px] px-8">
			<!-- Logo -->
			<a
				class="inline-block flex-none rounded-md text-xl font-semibold focus:opacity-80 focus:outline-none"
				href="#"
				aria-label="Preline"
			>
				<!-- <PrelineLogoLong /> -->
				<!-- <img src={logo} alt="logo" class="h-6 pt-0.5" /> -->
			</a>
			<!-- End Logo -->
		</header>
		<!-- End Header -->

		<!-- Content -->
		<div
			class="h-[calc(100%-35px)] overflow-y-auto lg:h-[calc(100%-93px)] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2"
		>
			<!-- Nav -->
			<nav
				class="hs-accordion-group flex w-full flex-col flex-wrap pb-3"
				data-hs-accordion-always-open
			>
				<ul>
					{#each navItems as item}
						{#if item.type === 'page'}
							<li class="mb-1.5 px-5">
								<a
									class="flex gap-x-3 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									href={item.href}
								>
									<svelte:component this={item.icon} class="mt-0.5 h-4 w-4 flex-shrink-0" />
									{item.label}
								</a>
							</li>
							<!-- End Link -->
						{:else if item.type === 'section'}
							<!-- Link -->
							<li class="hs-accordion mb-1.5 px-5" id="{item.id}-accordion">
								<button
									type="button"
									class="hs-accordion-toggle flex w-full gap-x-3 rounded-lg px-3 py-2 text-start text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hs-accordion-active:bg-neutral-700"
								>
									<svelte:component this={item.icon} class="mt-0.5 h-4 w-4 flex-shrink-0" />
									{item.label}

									<ChevronDownIcon
										class="ms-auto mt-1 h-3.5 w-3.5 flex-shrink-0 transition hs-accordion-active:-rotate-180"
									/>
								</button>

								<div
									id="{item.id}-accordion-sub"
									class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
								>
									<ul
										class="hs-accordion-group relative mt-1.5 space-y-1.5 ps-7 before:absolute before:start-[18px] before:top-0 before:h-full before:w-0.5 before:bg-gray-100 dark:before:bg-neutral-700"
										data-hs-accordion-always-open
									>
										{#each item.links as link}
											<li>
												<a
													class="flex gap-x-4 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
													href={link.href}
												>
													{link.label}
												</a>
											</li>
										{/each}
									</ul>
								</div>
							</li>
							<!-- End Link -->
						{/if}
					{/each}

					<!-- <HistoryItems /> -->
				</ul>
			</nav>
			<!-- End Nav -->
		</div>
		<!-- End Content -->

		<!-- Footer -->
		<footer
			class="absolute inset-x-0 bottom-0 hidden border-t border-gray-200 dark:border-neutral-700 lg:block"
		>
			<!-- <WorkspaceSwitcher /> -->
		</footer>
		<!-- End Footer -->

		<!-- Sidebar Close -->
		<div class="absolute -end-3 top-3 z-10 lg:hidden">
			<button
				type="button"
				class="inline-flex h-7 w-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
				data-hs-overlay="#hs-pro-sidebar"
				aria-controls="hs-pro-sidebar"
				aria-label="Toggle navigation"
			>
				<svg
					class="h-4 w-4 flex-shrink-0"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
				>
			</button>
		</div>
		<!-- End Sidebar Close -->
	</div>
</aside>
<!-- ========== END MAIN SIDEBAR ========== -->

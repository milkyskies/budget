<script lang="ts">
	import { HelpCircleIcon } from 'lucide-svelte';
	import AccountDropdown from './account-dropdown.svelte';
</script>

<!-- ========== HEADER ========== -->
<header
	class="fixed inset-x-0 top-0 z-50 flex flex-wrap border-b border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 md:flex-nowrap md:justify-start lg:ms-[260px]"
>
	<div
		class="flex w-full basis-full items-center justify-between px-2 py-2.5 sm:px-5 xl:grid xl:grid-cols-3"
		aria-label="Global"
	>
		<div class="flex items-center md:gap-x-3 xl:col-span-1">
			<!-- Sidebar Toggle -->
			<div class="lg:hidden">
				<button
					type="button"
					class="inline-flex h-[38px] w-7 items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
						stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
					>
				</button>
			</div>
			<!-- End Sidebar Toggle -->
		</div>

		<div class="flex items-center justify-end gap-x-2 xl:col-span-2">
			<div class="flex items-center">
				<!-- Search Button Icon -->
				<div class="lg:hidden">
					<button
						type="button"
						class="inline-flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center gap-x-2 rounded-full text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
						data-hs-overlay="#hs-pro-dnsm"
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
							stroke-linejoin="round"
							><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
						>
					</button>
				</div>
				<!-- End Search Button Icon -->

				<!-- Help -->
				<div class="relative inline-flex [--placement:top-right]">
					<!-- Help Button Icon -->
					<div class="hs-tooltip inline-block [--placement:bottom]">
						<a
							id="hs-pro-dnhd"
							type="button"
							class="inline-flex h-[38px] w-[38px] items-center justify-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
							href="#"
						>
							<HelpCircleIcon class="h-[18px] w-[18px] flex-shrink-0" />
						</a>
						<span
							class="hs-tooltip-content invisible absolute z-20 inline-block rounded-lg bg-gray-900 px-2.5 py-1.5 text-xs text-white opacity-0 hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-neutral-700"
							role="tooltip"
						>
							お問い合わせ
						</span>
					</div>
					<!-- End Help Button Icon -->
				</div>
				<!-- End Help -->
			</div>

			<div class="mx-1.5 h-6 w-px border-e border-gray-200 dark:border-neutral-700"></div>

			<div class="h-[38px]">
				<!-- Account -->
				<div
					class="hs-dropdown relative inline-flex [--auto-close:inside] [--placement:top-right] [--strategy:absolute]"
				>
					<button
						id="hs-pro-dnad"
						type="button"
						class="inline-flex flex-shrink-0 items-center gap-x-3 rounded-full text-start focus:bg-gray-100 focus:outline-none dark:focus:bg-neutral-800"
					>
						<img
							class="h-[38px] w-[38px] flex-shrink-0 rounded-full"
							src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
							alt="Image Description"
						/>
					</button>

					<AccountDropdown />
				</div>
				<!-- End Account -->
			</div>
		</div>
	</div>
</header>
<!-- ========== END HEADER ========== -->

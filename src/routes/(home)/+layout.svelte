<script>
	import { HomeIcon, MessageCircleQuestionIcon } from 'lucide-svelte';
</script>

<!-- ========== MAIN SIDEBAR ========== -->
<aside
	id="hs-pro-sidebar"
	class="hs-overlay [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-[260px] lg:w-32
  hidden
  fixed inset-y-0 start-0 z-[60]
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700
 "
>
	<div class="flex flex-col h-full max-h-full py-3">
		<!-- Content -->
		<div
			class="h-screen overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
		>
			<!-- Desktop Nav -->
			<nav class="mt-3 hidden lg:block">
				<ul class="px-2 text-center space-y-1">
					<!-- Item -->
					<li>
						<a
							class="flex flex-col justify-center items-center gap-y-1.5 w-24 h-20 mx-auto p-3 text-xs text-gray-800 rounded-lg bg-gray-100 focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-600"
							href="#"
						>
							<svg
								class="flex-shrink-0 mt-0.5 mb-0.5 size-5"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline
									points="9 22 9 12 15 12 15 22"
								/></svg
							>
							<span class="block">ホーム</span>
						</a>
					</li>
					<!-- End Item -->

					<!-- Item -->
					<li>
						<a
							class="flex flex-col justify-center items-center gap-y-1.5 w-24 h-20 mx-auto p-3 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
							href="#"
						>
							<MessageCircleQuestionIcon class="my-0.5 size-5" />

							<span class="block">お問い合わせ</span>
						</a>
					</li>
					<!-- End Item -->
				</ul>
			</nav>
			<!-- End Desktop Nav -->
		</div>
		<!-- End Content -->

		<div class="lg:hidden absolute top-3 -end-3 z-10">
			<!-- Sidebar Close -->
			<button
				type="button"
				class="w-6 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
				data-hs-overlay="#hs-pro-sidebar"
				aria-controls="hs-pro-sidebar"
				aria-label="Toggle navigation"
			>
				<svg
					class="flex-shrink-0 size-4"
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
			<!-- End Sidebar Close -->
		</div>
	</div>
</aside>
<!-- ========== END MAIN SIDEBAR ========== -->

<!-- ========== MAIN CONTENT ========== -->
<main id="content" class="lg:ps-32">
	<h1
		class="text-4xl font-normal text-gray-800 dark:text-neutral-200 border-b pt-4 pb-4 sticky top-0 z-50 bg-white hidden lg:block"
	>
		<span class="flex items-center gap-4 max-w-4xl mx-auto">
			<HomeIcon class="h-8 w-8" />
			ホーム
		</span>
	</h1>
	<div class="px-2 sm:px-5 py-2 md:pt-5 space-y-5">
		<!-- Card -->
		<!-- <div
			class="p-4 flex flex-col justify-center h-72 md:h-96 min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-40px)] bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700"
		>
			<div
				class="relative h-full border border-dashed border-gray-200 rounded-xl overflow-hidden dark:border-neutral-700"
			>
				<div class="absolute inset-0 size-full">
					<div
						class="bg-[linear-gradient(45deg,rgba(0,0,0,.05)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.05)_50%,rgba(0,0,0,.05)_57.14%,transparent_57.14%,transparent);] bg-[length:10px_10px] dark:bg-[linear-gradient(45deg,rgba(0,0,0,.4)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.4)_50%,rgba(0,0,0,.4)_57.14%,transparent_57.14%,transparent);] size-full"
					></div>
				</div>
			</div>
		</div> -->
		<slot />
		<!-- End Card -->
	</div>
</main>
<!-- ========== END MAIN CONTENT ========== -->

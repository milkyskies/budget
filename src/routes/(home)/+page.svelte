<script lang="ts">
	import TimeAgo from 'javascript-time-ago';
	import ja from 'javascript-time-ago/locale/ja';
	import {
		EllipsisVerticalIcon,
		HistoryIcon,
		MessageCircleQuestionIcon,
		Trash2Icon
	} from 'lucide-svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	TimeAgo.addLocale(ja);
	TimeAgo.setDefaultLocale('ja');
	const timeAgo = new TimeAgo('ja');
</script>

<div class="max-w-4xl mx-auto">
	<div class="py-2 flex justify-between items-center">
		<h2 class="text-lg lg:text-xl font-medium text-gray-800 dark:text-neutral-200">
			<span class="flex items-center gap-2 lg:gap-4">
				<HistoryIcon />
				お問い合わせ履歴</span
			>
		</h2>
		<a
			type="button"
			class="py-1.5 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
			href="/chat/new"
		>
			<MessageCircleQuestionIcon class="flex-shrink-0 size-4" />
			お問い合わせする
		</a>
	</div>

	<!-- Card List Group -->
	<div class="space-y-3 mt-4">
		{#each data.chats as chat}
			{#if chat.title && chat.messages && chat.messages[2]}
				<!-- Team List Card -->
				<a
					class="p-4 relative flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
					href={`/chat/${chat.id}`}
				>
					<div class="grid lg:grid-cols-12 gap-y-2 lg:gap-y-0 gap-x-0">
						<div class="lg:col-span-10 flex flex-col overflow-hidden">
							<p class="mt-1 text-lg text-black font-medium dark:text-white truncate">
								{chat.title || '新しいチャット'}
							</p>

							<div class="mt-2 flex items-center gap-x-3">
								<p class="text-md text-gray-500 dark:text-neutral-500 line-clamp-4 lg:line-clamp-2">
									{chat.messages[2].content}
								</p>
							</div>
						</div>
						<!-- End Col -->

						<div class="lg:col-span-2">
							<!-- Button Group -->
							<div
								class="flex lg:flex-col justify-between h-full items-center lg:items-end gap-2 border-t border-gray-200 lg:border-t-0 pt-3 lg:pt-0 dark:border-neutral-700"
							>
								<!-- More Dropdown -->
								<div class="order-1 lg:ms-auto">
									<!-- More Dropdown -->
									<div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
										<button
											id="hs-pro-dupc1"
											type="button"
											class="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
										>
											<EllipsisVerticalIcon class="flex-shrink-0 size-4" />
										</button>

										<div
											class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
											aria-labelledby="hs-pro-dupc1"
										>
											<div class="p-1">
												<button
													type="button"
													class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-red-600 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-red-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
													data-hs-overlay="#hs-pro-dtlam"
												>
													<Trash2Icon class="flex-shrink-0 size-3.5" />

													チャットを削除
												</button>
											</div>
										</div>
									</div>
									<!-- End More Dropdown -->
								</div>
								<!-- End More Dropdown -->

								<div class="text-gray-500 dark:text-neutral-700 text-xs">
									<!-- {chat.updatedAt} -->
									{timeAgo.format(chat.updatedAt)}
								</div>
							</div>
							<!-- End Button Group -->
						</div>
						<!-- End Col -->
					</div>
				</a>
				<!-- End Team List Card -->
			{/if}
		{/each}
	</div>
	<!-- End Card List Group -->
</div>

<script lang="ts">
	import { shuffleArray } from '$lib/util/shuffle-array';
	import { SendHorizontalIcon } from 'lucide-svelte';
	import type { MessageEntity } from 'src/lib/domain/entity/message';
	import { onMount } from 'svelte';
	import ChatBubble from './chat-bubble.svelte';
	import PromptBubble from './prompt-bubble.svelte';

	export let messages: MessageEntity[];
	export let state: 'initializing' | 'idle' | 'thinking' = 'initializing';
	export let sendMessage: (args: { message: string }) => Promise<void>;

	let messagesContainer: HTMLElement;

	let input = '';
	let sendingMessage = '';

	async function handleSubmit(event?: SubmitEvent) {
		event?.preventDefault();

		if (state !== 'idle') return;

		sendingMessage = input;
		input = '';

		await sendMessage({ message: sendingMessage });

		sendingMessage = '';

		await scrollMessagesDown();
	}

	$: {
		if (state) {
			scrollMessagesDown();
		}
	}

	async function scrollMessagesDown() {
		if (!messagesContainer) return;

		await new Promise((resolve) => setTimeout(resolve, 10));

		messagesContainer.scrollTop = messagesContainer.scrollHeight;
	}

	function initialize() {
		state = 'idle';
	}

	const examplePrompts = shuffleArray([
		'迷子になった',
		'荷物が届かない',
		'資料が見えなくなった',
		'資料を共有したい',
		'予約を確認したい',
		'アカウントのパスワードをリセットしたい',
		'配達の予定が知りたい',
		'料金についての問い合わせがある',
		'サービスのキャンセル方法を知りたい',
		'製品の保証について詳しく知りたい',
		'支払い方法を変更したい',
		'会員情報を更新したい',
		'注文の状態を確認したい',
		'技術的なサポートが必要だ',
		'利用規約について詳細を知りたい',
		'返品手続きをしたい',
		'プロモーションの詳細が知りたい',
		'店舗の場所を教えてほしい',
		'商品が故障した',
		'アクセスできない機能がある',
		'会員特典を確認したい',
		'プライバシーポリシーに関する質問がある',
		'サポートチケットの進行状況を確認したい',
		'アプリの使い方を教えてほしい',
		'アップデートのスケジュールを知りたい',
		'セキュリティ関連の問題を報告したい',
		'課金エラーを解決したい',
		'コンサルティングサービスについて知りたい',
		'会議の予約を取りたい',
		'パートナーシップについての問い合わせ',
		'イベント参加の申し込みをしたい',
		'オンラインセミナーのアクセス方法を知りたい',
		'フィードバックを提供したい',
		'製品カタログをリクエストしたい'
	]);

	onMount(async () => {
		await scrollMessagesDown();
		initialize();
	});

	$: showExamplePrompts = messages.length <= 2;
</script>

<div class="h-full flex flex-col">
	<div
		bind:this={messagesContainer}
		class="{state === 'initializing'
			? 'invisible'
			: 'scroll-smooth'} overflow-y-auto flex flex-col gap-4 px-4 mt-2 flex-grow"
	>
		{#each messages as message}
			{#if message.content.length > 0 && message.role !== 'system'}
				<ChatBubble isUser={message.role === 'user'} message={message.content} />
			{/if}
		{/each}
		{#if sendingMessage}
			<ChatBubble isUser={true} message={sendingMessage} />
		{/if}
		{#if state === 'thinking'}
			<ChatBubble isUser={false} isTyping={true} />
		{/if}
	</div>
	<div class="overflow-x-hidden">
		<div class="flex scrolling-prompts">
			{#if showExamplePrompts}
				{#each examplePrompts as prompt}
					<PromptBubble
						{prompt}
						onClick={() => {
							input = prompt;
							handleSubmit();
						}}
					/>
				{/each}
			{/if}
		</div>
	</div>
	<form class="flex p-2 gap-2" on:submit={handleSubmit}>
		<div class="flex rounded-lg shadow-sm w-full">
			<!-- svelte-ignore a11y-autofocus -->
			<input
				autofocus
				bind:value={input}
				type="text"
				id="hs-search-box-with-loading-4"
				name="hs-search-box-with-loading-4"
				class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-base focus:outline-none focus:border-blue-500 focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
				placeholder="メッセージを入力"
			/>
			<button
				type="submit"
				class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
				disabled={state !== 'idle'}
			>
				<SendHorizontalIcon />
			</button>
		</div>
	</form>
</div>

<style>
	@keyframes scroll-left {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-500%);
		}
	}

	.scrolling-prompts {
		display: flex;
		animation: scroll-left 60s linear infinite;
	}
</style>

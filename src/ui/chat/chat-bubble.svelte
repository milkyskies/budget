<script lang="ts">
	export let isUser: boolean;
	export let message = '';
	export let isTyping = false;
</script>

<div class="flex {isUser ? 'justify-end' : 'justify-start'}">
	<div
		class="border rounded-2xl px-4 pt-4 pb-2.5 space-y-3 max-w-xs {isUser
			? 'bg-blue-600 text-white'
			: 'text-primary-content border-gray-200 bg-white dark:bg-neutral-900 dark:border-neutral text-gray-800 dark:text-white'}"
	>
		<p class="mb-1.5 text-sm">
			{#if isTyping}
				<div class="flex space-x-2 justify-center items-center dark:invert">
					<div
						class="h-1 w-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"
					></div>
					<div
						class="h-1 w-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"
					></div>
					<div class="h-1 w-1 bg-gray-400 rounded-full animate-bounce"></div>
				</div>
			{:else}
				<div class="whitespace-pre-wrap break-all">{message}</div>
			{/if}
		</p>
	</div>
</div>

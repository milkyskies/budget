<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { navigating } from '$app/stores';
	import '../app.postcss';

	async function initPreline() {
		if (!browser) return;

		const { HSStaticMethods } = await import('preline');

		HSStaticMethods.autoInit();
	}

	afterNavigate(() => {
		initPreline();
	});
</script>

{#if $navigating}
	<div class="fixed z-[100] flex items-center justify-center w-screen h-screen bg-white/60">
		<div
			class="animate-spin inline-block size-24 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
			role="status"
			aria-label="loading"
		>
			<span class="sr-only">Loading...</span>
		</div>
	</div>
{/if}

<slot />

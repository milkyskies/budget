<script lang="ts">
	import { onMount } from 'svelte';

	let viewport: HTMLElement;

	function setViewportHeight() {
		if (!window) return;
		if (!window.visualViewport) return;
		if (!viewport) return;

		viewport.style.height = `${window.visualViewport.height - 48}px`;
		viewport.style.minHeight = `${window.visualViewport.height - 48}px`;
	}

	onMount(() => {
		setViewportHeight();

		if (!window) return;

		window.addEventListener('resize', setViewportHeight);

		return () => {
			window.removeEventListener('resize', setViewportHeight);
		};
	});
</script>

<div class="bg-gray-50 dark:bg-neutral-900">
	<div bind:this={viewport} class="bg-white dark:bg-neutral-900 max-w-md mx-auto">
		<slot />
	</div>
</div>

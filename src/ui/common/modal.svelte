<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import ChevronLeftIcon from '../icons/lucide/chevron-left-icon.svelte';

	export let title = '';
	export let onClose: () => void;

	const OVERLAY_DURATION = 200;
	const MODAL_DURATION = 300;
</script>

<div
	class="fixed top-0 left-0 w-full h-full bg-gray-900 z-40 opacity-50"
	transition:fade={{ duration: OVERLAY_DURATION }}
></div>
<div
	class="z-50 fixed w-full h-full lg:-top-1/4 bottom-0 left-0 flex items-center justify-center lg:p-4"
	transition:slide={{ duration: MODAL_DURATION, axis: 'y' }}
>
	<div class="bg-white w-full lg:h-max lg:w-1/2 h-full lg:rounded-lg shadow-xl z-50 flex flex-col">
		<header class="flex items-center p-4 gap-4 border-b border-gray-200 sticky top-0 bg-white z-10">
			<button class="lg:hidden" on:click={onClose}>
				<ChevronLeftIcon class="w-6 h-6" />
			</button>
			<h2 class="text-xl font-bold text-gray-800">{title}</h2>
		</header>
		<div class="content p-4 overflow-y-auto flex-grow">
			<slot />
		</div>
	</div>
</div>

<script lang="ts">
	export let open = false;
	export let title = '';

	export let onClose: () => void = () => {};
</script>

{#if open}
	<div class="fixed top-0 left-0 w-full h-full bg-gray-900 z-40 opacity-50"></div>
	<div class="z-50 fixed w-full h-full -top-1/4 left-0 flex items-center justify-center p-4 lg:p-0">
		<div
			class="bg-white w-full lg:h-max lg:w-1/2 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"
		>
			<div class="content p-4">
				<slot />
			</div>
		</div>
	</div>
{/if}

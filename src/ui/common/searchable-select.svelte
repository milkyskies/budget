<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let items: { id: string; name: string }[] = [];
	export let placeholder = 'Search or create...';
	export let value: string | undefined = '';

	let searchTerm = '';
	let showDropdown = false;
	const dispatch = createEventDispatcher();

	$: filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	function selectItem(item: { id: string; name: string }) {
		value = item.id;
		searchTerm = item.name;
		showDropdown = false;
		dispatch('select', item);
	}

	function handleInput() {
		showDropdown = true;

		if (!items.some((item) => item.name.toLowerCase() === searchTerm.toLowerCase())) {
			dispatch('create', searchTerm);
		}
	}

	function handleFocus() {
		showDropdown = true;
	}

	function handleBlur() {
		setTimeout(() => {
			showDropdown = false;
		}, 5);
	}
</script>

<div class="relative">
	<input
		type="text"
		{placeholder}
		bind:value={searchTerm}
		on:input={handleInput}
		on:focus={handleFocus}
		on:blur={handleBlur}
		class="p-2 border border-gray-300 rounded-md shadow-sm w-full"
	/>
	{#if showDropdown && filteredItems.length > 0}
		<ul
			class="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
		>
			{#each filteredItems as item}
				<li class="hover:bg-gray-100 cursor-pointer">
					<button class="p-2" on:mousedown={() => selectItem(item)}> {item.name} </button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

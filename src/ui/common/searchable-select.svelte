<script lang="ts">
	import type { Item } from './searchable-select';

	export let items: Item[] = [];
	export let placeholder = 'Search or create...';
	export let initialValue = '';
	export let onSelect: (item: Item) => void;
	export let onInputChange: (value: string) => void = () => {};

	let searchTerm = initialValue ?? '';
	let showDropdown = false;

	$: filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	$: showNewAddition =
		searchTerm && !items.some((item) => item.name.toLowerCase() === searchTerm.toLowerCase());

	function selectItem(item: Item) {
		searchTerm = item.name;
		showDropdown = false;
		onSelect(item);
	}

	function handleInput() {
		showDropdown = true;
		onInputChange(searchTerm);
	}

	function handleFocus() {
		showDropdown = true;
	}

	function handleBlur() {
		setTimeout(() => {
			showDropdown = false;
		}, 5);
	}

	function selectNewItem() {
		const item: Item = { id: '', name: searchTerm, isNew: true };

		selectItem(item);
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
	{#if showDropdown && (filteredItems.length > 0 || showNewAddition)}
		<ul
			class="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
		>
			{#if showNewAddition}
				<li class="hover:bg-gray-100 cursor-pointer">
					<button
						class="p-2 w-full text-left flex items-center"
						on:click|preventDefault={selectNewItem}
					>
						<span class="mr-2">+</span>
						<span><span class="text-blue-500">{searchTerm}</span>を登録</span>
					</button>
				</li>
			{/if}
			{#each filteredItems as item}
				<li class="hover:bg-gray-100 cursor-pointer">
					<button class="p-2 w-full text-left" on:click={() => selectItem(item)}>
						{item.name}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

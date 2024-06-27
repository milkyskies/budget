<script lang="ts">
	let displayValue = '';
	export let value = 0;

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const rawValue = input.value.replace(/\D/g, ''); // Remove all non-digits
		const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas

		displayValue = formattedValue;
		value = Number(removeCommas(rawValue));
	}

	function removeCommas(formattedValue: string): string {
		return formattedValue.replace(/,/g, '');
	}
</script>

<input
	class="w-full p-2 pl-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
	value={displayValue}
	type="tel"
	on:input={handleInput}
	placeholder="0"
/>

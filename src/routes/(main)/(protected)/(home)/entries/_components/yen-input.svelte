<script lang="ts">
	export let value: number;
	let displayValue = formatValue(value);

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const rawValue = input.value.replace(/\D/g, ''); // Remove all non-digits
		const formattedValue = formatValue(Number(rawValue));

		displayValue = formattedValue;
		value = Number(removeCommas(rawValue));
	}

	function removeCommas(formattedValue: string): string {
		return formattedValue.replace(/,/g, '');
	}

	function formatValue(value: number): string {
		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas
	}
</script>

<input
	class="w-full p-2 pl-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
	value={displayValue}
	type="tel"
	on:input={handleInput}
	placeholder="0"
/>

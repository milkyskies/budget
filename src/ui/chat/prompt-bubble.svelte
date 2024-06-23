<script lang="ts">
	export let prompt: string;

	export let onClick: () => void;
</script>

<button
	on:click={onClick}
	class="p-2 m-1 border-gray-100 text-black/50 text-xs border rounded-xl prompt-bubble select-none break-keep"
>
	{prompt}
</button>

<script lang="ts">
	// import DropdownLinks from './dropdown-links.svelte';

	// const me = useMe();
</script>

<!-- Account Dropdown -->
<div
	class="hs-dropdown-menu duration z-10 hidden w-60 rounded-xl bg-white opacity-0 shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-neutral-900 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]"
	aria-labelledby="hs-pro-dnad"
>
	<div class="border-b border-gray-200 p-1 dark:border-neutral-800">
		<a
			class="flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
			href="#"
		>
			<img
				class="h-8 w-8 flex-shrink-0 rounded-full"
				src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
				alt="Image Description"
			/>

			<div class="grow">
				<span class="text-sm font-semibold text-gray-800 dark:text-neutral-300">
					<!-- {me.familyName} -->
					<!-- {me.givenName} -->
				</span>
				<!-- <p class="text-xs text-gray-500 dark:text-neutral-500">{me.email}</p> -->
			</div>
		</a>
	</div>
	<!-- <DropdownLinks /> -->
</div>
<!-- End Account Dropdown -->

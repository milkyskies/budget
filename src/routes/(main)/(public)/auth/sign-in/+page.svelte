<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1 class="text-3xl font-bold text-center my-6">Sign up</h1>
<form method="post" use:enhance class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
	<div class="mb-4">
		<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
		<input
			name="email"
			id="email"
			class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
		/>
	</div>
	<div class="mb-6">
		<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
		/>
	</div>
	<button
		class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
		>Continue</button
	>
</form>

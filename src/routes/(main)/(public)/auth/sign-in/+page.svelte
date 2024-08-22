<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="px-4 py-4">
	<h1 class="text-2xl font-bold text-center py-4">サインイン</h1>
	<form method="post" use:enhance class="max-w-md mx-auto">
		<div class="mb-4">
			<label for="email" class="block text-sm font-medium text-gray-700">メールアドレウ</label>
			<input
				name="email"
				id="email"
				class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
			/>
		</div>
		<div class="mb-6">
			<label for="password" class="block text-sm font-medium text-gray-700">パスワード</label>
			<input
				type="password"
				name="password"
				id="password"
				class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
			/>
		</div>
		<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
			>続く</button
		>
	</form>
</div>

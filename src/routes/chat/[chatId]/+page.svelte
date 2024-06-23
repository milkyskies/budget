<script lang="ts">
	import { ChevronLeftIcon } from 'lucide-svelte';
	import { getSvetchClient } from 'src/lib/app/api/svetch.client';
	import { ChatEntity } from 'src/lib/domain/entity/chat';
	import { type CreateMessageDto } from 'src/lib/domain/entity/message';
	import Chat from 'src/ui/chat/chat.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	let chat = ChatEntity.create(data.chat);
	let state: 'initializing' | 'idle' | 'thinking' = 'initializing';

	async function sendMessage(args: { message: string }) {
		state = 'thinking';

		const svetch = getSvetchClient();

		const newMessage: CreateMessageDto = {
			role: 'user',
			content: args.message
		};

		try {
			const response = await svetch.post('api/chat', {
				body: {
					newMessages: [newMessage],
					chatId: chat.id
				}
			});

			if (!response.data?.chat) throw new Error('No data');

			chat = ChatEntity.create(response.data.chat);
		} catch (error) {
			console.error(error);
		}

		state = 'idle';
	}
</script>

<div class="px-4 border-b border-gray-200 dark:border-neutral-700 h-12 flex items-center">
	<a href="/">
		<ChevronLeftIcon class="size-6 text-black dark:text-white" />
	</a>
	<span class="ml-2 text-lg font-medium text-black dark:text-white"> お問い合わせ </span>
</div>
<Chat messages={chat.messages ?? []} {state} {sendMessage} />

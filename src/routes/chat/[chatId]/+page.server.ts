import { ChatService } from 'src/lib/domain/service/chat.service';
import { MessageService } from 'src/lib/domain/service/message.service';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const chatService = ChatService.create();
	const messageService = MessageService.create();

	const chat = await chatService.getChat({ chatId: params.chatId });

	if (chat.messages?.length === 0) {
		await messageService.createMessages({
			messages: [
				{
					content:
						'こちらは株式会社〇〇のお問い合わせボットです。どのようなお問い合わせでしょうか？',
					role: 'assistant'
				}
			],
			chatId: chat.id
		});

		const newChat = await chatService.getChat({ chatId: chat.id });

		return {
			chat: newChat.toValues()
		};
	}

	return {
		chat: chat.toValues()
	};
};

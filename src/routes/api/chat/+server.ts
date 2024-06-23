import { OpenAiService } from '$lib/app/openai/openai.service';
import { type CreateMessageDto, type OpenAiMessageDto } from '$lib/domain/entity/message';
import { json } from '@sveltejs/kit';
import type { ChatValues } from 'src/lib/domain/entity/chat';
import { ChatService } from 'src/lib/domain/service/chat.service';
import { MessageService } from 'src/lib/domain/service/message.service';
import type { RequestHandler } from './$types';

type PostBody = {
	newMessages: CreateMessageDto[];
	chatId: string;
};

type PostResponse = {
	chat: ChatValues;
};

export const POST: RequestHandler = async ({ request }) => {
	const payload: PostBody = await request.json();

	const chatService = ChatService.create();

	const chat = await chatService.getChat({ chatId: payload.chatId });

	if (!chat.title && payload.newMessages.length > 0 && payload.newMessages[0].role === 'user') {
		await chatService.changeTitle({
			chatId: payload.chatId,
			title: payload.newMessages[0].content
		});
	}

	const existingMessages = chat.messages ?? [];

	const openAiMessages: OpenAiMessageDto[] = [
		...existingMessages.map((message) => ({
			role: message.role,
			content: message.content
		})),
		...payload.newMessages.map((message) => ({
			role: message.role,
			content: message.content
		}))
	];

	const reply = await OpenAiService.create().getReply({
		messages: openAiMessages
	});

	const messageService = MessageService.create();

	await messageService.createMessages({
		chatId: payload.chatId,
		messages: [
			...payload.newMessages,
			{
				role: 'assistant',
				content: reply
			}
		]
	});

	const newChat = await chatService.getChat({ chatId: payload.chatId });

	const response: PostResponse = {
		chat: newChat.toValues()
	};

	return json(response);
};

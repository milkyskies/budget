import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import { ChatEntity } from '../entity/chat';
import { MessageEntity, type CreateMessageDto } from '../entity/message';

export class ChatService {
	public static create(): ChatService {
		return new ChatService();
	}

	public async getChats(options: { count?: number } = { count: 50 }): Promise<ChatEntity[]> {
		const prisma = getPrismaClient();

		const prismaChats = await prisma.chat.findMany({
			take: options?.count,
			orderBy: {
				updatedAt: 'desc'
			},
			include: {
				messages: {
					take: 3
				}
			}
		});

		const chats = prismaChats.map((chat) =>
			ChatEntity.fromPrisma(
				{
					chat: chat
				},
				{
					messages: chat.messages
				}
			)
		);

		return chats;
	}

	public async getChat(args: { chatId: string }): Promise<ChatEntity> {
		const prisma = getPrismaClient();

		const chat = await prisma.chat.findUniqueOrThrow({
			where: {
				id: args.chatId
			},
			include: {
				messages: true
			}
		});

		return ChatEntity.fromPrisma(
			{
				chat
			},
			{
				messages: chat.messages
			}
		);
	}

	public async newChat(optional?: { initialMessages?: CreateMessageDto[] }): Promise<ChatEntity> {
		const prisma = getPrismaClient();

		const chat = await prisma.chat.create({
			data: {
				messages: optional?.initialMessages && {
					create: optional.initialMessages.map((message) => ({
						content: message.content,
						role: MessageEntity.getPrismaMessageRole(message.role)
					}))
				}
			}
		});

		return ChatEntity.fromPrisma({
			chat: chat
		});
	}

	public async changeTitle(args: { chatId: string; title: string }): Promise<void> {
		const prisma = getPrismaClient();

		await prisma.chat.update({
			where: {
				id: args.chatId
			},
			data: {
				title: args.title
			}
		});
	}
}

import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import { MessageEntity, type CreateMessageDto } from '../entity/message';

export class MessageService {
	public static create(): MessageService {
		return new MessageService();
	}

	public async createMessage(args: { message: CreateMessageDto; chatId: string }): Promise<void> {
		const prisma = getPrismaClient();

		await prisma.message.create({
			data: {
				role: MessageEntity.getPrismaMessageRole(args.message.role),
				content: args.message.content,
				chatId: args.chatId
			}
		});
	}

	public async createMessages(args: {
		messages: CreateMessageDto[];
		chatId: string;
	}): Promise<void> {
		const prisma = getPrismaClient();

		await prisma.message.createMany({
			data: args.messages.map((message) => ({
				role: MessageEntity.getPrismaMessageRole(message.role),
				content: message.content,
				chatId: args.chatId
			}))
		});
	}

	public async getMessages(args: { chatId: string }): Promise<MessageEntity[]> {
		const prisma = getPrismaClient();

		const prismaMessages = await prisma.message.findMany({
			where: {
				chatId: args.chatId
			}
		});

		const messages = prismaMessages.map((message) => MessageEntity.fromPrisma(message));

		return messages;
	}
}

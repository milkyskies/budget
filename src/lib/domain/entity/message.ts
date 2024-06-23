import type { Message as PrismaMessage, MessageRole as PrismaMessageRole } from '@prisma/client';
import dayjs from 'dayjs';

export type MessageRole = 'assistant' | 'user' | 'system';

export type OpenAiMessageDto = {
	role: MessageRole;
	content: string;
};

export type MessageBubbleDto = {
	role: MessageRole;
	content: string;
};

export type CreateMessageDto = {
	content: string;
	role: MessageRole;
};

export type MessageValues = {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	role: MessageRole;
	content: string;
	chatId: string;
};

export class MessageEntity {
	public readonly id: string;
	public readonly createdAt: dayjs.Dayjs;
	public readonly updatedAt: dayjs.Dayjs;
	public readonly role: MessageRole;
	public readonly content: string;
	public readonly chatId: string;

	private constructor(args: MessageValues) {
		this.id = args.id;
		this.createdAt = dayjs(args.createdAt);
		this.updatedAt = dayjs(args.updatedAt);
		this.role = args.role;
		this.content = args.content;
		this.chatId = args.chatId;
	}

	public static create(values: MessageValues): MessageEntity {
		return new MessageEntity(values);
	}

	public static fromPrisma(message: PrismaMessage): MessageEntity {
		return MessageEntity.create({
			id: message.id,
			createdAt: message.createdAt,
			updatedAt: message.updatedAt,
			role: this.getRoleFromPrisma(message.role),
			content: message.content,
			chatId: message.chatId
		});
	}

	public toPrisma(): PrismaMessage {
		return {
			id: this.id,
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate(),
			role: MessageEntity.getPrismaMessageRole(this.role),
			content: this.content,
			chatId: this.chatId
		};
	}

	public toOpenAIMessage(): OpenAiMessageDto {
		const message: OpenAiMessageDto = {
			role: this.role,
			content: this.content
		};

		return message;
	}

	public toValues(): MessageValues {
		return {
			id: this.id,
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate(),
			role: this.role,
			content: this.content,
			chatId: this.chatId
		};
	}

	public static getRoleFromPrisma(role: PrismaMessageRole): MessageRole {
		switch (role) {
			case 'ASSISTANT':
				return 'assistant';
			case 'USER':
				return 'user';
			case 'SYSTEM':
				return 'system';
			default:
				return 'assistant';
		}
	}

	public static getPrismaMessageRole(role: MessageRole): PrismaMessageRole {
		switch (role) {
			case 'assistant':
				return 'ASSISTANT';
			case 'user':
				return 'USER';
			case 'system':
				return 'SYSTEM';
			default:
				return 'ASSISTANT';
		}
	}
}

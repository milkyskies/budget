import type { Chat as PrismaChat, Message as PrismaMessage } from '@prisma/client';
import dayjs from 'dayjs';
import { MessageEntity, type MessageValues } from './message';

export type ChatValues = {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	title?: string;
	messages?: MessageValues[];
};

export class ChatEntity {
	public readonly id: string;
	public readonly createdAt: dayjs.Dayjs;
	public readonly updatedAt: dayjs.Dayjs;
	public readonly title: string | undefined;
	public readonly messages: MessageEntity[] | undefined;

	private constructor(args: ChatValues) {
		this.id = args.id;
		this.title = args.title;
		this.createdAt = dayjs(args.createdAt);
		this.updatedAt = dayjs(args.updatedAt);
		this.messages = args.messages?.map((message) => MessageEntity.create(message));
	}

	public static create(args: ChatValues): ChatEntity {
		return new ChatEntity(args);
	}

	public static fromPrisma(
		args: {
			chat: PrismaChat;
		},
		options?: {
			messages?: PrismaMessage[];
		}
	): ChatEntity {
		return ChatEntity.create({
			id: args.chat.id,
			title: args.chat.title ?? undefined,
			createdAt: args.chat.createdAt,
			updatedAt: args.chat.updatedAt,
			messages: options?.messages?.map((message) => MessageEntity.fromPrisma(message).toValues())
		});
	}

	public toValues(): ChatValues {
		return {
			id: this.id,
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate(),
			title: this.title,
			messages: this.messages?.map((message) => message.toValues())
		};
	}
}

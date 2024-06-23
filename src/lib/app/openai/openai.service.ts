import type { OpenAiMessageDto } from '$lib/domain/entity/message';
import type OpenAI from 'openai';
import { getOpenAiClient } from './openai.client';

export class OpenAiService {
	private readonly openAiClient: OpenAI;

	private constructor(args: { openAiClient: OpenAI }) {
		this.openAiClient = args.openAiClient;
	}

	public static create(): OpenAiService {
		const openAiClient = getOpenAiClient();

		return new OpenAiService({ openAiClient });
	}

	public async getReply(args: { messages: OpenAiMessageDto[] }): Promise<string> {
		const { messages } = args;

		const completion = await this.openAiClient.chat.completions.create({
			messages,
			model: 'gpt-3.5-turbo'
		});

		const reply = completion.choices[0].message.content;

		if (!reply) throw Error('Could not get reply');

		return reply;
	}
}

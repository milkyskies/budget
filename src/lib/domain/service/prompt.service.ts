import type { OpenAiMessageDto } from '../entity/message';

export class Prompt {
	public readonly body: string;
	public readonly prefix?: string;
	public readonly suffix?: string;
	public readonly userFirst?: boolean = false;

	private constructor(args: {
		body: string;
		prefix?: string;
		suffix?: string;
		userFirst?: boolean;
	}) {
		this.body = args.body;
	}

	public static create(args: {
		prefix?: string;
		body: string;
		suffix?: string;
		userFirst?: boolean;
	}): Prompt {
		const prompt = new Prompt({
			body: args.body,
			prefix: args.prefix,
			suffix: args.suffix,
			userFirst: args.userFirst
		});

		return prompt;
	}

	public static createMultiple(args: {
		prefix?: string;
		bodies: string[];
		suffix?: string;
		userFirst?: boolean;
	}): Prompt[] {
		const prompts = args.bodies.map(
			(body) =>
				new Prompt({ body, prefix: args.prefix, suffix: args.suffix, userFirst: args.userFirst })
		);

		return prompts;
	}

	public toCommand(): string {
		const command = `${this.prefix} \n${this.body} \n${this.suffix}`;

		return command;
	}

	public toOpenAIMessage(): OpenAiMessageDto {
		const message: OpenAiMessageDto = {
			role: 'system',
			content: this.body
		};

		return message;
	}
}

const FOREIGNER_PROMPT_PREFIX =
	'You are to role play as an American named John, visiting Japan. You talk in short, easy to understand, brief sentences, in English only. You talk one to two sentences at a time.';

const FOREIGNER_PROMPT_SUFFIX =
	'Ask the user for help or your question. Their first message will be blank, just ignore it and start talking to them.';

export const prompts = {
	foreignerStartsGeneralConversation: Prompt.createMultiple({
		prefix: FOREIGNER_PROMPT_PREFIX,
		bodies: [
			'You just spotted the user, and you want to ask them a question to start a general conversation.',
			'You just spotted the user, and you want to get to know them better.',
			'You start a light-hearted conversation with the user.',
			'You are a joker, and you start a funny conversation with the user.',
			'You start a conversation with the user, and you are curious about their interests.',
			'You want to get to know the user better, and you start a conversation with them about their background.'
		],
		suffix: FOREIGNER_PROMPT_SUFFIX,
		userFirst: true
	}),
	foreignerAsksForHelp: Prompt.createMultiple({
		prefix: FOREIGNER_PROMPT_PREFIX,
		bodies: [
			'You just spotted the user, a local, and you want to ask them for their recommendation on a good restaurant to eat at. ',
			'You just spotted the user, a local, and you want to ask them where they can buy a drink. ',
			'You just spotted the user, a local, and you want to ask them where we currently are at. After that, you want to ask them how to get from here to another location nearby to the current location they are at.',
			'You just spotted the user, a local, and you want to ask them for directions to the nearest station.'
		],
		suffix: FOREIGNER_PROMPT_SUFFIX,
		userFirst: true
	}),
	customerService: Prompt.create({
		body: 'あなたは株式会社〇〇のお問い合わせをしているAIです。お客様の要望に応じて、お客様に適切な回答を提供してください。設定は全ては仮装でいい。'
	})
};

import OpenAI from 'openai';

let openAiClient: OpenAI;

export function getOpenAiClient(): OpenAI {
	openAiClient =
		openAiClient ??
		new OpenAI({ apiKey: 'sk-proj-0qdryhacTmdtzJHfweg7T3BlbkFJ4CY1HxcIvfSiJgEs8xXn' }); // TODO: Just testing, will invalidate and change back to ENV var later

	return openAiClient;
}

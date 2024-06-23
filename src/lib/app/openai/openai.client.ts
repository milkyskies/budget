import OpenAI from 'openai';

let openAiClient: OpenAI;

export function getOpenAiClient(): OpenAI {
	openAiClient =
		openAiClient ??
		new OpenAI({ apiKey: '***REMOVED***' }); // TODO: Just testing, will invalidate and change back to ENV var later

	return openAiClient;
}

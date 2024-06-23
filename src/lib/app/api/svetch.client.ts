import { Svetch } from './.generated/client';

let svetchClient: Svetch;

export function getSvetchClient(): Svetch {
	svetchClient = svetchClient ?? new Svetch('', fetch, true);

	return svetchClient;
}

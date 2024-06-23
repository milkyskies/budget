// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { luciaClient } from './lib/app/authn/lucia.client';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get(luciaClient.sessionCookieName);

	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;

		return resolve(event);
	}

	const { session, user } = await luciaClient.validateSession(sessionId);

	if (session && session.fresh) {
		const sessionCookie = luciaClient.createSessionCookie(session.id);

		// sveltekit types deviates from the de-facto standard
		// you can use 'as any' too
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}

	if (!session) {
		const sessionCookie = luciaClient.createBlankSessionCookie();

		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}

	event.locals.user = user;
	event.locals.session = session;

	return resolve(event);
};

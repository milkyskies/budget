// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { luciaClient } from './lib/app/authn/lucia.client';
import { UserService } from './lib/domain/service/user.service';
import { getPrismaClient } from './lib/app/database/prisma.client';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get(luciaClient.sessionCookieName);
	const prismaClient = getPrismaClient();

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

	if (event.url.pathname.startsWith('/auth')) {
		return resolve(event);
	}

	if (!event.locals.user || !event.locals.session) {
		return new Response('Unauthorized', { status: 401 });
	}

	if (event.url.pathname.startsWith('/api/budgets')) {
		const budgetId = event.url.pathname.split('/')[3];
		const userEntity = await UserService.new({ prismaClient }).get({ id: event.locals.user.id });
		const isOwner = userEntity.budgets.some((budget) => budget.id === budgetId);

		if (!isOwner) {
			return new Response('Forbidden', { status: 403 });
		}
	}

	return resolve(event);
};

import { CLIENT_URL } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const allowedOrigin = CLIENT_URL;
	const origin = event.request.headers.get('origin');

	if (origin && origin !== allowedOrigin) {
		return new Response('Forbidden', { status: 403 });
	}

	return resolve(event);
};

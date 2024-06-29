import { luciaClient } from 'src/lib/app/authn/lucia.client';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session) {
		redirect(302, '/auth/sign-in');
	}

	await luciaClient.invalidateSession(locals.session.id);

	redirect(302, '/auth/sign-in');
};

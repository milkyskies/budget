import { hash } from '@node-rs/argon2';
import { fail, redirect } from '@sveltejs/kit';
import { luciaClient } from 'src/lib/app/authn/lucia.client';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import type { Actions } from './$types';
import { createId } from '@paralleldrive/cuid2';

export const actions: Actions = {
	default: async (event) => {
		const prismaClient = getPrismaClient();

		const formData = await event.request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');

		if (!email || typeof email !== 'string' || !email.includes('@')) {
			return fail(400, {
				message: 'Invalid email'
			});
		}

		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Password must be between 6 and 255 characters'
			});
		}

		if (password !== confirmPassword) {
			return fail(400, {
				message: 'Passwords do not match'
			});
		}

		const existingUser = await prismaClient.user.findUnique({
			where: {
				email
			}
		});

		if (existingUser) {
			return fail(400, {
				message: 'Email already in use'
			});
		}

		const passwordHash = await hash(password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		const user = await prismaClient.user.create({
			data: {
				id: createId(),
				email,
				passwordHash
			}
		});

		const session = await luciaClient.createSession(user.id, {});
		const sessionCookie = luciaClient.createSessionCookie(session.id);

		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/');
	}
};

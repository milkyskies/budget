import { hash, verify } from '@node-rs/argon2';
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

		// if (
		// 	typeof email !== 'string' ||
		// 	email.length < 3 ||
		// 	email.length > 31 ||
		// 	!/^[a-z0-9_-]+$/.test(email)
		// ) {
		// 	return fail(400, {
		// 		message: 'Invalid email'
		// 	});
		// }

		if (!email || typeof email !== 'string') {
			return fail(400, {
				message: 'Invalid email'
			});
		}

		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}

		const existingUser = await prismaClient.user.findUnique({
			where: {
				email
			}
		});

		if (existingUser) {
			const validPassword = await verify(existingUser.passwordHash, password, {
				memoryCost: 19456,
				timeCost: 2,
				outputLen: 32,
				parallelism: 1
			});

			if (!validPassword) {
				return fail(400, {
					message: 'Incorrect username or password'
				});
			}

			const session = await luciaClient.createSession(existingUser.id, {});
			const sessionCookie = luciaClient.createSessionCookie(session.id);

			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});

			redirect(302, '/');
		} else {
			const passwordHash = await hash(password, {
				// recommended minimum parameters
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
		}

		redirect(302, '/');
	}
};

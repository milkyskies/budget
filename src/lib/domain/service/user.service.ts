import type { PrismaClient } from '@prisma/client';

export class UserService {
	private constructor(private readonly prisma: PrismaClient) {}

	public static new(prisma: PrismaClient): UserService {
		return new UserService(prisma);
	}

	public async get(args: { id: string }) {
		const user = await this.prisma.user.findUniqueOrThrow({ where: { id: args.id } });

		return user;
	}
}

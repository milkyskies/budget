import type { PrismaClient } from '@prisma/client';

export class UserService {
	private constructor(private readonly prisma: PrismaClient) {}

	public static new(args: { prismaClient: PrismaClient }): UserService {
		return new UserService(args.prismaClient);
	}

	public async get(args: { id: string }) {
		const user = await this.prisma.user.findUniqueOrThrow({
			where: { id: args.id },
			include: { budgets: true }
		});

		return user;
	}
}

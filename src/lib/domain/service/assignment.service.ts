import type { PrismaClient } from '@prisma/client';
import type { UpsertAssignmentDto } from '../dto/assignment.dto';
import { AssignmentEntity } from '../entity/assignment.entity';
import { appDayjs } from 'src/lib/app/time/dayjs';
import { createId } from '@paralleldrive/cuid2';

export class AssignmentService {
	private constructor(private readonly prisma: PrismaClient) {}

	public static new(args: { prismaClient: PrismaClient }): AssignmentService {
		return new AssignmentService(args.prismaClient);
	}

	public async upsert(args: { data: UpsertAssignmentDto }): Promise<AssignmentEntity> {
		const date = appDayjs(args.data.date);

		const month = date.startOf('month');

		const updatedAssignment = await this.prisma.assignment.upsert({
			where: {
				categoryId_month: {
					categoryId: args.data.categoryId,
					month: month.toDate()
				},
				categoryId: args.data.categoryId,
				month: month.toDate()
			},
			update: {
				amount: args.data.amount
			},
			create: {
				id: createId(),
				amount: args.data.amount,
				categoryId: args.data.categoryId,
				month: month.toDate()
			}
		});

		const assignment = AssignmentEntity.fromPrisma({
			prismaAssignment: updatedAssignment
		});

		return assignment;
	}
}

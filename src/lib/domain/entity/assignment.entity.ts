import { appDayjs } from 'src/lib/app/time/dayjs';
import { CategoryEntity, type CategoryValues } from './category.entity';
import type { Assignment as PrismaAssignment } from '@prisma/client';

export type AssignmentEntityValues = {
	id: string;
	amount: number;
	categoryId: string;
	category?: CategoryValues;
	month: Date;
	createdAt: Date;
	updatedAt: Date;
};

export class AssignmentEntity {
	public readonly id: string;
	public readonly amount: number;
	public readonly categoryId: string;
	public readonly category?: CategoryEntity;
	public readonly month: appDayjs.Dayjs;
	public readonly createdAt: appDayjs.Dayjs;
	public readonly updatedAt: appDayjs.Dayjs;

	private constructor(args: AssignmentEntityValues) {
		this.id = args.id;
		this.amount = args.amount;
		this.categoryId = args.categoryId;
		this.category = args.category ? CategoryEntity.create(args.category) : undefined;
		this.month = appDayjs(args.month);
		this.createdAt = appDayjs(args.createdAt);
		this.updatedAt = appDayjs(args.updatedAt);
	}

	public static create(args: AssignmentEntityValues): AssignmentEntity {
		return new AssignmentEntity(args);
	}

	public static fromPrisma(args: {
		prismaAssignment: PrismaAssignment;
		category?: CategoryEntity;
	}): AssignmentEntity {
		return AssignmentEntity.create({
			id: args.prismaAssignment.id,
			amount: args.prismaAssignment.amount,
			categoryId: args.prismaAssignment.categoryId,
			category: args.category?.toValues(),
			month: args.prismaAssignment.month,
			createdAt: args.prismaAssignment.createdAt,
			updatedAt: args.prismaAssignment.updatedAt
		});
	}

	public toValues(): AssignmentEntityValues {
		return {
			id: this.id,
			amount: this.amount,
			categoryId: this.categoryId,
			category: this.category?.toValues(),
			month: this.month.toDate(),
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate()
		};
	}
}

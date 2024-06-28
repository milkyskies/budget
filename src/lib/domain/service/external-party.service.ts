import type { PrismaClient } from '@prisma/client';
import { ExternalPartyEntity } from '../entity/external-party.entity';
import type { CreateExternalPartyDto } from '../dto/external-party.dto';
import { createId } from '@paralleldrive/cuid2';

export class ExternalPartyService {
	private constructor(private readonly prisma: PrismaClient) {}

	public static new(args: { prismaClient: PrismaClient }): ExternalPartyService {
		return new ExternalPartyService(args.prismaClient);
	}

	public async create(args: {
		externalParty: CreateExternalPartyDto;
	}): Promise<ExternalPartyEntity> {
		const externalParty = await this.prisma.externalParty.create({
			data: {
				id: createId(),
				name: args.externalParty.name,
				budgetId: args.externalParty.budgetId
			},
			include: {
				budget: true
			}
		});

		return ExternalPartyEntity.fromPrisma({
			externalParty: externalParty
		});
	}

	public async getAll(args: { budgetId: string }): Promise<ExternalPartyEntity[]> {
		const externalParties = await this.prisma.externalParty.findMany({
			where: {
				budgetId: args.budgetId
			},
			include: {
				budget: true
			}
		});

		return externalParties.map((externalParty) =>
			ExternalPartyEntity.fromPrisma({
				externalParty: externalParty
			})
		);
	}

	public async update(args: {
		externalPartyId: string;
		data: CreateExternalPartyDto;
	}): Promise<ExternalPartyEntity> {
		const updatedExternalParty = await this.prisma.externalParty.update({
			where: { id: args.externalPartyId },
			data: args.data,
			include: {
				budget: true
			}
		});

		return ExternalPartyEntity.fromPrisma({
			externalParty: updatedExternalParty
		});
	}
}

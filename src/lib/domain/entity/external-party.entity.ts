import type { ExternalParty as PrismaExternalParty } from '@prisma/client';

export type ExternalPartyValues = {
	id: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
};

export class ExternalPartyEntity {
	public readonly id: string;
	public readonly name: string;
	public readonly createdAt: Date;
	public readonly updatedAt: Date;

	private constructor(args: ExternalPartyValues) {
		this.id = args.id;
		this.name = args.name;
		this.createdAt = args.createdAt;
		this.updatedAt = args.updatedAt;
	}

	public static create(args: ExternalPartyValues): ExternalPartyEntity {
		return new ExternalPartyEntity(args);
	}

	public toValues(): ExternalPartyValues {
		return {
			id: this.id,
			name: this.name,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt
		};
	}

	public static fromPrisma(args: { externalParty: PrismaExternalParty }): ExternalPartyEntity {
		return ExternalPartyEntity.create({
			id: args.externalParty.id,
			name: args.externalParty.name,
			createdAt: args.externalParty.createdAt,
			updatedAt: args.externalParty.updatedAt
		});
	}
}

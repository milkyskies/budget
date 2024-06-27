import type { UpsertEntryDto } from 'src/routes/api/entries/dto/upsert-entry.dto';
import { EntryEntity } from '../entity/entry.entity';
import type { PrismaClient } from '@prisma/client';

export class EntryService {
	private constructor(private readonly prismaClient: PrismaClient) {}

	public static new(args: { prismaClient: PrismaClient }): EntryService {
		return new EntryService(args.prismaClient);
	}

	public async upsert(args: { entry: UpsertEntryDto }): Promise<EntryEntity> {
		const { id, ...entryData } = args.entry;

		const prismaEntry = id
			? await this.prismaClient.entry.update({
					where: { id },
					data: entryData,
					include: {
						category: true,
						account: true
					}
				})
			: await this.prismaClient.entry.create({
					data: entryData,
					include: {
						category: true,
						account: true
					}
				});

		return EntryEntity.fromPrisma({
			entry: prismaEntry,
			category: prismaEntry.category ?? undefined,
			account: prismaEntry.account ?? undefined
		});
	}
}

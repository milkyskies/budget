import type { UpsertEntryDto } from 'src/routes/api/entries/_dto/upsert-entry.dto';
import { EntryEntity } from '../entity/entry.entity';
import type { PrismaClient } from '@prisma/client';
import { createId } from '@paralleldrive/cuid2';
import { EntryItemEntity } from '../entity/entry-item.entity';
import { CategoryEntity } from '../entity/category.entity';

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
					data: {
						...entryData,
						entryItems: {
							create: entryData.entryItems.map((entryItem) => ({
								id: createId(),
								amount: entryItem.amount,
								categoryId: entryItem.categoryId
							}))
						}
					},
					include: {
						account: true,
						entryItems: {
							include: {
								category: true
							}
						}
					}
				})
			: await this.prismaClient.entry.create({
					data: {
						id: createId(),
						...entryData,
						entryItems: {
							create: entryData.entryItems.map((entryItem) => ({
								id: createId(),
								amount: entryItem.amount,
								categoryId: entryItem.categoryId
							}))
						}
					},
					include: {
						account: true,
						entryItems: {
							include: {
								category: true
							}
						}
					}
				});

		return EntryEntity.fromPrisma({
			prismaEntry: prismaEntry,
			entryItems: prismaEntry.entryItems.map((entryItem) =>
				EntryItemEntity.fromPrisma({
					prismaEntryItem: entryItem
				}).toValues()
			),
			account: prismaEntry.account ?? undefined
		});
	}
}

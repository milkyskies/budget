import { EntryEntity } from '../entity/entry.entity';
import type { PrismaClient } from '@prisma/client';
import { createId } from '@paralleldrive/cuid2';
import { EntryItemEntity } from '../entity/entry-item.entity';
import { AccountEntity } from '../entity/account.entity';
import type { UpsertEntryDto } from '../dto/entry.dto';

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
							deleteMany: {
								id: {
									notIn: entryData.entryItems
										.map((item) => item.id)
										.filter((id): id is string => Boolean(id))
								}
							},
							upsert: entryData.entryItems.map((entryItem) => ({
								where: { id: entryItem.id ?? '' },
								create: {
									id: createId(),
									amount: entryItem.amount,
									categoryId: entryItem.categoryId
								},
								update: {
									amount: entryItem.amount,
									categoryId: entryItem.categoryId
								}
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
				})
			),
			account: AccountEntity.fromPrisma({ prismaAccount: prismaEntry.account })
		});
	}

	public async delete(args: { entryId: string }): Promise<void> {
		await this.prismaClient.entry.delete({
			where: { id: args.entryId }
		});
	}
}

export interface Get<
	PathParams = { [key: string]: unknown },
	QueryParams = { [key: string]: unknown },
	Output = { [key: string]: unknown }
> {
	parameters: {
		path?: PathParams;
		query: QueryParams;
	};
	responses: {
		200: Output;
	};
}

export interface Post<
	PathParams = { [key: string]: unknown },
	RequestBody = { [key: string]: unknown },
	QueryParams = { [key: string]: unknown },
	Output = { [key: string]: unknown }
> {
	parameters: {
		path?: PathParams;
		body: RequestBody;
		query?: QueryParams;
	};
	responses: {
		200: Output;
	};
}

export interface Put<
	PathParams = { [key: string]: unknown },
	RequestBody = { [key: string]: unknown },
	QueryParams = { [key: string]: unknown },
	Output = { [key: string]: unknown }
> {
	parameters: {
		path?: PathParams;
		body: RequestBody;
		query?: QueryParams;
	};
	responses: {
		200: Output;
	};
}

export interface Delete<
	PathParams = { [key: string]: unknown },
	QueryParams = { [key: string]: unknown },
	Output = { [key: string]: unknown }
> {
	parameters: {
		path?: PathParams;
		query: QueryParams;
	};
	responses: {
		200: Output;
	};
}

export interface Patch<
	PathParams = { [key: string]: unknown },
	RequestBody = { [key: string]: unknown },
	QueryParams = { [key: string]: unknown },
	Output = { [key: string]: unknown }
> {
	parameters: {
		path?: PathParams;
		body: RequestBody;
		query?: QueryParams;
	};
	responses: {
		200: Output;
	};
}

export type RecursiveJSONSchema = {
	description?: string;
	type: string;
	const?: string;
	format?: string;
	properties?: {
		[key: string]: RecursiveJSONSchema;
	};
	items?: RecursiveJSONSchema;
	required?: string[];
};
export interface APIPaths {
	'api/budgets/:budgetId/accounts': {
		POST: {
			parameters: {
				path: { budgetId: string };
				body: {
					name: string;
					type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
					initialBalance: number;
				};
				query?: never;
			};
			responses: {
				200: {
					id: string;
					name: string;
					budgetId: string;
					type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
					createdAt: Date;
					updatedAt: Date;
					entries?: Array<{
						id: string;
						type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
						date: Date;
						memo: string;
						accountId: string;
						account?: {
							id: string;
							name: string;
							budgetId: string;
							type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
							createdAt: Date;
							updatedAt: Date;
							entries?: Array<{
								id: string;
								type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
								date: Date;
								memo: string;
								accountId: string;
								account?: {
									id: string;
									name: string;
									budgetId: string;
									type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
									createdAt: Date;
									updatedAt: Date;
									entries?: Array<{
										id: string;
										type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
										date: Date;
										memo: string;
										accountId: string;
										account?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										destinationAccountId?: string;
										destinationAccount?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										externalPartyId?: string;
										externalParty?: {
											id: string;
											name: string;
											createdAt: Date;
											updatedAt: Date;
										};
										entryItems: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								destinationAccountId?: string;
								destinationAccount?: {
									id: string;
									name: string;
									budgetId: string;
									type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
									createdAt: Date;
									updatedAt: Date;
									entries?: Array<{
										id: string;
										type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
										date: Date;
										memo: string;
										accountId: string;
										account?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										destinationAccountId?: string;
										destinationAccount?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										externalPartyId?: string;
										externalParty?: {
											id: string;
											name: string;
											createdAt: Date;
											updatedAt: Date;
										};
										entryItems: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								externalPartyId?: string;
								externalParty?: {
									id: string;
									name: string;
									createdAt: Date;
									updatedAt: Date;
								};
								entryItems: Array<{
									id: string;
									amount: number;
									categoryId?: string;
									category?: {
										id: string;
										name: string;
										categoryGroupId: string;
										assignedAmount: number;
										createdAt: Date;
										updatedAt: Date;
										entryItems?: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									createdAt: Date;
									updatedAt: Date;
								}>;
								createdAt: Date;
								updatedAt: Date;
							}>;
						};
						destinationAccountId?: string;
						destinationAccount?: {
							id: string;
							name: string;
							budgetId: string;
							type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
							createdAt: Date;
							updatedAt: Date;
							entries?: Array<{
								id: string;
								type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
								date: Date;
								memo: string;
								accountId: string;
								account?: {
									id: string;
									name: string;
									budgetId: string;
									type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
									createdAt: Date;
									updatedAt: Date;
									entries?: Array<{
										id: string;
										type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
										date: Date;
										memo: string;
										accountId: string;
										account?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										destinationAccountId?: string;
										destinationAccount?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										externalPartyId?: string;
										externalParty?: {
											id: string;
											name: string;
											createdAt: Date;
											updatedAt: Date;
										};
										entryItems: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								destinationAccountId?: string;
								destinationAccount?: {
									id: string;
									name: string;
									budgetId: string;
									type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
									createdAt: Date;
									updatedAt: Date;
									entries?: Array<{
										id: string;
										type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
										date: Date;
										memo: string;
										accountId: string;
										account?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										destinationAccountId?: string;
										destinationAccount?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										externalPartyId?: string;
										externalParty?: {
											id: string;
											name: string;
											createdAt: Date;
											updatedAt: Date;
										};
										entryItems: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								externalPartyId?: string;
								externalParty?: {
									id: string;
									name: string;
									createdAt: Date;
									updatedAt: Date;
								};
								entryItems: Array<{
									id: string;
									amount: number;
									categoryId?: string;
									category?: {
										id: string;
										name: string;
										categoryGroupId: string;
										assignedAmount: number;
										createdAt: Date;
										updatedAt: Date;
										entryItems?: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									createdAt: Date;
									updatedAt: Date;
								}>;
								createdAt: Date;
								updatedAt: Date;
							}>;
						};
						externalPartyId?: string;
						externalParty?: {
							id: string;
							name: string;
							createdAt: Date;
							updatedAt: Date;
						};
						entryItems: Array<{
							id: string;
							amount: number;
							categoryId?: string;
							category?: {
								id: string;
								name: string;
								categoryGroupId: string;
								assignedAmount: number;
								createdAt: Date;
								updatedAt: Date;
								entryItems?: Array<{
									id: string;
									amount: number;
									categoryId?: string;
									category?: {
										id: string;
										name: string;
										categoryGroupId: string;
										assignedAmount: number;
										createdAt: Date;
										updatedAt: Date;
										entryItems?: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									createdAt: Date;
									updatedAt: Date;
								}>;
							};
							createdAt: Date;
							updatedAt: Date;
						}>;
						createdAt: Date;
						updatedAt: Date;
					}>;
				};
			};
		};
	};
	'api/budgets/:budgetId/entries': {
		PUT: {
			parameters: {
				path: { budgetId: string };
				body: {
					type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
					date: Date;
					memo: string;
					accountId: string;
					entryItems: Array<{
						amount: number;
						id?: string;
						categoryId?: string;
					}>;
					id?: string;
					destinationAccountId?: string;
					existingExternalPartyId?: string;
					newExternalPartyName?: string;
				};
				query?: never;
			};
			responses: {
				200: {
					id: string;
					type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
					date: Date;
					memo: string;
					accountId: string;
					account?: {
						id: string;
						name: string;
						budgetId: string;
						type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
						createdAt: Date;
						updatedAt: Date;
						entries?: Array<{
							id: string;
							type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
							date: Date;
							memo: string;
							accountId: string;
							account?: {
								id: string;
								name: string;
								budgetId: string;
								type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
								createdAt: Date;
								updatedAt: Date;
								entries?: Array<{
									id: string;
									type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
									date: Date;
									memo: string;
									accountId: string;
									account?: {
										id: string;
										name: string;
										budgetId: string;
										type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
										createdAt: Date;
										updatedAt: Date;
										entries?: Array<{
											id: string;
											type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
											date: Date;
											memo: string;
											accountId: string;
											account?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											destinationAccountId?: string;
											destinationAccount?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											externalPartyId?: string;
											externalParty?: {
												id: string;
												name: string;
												createdAt: Date;
												updatedAt: Date;
											};
											entryItems: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									destinationAccountId?: string;
									destinationAccount?: {
										id: string;
										name: string;
										budgetId: string;
										type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
										createdAt: Date;
										updatedAt: Date;
										entries?: Array<{
											id: string;
											type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
											date: Date;
											memo: string;
											accountId: string;
											account?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											destinationAccountId?: string;
											destinationAccount?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											externalPartyId?: string;
											externalParty?: {
												id: string;
												name: string;
												createdAt: Date;
												updatedAt: Date;
											};
											entryItems: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									externalPartyId?: string;
									externalParty?: {
										id: string;
										name: string;
										createdAt: Date;
										updatedAt: Date;
									};
									entryItems: Array<{
										id: string;
										amount: number;
										categoryId?: string;
										category?: {
											id: string;
											name: string;
											categoryGroupId: string;
											assignedAmount: number;
											createdAt: Date;
											updatedAt: Date;
											entryItems?: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										createdAt: Date;
										updatedAt: Date;
									}>;
									createdAt: Date;
									updatedAt: Date;
								}>;
							};
							destinationAccountId?: string;
							destinationAccount?: {
								id: string;
								name: string;
								budgetId: string;
								type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
								createdAt: Date;
								updatedAt: Date;
								entries?: Array<{
									id: string;
									type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
									date: Date;
									memo: string;
									accountId: string;
									account?: {
										id: string;
										name: string;
										budgetId: string;
										type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
										createdAt: Date;
										updatedAt: Date;
										entries?: Array<{
											id: string;
											type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
											date: Date;
											memo: string;
											accountId: string;
											account?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											destinationAccountId?: string;
											destinationAccount?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											externalPartyId?: string;
											externalParty?: {
												id: string;
												name: string;
												createdAt: Date;
												updatedAt: Date;
											};
											entryItems: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									destinationAccountId?: string;
									destinationAccount?: {
										id: string;
										name: string;
										budgetId: string;
										type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
										createdAt: Date;
										updatedAt: Date;
										entries?: Array<{
											id: string;
											type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
											date: Date;
											memo: string;
											accountId: string;
											account?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											destinationAccountId?: string;
											destinationAccount?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											externalPartyId?: string;
											externalParty?: {
												id: string;
												name: string;
												createdAt: Date;
												updatedAt: Date;
											};
											entryItems: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									externalPartyId?: string;
									externalParty?: {
										id: string;
										name: string;
										createdAt: Date;
										updatedAt: Date;
									};
									entryItems: Array<{
										id: string;
										amount: number;
										categoryId?: string;
										category?: {
											id: string;
											name: string;
											categoryGroupId: string;
											assignedAmount: number;
											createdAt: Date;
											updatedAt: Date;
											entryItems?: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										createdAt: Date;
										updatedAt: Date;
									}>;
									createdAt: Date;
									updatedAt: Date;
								}>;
							};
							externalPartyId?: string;
							externalParty?: {
								id: string;
								name: string;
								createdAt: Date;
								updatedAt: Date;
							};
							entryItems: Array<{
								id: string;
								amount: number;
								categoryId?: string;
								category?: {
									id: string;
									name: string;
									categoryGroupId: string;
									assignedAmount: number;
									createdAt: Date;
									updatedAt: Date;
									entryItems?: Array<{
										id: string;
										amount: number;
										categoryId?: string;
										category?: {
											id: string;
											name: string;
											categoryGroupId: string;
											assignedAmount: number;
											createdAt: Date;
											updatedAt: Date;
											entryItems?: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								createdAt: Date;
								updatedAt: Date;
							}>;
							createdAt: Date;
							updatedAt: Date;
						}>;
					};
					destinationAccountId?: string;
					destinationAccount?: {
						id: string;
						name: string;
						budgetId: string;
						type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
						createdAt: Date;
						updatedAt: Date;
						entries?: Array<{
							id: string;
							type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
							date: Date;
							memo: string;
							accountId: string;
							account?: {
								id: string;
								name: string;
								budgetId: string;
								type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
								createdAt: Date;
								updatedAt: Date;
								entries?: Array<{
									id: string;
									type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
									date: Date;
									memo: string;
									accountId: string;
									account?: {
										id: string;
										name: string;
										budgetId: string;
										type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
										createdAt: Date;
										updatedAt: Date;
										entries?: Array<{
											id: string;
											type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
											date: Date;
											memo: string;
											accountId: string;
											account?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											destinationAccountId?: string;
											destinationAccount?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											externalPartyId?: string;
											externalParty?: {
												id: string;
												name: string;
												createdAt: Date;
												updatedAt: Date;
											};
											entryItems: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									destinationAccountId?: string;
									destinationAccount?: {
										id: string;
										name: string;
										budgetId: string;
										type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
										createdAt: Date;
										updatedAt: Date;
										entries?: Array<{
											id: string;
											type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
											date: Date;
											memo: string;
											accountId: string;
											account?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											destinationAccountId?: string;
											destinationAccount?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											externalPartyId?: string;
											externalParty?: {
												id: string;
												name: string;
												createdAt: Date;
												updatedAt: Date;
											};
											entryItems: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									externalPartyId?: string;
									externalParty?: {
										id: string;
										name: string;
										createdAt: Date;
										updatedAt: Date;
									};
									entryItems: Array<{
										id: string;
										amount: number;
										categoryId?: string;
										category?: {
											id: string;
											name: string;
											categoryGroupId: string;
											assignedAmount: number;
											createdAt: Date;
											updatedAt: Date;
											entryItems?: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										createdAt: Date;
										updatedAt: Date;
									}>;
									createdAt: Date;
									updatedAt: Date;
								}>;
							};
							destinationAccountId?: string;
							destinationAccount?: {
								id: string;
								name: string;
								budgetId: string;
								type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
								createdAt: Date;
								updatedAt: Date;
								entries?: Array<{
									id: string;
									type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
									date: Date;
									memo: string;
									accountId: string;
									account?: {
										id: string;
										name: string;
										budgetId: string;
										type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
										createdAt: Date;
										updatedAt: Date;
										entries?: Array<{
											id: string;
											type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
											date: Date;
											memo: string;
											accountId: string;
											account?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											destinationAccountId?: string;
											destinationAccount?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											externalPartyId?: string;
											externalParty?: {
												id: string;
												name: string;
												createdAt: Date;
												updatedAt: Date;
											};
											entryItems: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									destinationAccountId?: string;
									destinationAccount?: {
										id: string;
										name: string;
										budgetId: string;
										type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
										createdAt: Date;
										updatedAt: Date;
										entries?: Array<{
											id: string;
											type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
											date: Date;
											memo: string;
											accountId: string;
											account?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											destinationAccountId?: string;
											destinationAccount?: {
												id: string;
												name: string;
												budgetId: string;
												type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
												createdAt: Date;
												updatedAt: Date;
												entries?: Array<{
													id: '...';
													type: '...';
													date: '...';
													memo: '...';
													accountId: '...';
													account?: '...';
													destinationAccountId?: '...';
													destinationAccount?: '...';
													externalPartyId?: '...';
													externalParty?: '...';
													entryItems: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											externalPartyId?: string;
											externalParty?: {
												id: string;
												name: string;
												createdAt: Date;
												updatedAt: Date;
											};
											entryItems: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									externalPartyId?: string;
									externalParty?: {
										id: string;
										name: string;
										createdAt: Date;
										updatedAt: Date;
									};
									entryItems: Array<{
										id: string;
										amount: number;
										categoryId?: string;
										category?: {
											id: string;
											name: string;
											categoryGroupId: string;
											assignedAmount: number;
											createdAt: Date;
											updatedAt: Date;
											entryItems?: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										createdAt: Date;
										updatedAt: Date;
									}>;
									createdAt: Date;
									updatedAt: Date;
								}>;
							};
							externalPartyId?: string;
							externalParty?: {
								id: string;
								name: string;
								createdAt: Date;
								updatedAt: Date;
							};
							entryItems: Array<{
								id: string;
								amount: number;
								categoryId?: string;
								category?: {
									id: string;
									name: string;
									categoryGroupId: string;
									assignedAmount: number;
									createdAt: Date;
									updatedAt: Date;
									entryItems?: Array<{
										id: string;
										amount: number;
										categoryId?: string;
										category?: {
											id: string;
											name: string;
											categoryGroupId: string;
											assignedAmount: number;
											createdAt: Date;
											updatedAt: Date;
											entryItems?: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								createdAt: Date;
								updatedAt: Date;
							}>;
							createdAt: Date;
							updatedAt: Date;
						}>;
					};
					externalPartyId?: string;
					externalParty?: {
						id: string;
						name: string;
						createdAt: Date;
						updatedAt: Date;
					};
					entryItems: Array<{
						id: string;
						amount: number;
						categoryId?: string;
						category?: {
							id: string;
							name: string;
							categoryGroupId: string;
							assignedAmount: number;
							createdAt: Date;
							updatedAt: Date;
							entryItems?: Array<{
								id: string;
								amount: number;
								categoryId?: string;
								category?: {
									id: string;
									name: string;
									categoryGroupId: string;
									assignedAmount: number;
									createdAt: Date;
									updatedAt: Date;
									entryItems?: Array<{
										id: string;
										amount: number;
										categoryId?: string;
										category?: {
											id: string;
											name: string;
											categoryGroupId: string;
											assignedAmount: number;
											createdAt: Date;
											updatedAt: Date;
											entryItems?: Array<{
												id: string;
												amount: number;
												categoryId?: string;
												category?: {
													id: string;
													name: string;
													categoryGroupId: string;
													assignedAmount: number;
													createdAt: Date;
													updatedAt: Date;
													entryItems?: '...';
												};
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								createdAt: Date;
								updatedAt: Date;
							}>;
						};
						createdAt: Date;
						updatedAt: Date;
					}>;
					createdAt: Date;
					updatedAt: Date;
				};
			};
		};
	};
	'api/budgets/:budgetId/accounts/:accountId': {
		PATCH: {
			parameters: {
				path: { budgetId: string; accountId: string };
				body: {
					name?: string;
					type?: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
					initialBalance?: number;
				};
				query?: never;
			};
			responses: {
				200: {
					id: string;
					name: string;
					budgetId: string;
					type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
					createdAt: Date;
					updatedAt: Date;
					entries?: Array<{
						id: string;
						type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
						date: Date;
						memo: string;
						accountId: string;
						account?: {
							id: string;
							name: string;
							budgetId: string;
							type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
							createdAt: Date;
							updatedAt: Date;
							entries?: Array<{
								id: string;
								type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
								date: Date;
								memo: string;
								accountId: string;
								account?: {
									id: string;
									name: string;
									budgetId: string;
									type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
									createdAt: Date;
									updatedAt: Date;
									entries?: Array<{
										id: string;
										type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
										date: Date;
										memo: string;
										accountId: string;
										account?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										destinationAccountId?: string;
										destinationAccount?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										externalPartyId?: string;
										externalParty?: {
											id: string;
											name: string;
											createdAt: Date;
											updatedAt: Date;
										};
										entryItems: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								destinationAccountId?: string;
								destinationAccount?: {
									id: string;
									name: string;
									budgetId: string;
									type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
									createdAt: Date;
									updatedAt: Date;
									entries?: Array<{
										id: string;
										type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
										date: Date;
										memo: string;
										accountId: string;
										account?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										destinationAccountId?: string;
										destinationAccount?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										externalPartyId?: string;
										externalParty?: {
											id: string;
											name: string;
											createdAt: Date;
											updatedAt: Date;
										};
										entryItems: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								externalPartyId?: string;
								externalParty?: {
									id: string;
									name: string;
									createdAt: Date;
									updatedAt: Date;
								};
								entryItems: Array<{
									id: string;
									amount: number;
									categoryId?: string;
									category?: {
										id: string;
										name: string;
										categoryGroupId: string;
										assignedAmount: number;
										createdAt: Date;
										updatedAt: Date;
										entryItems?: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									createdAt: Date;
									updatedAt: Date;
								}>;
								createdAt: Date;
								updatedAt: Date;
							}>;
						};
						destinationAccountId?: string;
						destinationAccount?: {
							id: string;
							name: string;
							budgetId: string;
							type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
							createdAt: Date;
							updatedAt: Date;
							entries?: Array<{
								id: string;
								type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
								date: Date;
								memo: string;
								accountId: string;
								account?: {
									id: string;
									name: string;
									budgetId: string;
									type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
									createdAt: Date;
									updatedAt: Date;
									entries?: Array<{
										id: string;
										type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
										date: Date;
										memo: string;
										accountId: string;
										account?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										destinationAccountId?: string;
										destinationAccount?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										externalPartyId?: string;
										externalParty?: {
											id: string;
											name: string;
											createdAt: Date;
											updatedAt: Date;
										};
										entryItems: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								destinationAccountId?: string;
								destinationAccount?: {
									id: string;
									name: string;
									budgetId: string;
									type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
									createdAt: Date;
									updatedAt: Date;
									entries?: Array<{
										id: string;
										type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
										date: Date;
										memo: string;
										accountId: string;
										account?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										destinationAccountId?: string;
										destinationAccount?: {
											id: string;
											name: string;
											budgetId: string;
											type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
											createdAt: Date;
											updatedAt: Date;
											entries?: Array<{
												id: string;
												type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
												date: Date;
												memo: string;
												accountId: string;
												account?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												destinationAccountId?: string;
												destinationAccount?: {
													id: '...';
													name: '...';
													budgetId: '...';
													type: '...';
													createdAt: '...';
													updatedAt: '...';
													entries?: '...';
												};
												externalPartyId?: string;
												externalParty?: {
													id: '...';
													name: '...';
													createdAt: '...';
													updatedAt: '...';
												};
												entryItems: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
												createdAt: Date;
												updatedAt: Date;
											}>;
										};
										externalPartyId?: string;
										externalParty?: {
											id: string;
											name: string;
											createdAt: Date;
											updatedAt: Date;
										};
										entryItems: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
										createdAt: Date;
										updatedAt: Date;
									}>;
								};
								externalPartyId?: string;
								externalParty?: {
									id: string;
									name: string;
									createdAt: Date;
									updatedAt: Date;
								};
								entryItems: Array<{
									id: string;
									amount: number;
									categoryId?: string;
									category?: {
										id: string;
										name: string;
										categoryGroupId: string;
										assignedAmount: number;
										createdAt: Date;
										updatedAt: Date;
										entryItems?: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									createdAt: Date;
									updatedAt: Date;
								}>;
								createdAt: Date;
								updatedAt: Date;
							}>;
						};
						externalPartyId?: string;
						externalParty?: {
							id: string;
							name: string;
							createdAt: Date;
							updatedAt: Date;
						};
						entryItems: Array<{
							id: string;
							amount: number;
							categoryId?: string;
							category?: {
								id: string;
								name: string;
								categoryGroupId: string;
								assignedAmount: number;
								createdAt: Date;
								updatedAt: Date;
								entryItems?: Array<{
									id: string;
									amount: number;
									categoryId?: string;
									category?: {
										id: string;
										name: string;
										categoryGroupId: string;
										assignedAmount: number;
										createdAt: Date;
										updatedAt: Date;
										entryItems?: Array<{
											id: string;
											amount: number;
											categoryId?: string;
											category?: {
												id: string;
												name: string;
												categoryGroupId: string;
												assignedAmount: number;
												createdAt: Date;
												updatedAt: Date;
												entryItems?: Array<{
													id: '...';
													amount: '...';
													categoryId?: '...';
													category?: '...';
													createdAt: '...';
													updatedAt: '...';
												}>;
											};
											createdAt: Date;
											updatedAt: Date;
										}>;
									};
									createdAt: Date;
									updatedAt: Date;
								}>;
							};
							createdAt: Date;
							updatedAt: Date;
						}>;
						createdAt: Date;
						updatedAt: Date;
					}>;
				};
			};
			errors: {
				400: {
					message: 'Account ID is required';
				};
			};
		};
		DELETE: {
			parameters: {
				path: { budgetId: string; accountId: string };
				query?: never;
			};
			responses: {
				200: {
					success: true;
				};
			};
			errors: {
				400: {
					message: 'Account ID is required';
				};
			};
		};
	};
	'api/budgets/:budgetId/entries/:entryId': {
		DELETE: {
			parameters: {
				path: { budgetId: string; entryId: string };
				query?: never;
			};
			responses: {
				200: {
					success: true;
				};
			};
		};
	};
}
export interface ActionPaths {}

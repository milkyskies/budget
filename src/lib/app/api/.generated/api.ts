
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
    description?: string
    type: string
    const?: string
    format?: string
    properties?: {
        [key: string]: RecursiveJSONSchema
    }
    items?: RecursiveJSONSchema
    required?: string[]
}
export interface APIPaths {
  'api/accounts': {
    POST: {
      parameters: {
        path?: never,
        body: {
  name: string;
  type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
  budgetId: string;
  initialBalance: number;
},
        query?: never,
      },
      responses: {
        200: {
  id: string;
  name: string;
  budgetId: string;
  type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
  createdAt: Date;
  updatedAt: Date;
  entries?: Array<
    {
      id: string;
      amount: number;
      type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
      date: Date;
      memo: string;
      categoryId?: string;
      category?: {
        id: string;
        name: string;
        categoryGroupId: string;
        assignedAmount: number;
        createdAt: Date;
        updatedAt: Date;
        entries?: Array<
          {
            id: string;
            amount: number;
            type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
            date: Date;
            memo: string;
            categoryId?: string;
            category?: {
              id: string;
              name: string;
              categoryGroupId: string;
              assignedAmount: number;
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            accountId: string;
            account?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            destinationAccountId?: string;
            destinationAccount?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            externalPartyId?: string;
            externalParty?: {
              id: string;
              name: string;
              createdAt: Date;
              updatedAt: Date;
            };
            createdAt: Date;
            updatedAt: Date;
          }
        >;
      };
      accountId: string;
      account?: {
        id: string;
        name: string;
        budgetId: string;
        type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
        createdAt: Date;
        updatedAt: Date;
        entries?: Array<
          {
            id: string;
            amount: number;
            type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
            date: Date;
            memo: string;
            categoryId?: string;
            category?: {
              id: string;
              name: string;
              categoryGroupId: string;
              assignedAmount: number;
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            accountId: string;
            account?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            destinationAccountId?: string;
            destinationAccount?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            externalPartyId?: string;
            externalParty?: {
              id: string;
              name: string;
              createdAt: Date;
              updatedAt: Date;
            };
            createdAt: Date;
            updatedAt: Date;
          }
        >;
      };
      destinationAccountId?: string;
      destinationAccount?: {
        id: string;
        name: string;
        budgetId: string;
        type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
        createdAt: Date;
        updatedAt: Date;
        entries?: Array<
          {
            id: string;
            amount: number;
            type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
            date: Date;
            memo: string;
            categoryId?: string;
            category?: {
              id: string;
              name: string;
              categoryGroupId: string;
              assignedAmount: number;
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            accountId: string;
            account?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            destinationAccountId?: string;
            destinationAccount?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            externalPartyId?: string;
            externalParty?: {
              id: string;
              name: string;
              createdAt: Date;
              updatedAt: Date;
            };
            createdAt: Date;
            updatedAt: Date;
          }
        >;
      };
      externalPartyId?: string;
      externalParty?: {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      };
      createdAt: Date;
      updatedAt: Date;
    }
  >;
},
      }
    },
  },
  'api/entries': {
    PUT: {
      parameters: {
        path?: never,
        body: {
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
  date: Date;
  amount: number;
  memo: string;
  accountId: string;
  id?: string;
  destinationAccountId?: string;
  externalPartyId?: string;
  categoryId?: string;
},
        query?: never,
      },
      responses: {
        200: {
  id: string;
  amount: number;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
  date: Date;
  memo: string;
  categoryId?: string;
  category?: {
    id: string;
    name: string;
    categoryGroupId: string;
    assignedAmount: number;
    createdAt: Date;
    updatedAt: Date;
    entries?: Array<
      {
        id: string;
        amount: number;
        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
        date: Date;
        memo: string;
        categoryId?: string;
        category?: {
          id: string;
          name: string;
          categoryGroupId: string;
          assignedAmount: number;
          createdAt: Date;
          updatedAt: Date;
          entries?: Array<
            {
              id: string;
              amount: number;
              type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
              date: Date;
              memo: string;
              categoryId?: string;
              category?: {
                id: string;
                name: string;
                categoryGroupId: string;
                assignedAmount: number;
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              accountId: string;
              account?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              destinationAccountId?: string;
              destinationAccount?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              externalPartyId?: string;
              externalParty?: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
              };
              createdAt: Date;
              updatedAt: Date;
            }
          >;
        };
        accountId: string;
        account?: {
          id: string;
          name: string;
          budgetId: string;
          type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
          createdAt: Date;
          updatedAt: Date;
          entries?: Array<
            {
              id: string;
              amount: number;
              type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
              date: Date;
              memo: string;
              categoryId?: string;
              category?: {
                id: string;
                name: string;
                categoryGroupId: string;
                assignedAmount: number;
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              accountId: string;
              account?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              destinationAccountId?: string;
              destinationAccount?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              externalPartyId?: string;
              externalParty?: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
              };
              createdAt: Date;
              updatedAt: Date;
            }
          >;
        };
        destinationAccountId?: string;
        destinationAccount?: {
          id: string;
          name: string;
          budgetId: string;
          type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
          createdAt: Date;
          updatedAt: Date;
          entries?: Array<
            {
              id: string;
              amount: number;
              type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
              date: Date;
              memo: string;
              categoryId?: string;
              category?: {
                id: string;
                name: string;
                categoryGroupId: string;
                assignedAmount: number;
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              accountId: string;
              account?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              destinationAccountId?: string;
              destinationAccount?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              externalPartyId?: string;
              externalParty?: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
              };
              createdAt: Date;
              updatedAt: Date;
            }
          >;
        };
        externalPartyId?: string;
        externalParty?: {
          id: string;
          name: string;
          createdAt: Date;
          updatedAt: Date;
        };
        createdAt: Date;
        updatedAt: Date;
      }
    >;
  };
  accountId: string;
  account?: {
    id: string;
    name: string;
    budgetId: string;
    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
    createdAt: Date;
    updatedAt: Date;
    entries?: Array<
      {
        id: string;
        amount: number;
        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
        date: Date;
        memo: string;
        categoryId?: string;
        category?: {
          id: string;
          name: string;
          categoryGroupId: string;
          assignedAmount: number;
          createdAt: Date;
          updatedAt: Date;
          entries?: Array<
            {
              id: string;
              amount: number;
              type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
              date: Date;
              memo: string;
              categoryId?: string;
              category?: {
                id: string;
                name: string;
                categoryGroupId: string;
                assignedAmount: number;
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              accountId: string;
              account?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              destinationAccountId?: string;
              destinationAccount?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              externalPartyId?: string;
              externalParty?: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
              };
              createdAt: Date;
              updatedAt: Date;
            }
          >;
        };
        accountId: string;
        account?: {
          id: string;
          name: string;
          budgetId: string;
          type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
          createdAt: Date;
          updatedAt: Date;
          entries?: Array<
            {
              id: string;
              amount: number;
              type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
              date: Date;
              memo: string;
              categoryId?: string;
              category?: {
                id: string;
                name: string;
                categoryGroupId: string;
                assignedAmount: number;
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              accountId: string;
              account?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              destinationAccountId?: string;
              destinationAccount?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              externalPartyId?: string;
              externalParty?: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
              };
              createdAt: Date;
              updatedAt: Date;
            }
          >;
        };
        destinationAccountId?: string;
        destinationAccount?: {
          id: string;
          name: string;
          budgetId: string;
          type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
          createdAt: Date;
          updatedAt: Date;
          entries?: Array<
            {
              id: string;
              amount: number;
              type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
              date: Date;
              memo: string;
              categoryId?: string;
              category?: {
                id: string;
                name: string;
                categoryGroupId: string;
                assignedAmount: number;
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              accountId: string;
              account?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              destinationAccountId?: string;
              destinationAccount?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              externalPartyId?: string;
              externalParty?: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
              };
              createdAt: Date;
              updatedAt: Date;
            }
          >;
        };
        externalPartyId?: string;
        externalParty?: {
          id: string;
          name: string;
          createdAt: Date;
          updatedAt: Date;
        };
        createdAt: Date;
        updatedAt: Date;
      }
    >;
  };
  destinationAccountId?: string;
  destinationAccount?: {
    id: string;
    name: string;
    budgetId: string;
    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
    createdAt: Date;
    updatedAt: Date;
    entries?: Array<
      {
        id: string;
        amount: number;
        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
        date: Date;
        memo: string;
        categoryId?: string;
        category?: {
          id: string;
          name: string;
          categoryGroupId: string;
          assignedAmount: number;
          createdAt: Date;
          updatedAt: Date;
          entries?: Array<
            {
              id: string;
              amount: number;
              type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
              date: Date;
              memo: string;
              categoryId?: string;
              category?: {
                id: string;
                name: string;
                categoryGroupId: string;
                assignedAmount: number;
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              accountId: string;
              account?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              destinationAccountId?: string;
              destinationAccount?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              externalPartyId?: string;
              externalParty?: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
              };
              createdAt: Date;
              updatedAt: Date;
            }
          >;
        };
        accountId: string;
        account?: {
          id: string;
          name: string;
          budgetId: string;
          type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
          createdAt: Date;
          updatedAt: Date;
          entries?: Array<
            {
              id: string;
              amount: number;
              type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
              date: Date;
              memo: string;
              categoryId?: string;
              category?: {
                id: string;
                name: string;
                categoryGroupId: string;
                assignedAmount: number;
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              accountId: string;
              account?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              destinationAccountId?: string;
              destinationAccount?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              externalPartyId?: string;
              externalParty?: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
              };
              createdAt: Date;
              updatedAt: Date;
            }
          >;
        };
        destinationAccountId?: string;
        destinationAccount?: {
          id: string;
          name: string;
          budgetId: string;
          type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
          createdAt: Date;
          updatedAt: Date;
          entries?: Array<
            {
              id: string;
              amount: number;
              type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
              date: Date;
              memo: string;
              categoryId?: string;
              category?: {
                id: string;
                name: string;
                categoryGroupId: string;
                assignedAmount: number;
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              accountId: string;
              account?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              destinationAccountId?: string;
              destinationAccount?: {
                id: string;
                name: string;
                budgetId: string;
                type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                createdAt: Date;
                updatedAt: Date;
                entries?: Array<
                  {
                    id: string;
                    amount: number;
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                    date: Date;
                    memo: string;
                    categoryId?: string;
                    category?: {
                      id: string;
                      name: string;
                      categoryGroupId: string;
                      assignedAmount: number;
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    accountId: string;
                    account?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    destinationAccountId?: string;
                    destinationAccount?: {
                      id: string;
                      name: string;
                      budgetId: string;
                      type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                      createdAt: Date;
                      updatedAt: Date;
                      entries?: Array<
                        {
                          id: '...';
                          amount: '...';
                          type: '...';
                          date: '...';
                          memo: '...';
                          categoryId?: '...';
                          category?: '...';
                          accountId: '...';
                          account?: '...';
                          destinationAccountId?: '...';
                          destinationAccount?: '...';
                          externalPartyId?: '...';
                          externalParty?: '...';
                          createdAt: '...';
                          updatedAt: '...';
                        }
                      >;
                    };
                    externalPartyId?: string;
                    externalParty?: {
                      id: string;
                      name: string;
                      createdAt: Date;
                      updatedAt: Date;
                    };
                    createdAt: Date;
                    updatedAt: Date;
                  }
                >;
              };
              externalPartyId?: string;
              externalParty?: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
              };
              createdAt: Date;
              updatedAt: Date;
            }
          >;
        };
        externalPartyId?: string;
        externalParty?: {
          id: string;
          name: string;
          createdAt: Date;
          updatedAt: Date;
        };
        createdAt: Date;
        updatedAt: Date;
      }
    >;
  };
  externalPartyId?: string;
  externalParty?: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
},
      }
    },
  },
  'api/accounts/:accountId': {
    PATCH: {
      parameters: {
        path: { accountId: string;  },
        body: {
  name?: string;
  type?: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
  initialBalance?: number;
},
        query?: never,
      },
      responses: {
        200: {
  id: string;
  name: string;
  budgetId: string;
  type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
  createdAt: Date;
  updatedAt: Date;
  entries?: Array<
    {
      id: string;
      amount: number;
      type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
      date: Date;
      memo: string;
      categoryId?: string;
      category?: {
        id: string;
        name: string;
        categoryGroupId: string;
        assignedAmount: number;
        createdAt: Date;
        updatedAt: Date;
        entries?: Array<
          {
            id: string;
            amount: number;
            type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
            date: Date;
            memo: string;
            categoryId?: string;
            category?: {
              id: string;
              name: string;
              categoryGroupId: string;
              assignedAmount: number;
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            accountId: string;
            account?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            destinationAccountId?: string;
            destinationAccount?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            externalPartyId?: string;
            externalParty?: {
              id: string;
              name: string;
              createdAt: Date;
              updatedAt: Date;
            };
            createdAt: Date;
            updatedAt: Date;
          }
        >;
      };
      accountId: string;
      account?: {
        id: string;
        name: string;
        budgetId: string;
        type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
        createdAt: Date;
        updatedAt: Date;
        entries?: Array<
          {
            id: string;
            amount: number;
            type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
            date: Date;
            memo: string;
            categoryId?: string;
            category?: {
              id: string;
              name: string;
              categoryGroupId: string;
              assignedAmount: number;
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            accountId: string;
            account?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            destinationAccountId?: string;
            destinationAccount?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            externalPartyId?: string;
            externalParty?: {
              id: string;
              name: string;
              createdAt: Date;
              updatedAt: Date;
            };
            createdAt: Date;
            updatedAt: Date;
          }
        >;
      };
      destinationAccountId?: string;
      destinationAccount?: {
        id: string;
        name: string;
        budgetId: string;
        type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
        createdAt: Date;
        updatedAt: Date;
        entries?: Array<
          {
            id: string;
            amount: number;
            type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
            date: Date;
            memo: string;
            categoryId?: string;
            category?: {
              id: string;
              name: string;
              categoryGroupId: string;
              assignedAmount: number;
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            accountId: string;
            account?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            destinationAccountId?: string;
            destinationAccount?: {
              id: string;
              name: string;
              budgetId: string;
              type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
              createdAt: Date;
              updatedAt: Date;
              entries?: Array<
                {
                  id: string;
                  amount: number;
                  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                  date: Date;
                  memo: string;
                  categoryId?: string;
                  category?: {
                    id: string;
                    name: string;
                    categoryGroupId: string;
                    assignedAmount: number;
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  accountId: string;
                  account?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  destinationAccountId?: string;
                  destinationAccount?: {
                    id: string;
                    name: string;
                    budgetId: string;
                    type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
                    createdAt: Date;
                    updatedAt: Date;
                    entries?: Array<
                      {
                        id: string;
                        amount: number;
                        type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
                        date: Date;
                        memo: string;
                        categoryId?: string;
                        category?: {
                          id: '...';
                          name: '...';
                          categoryGroupId: '...';
                          assignedAmount: '...';
                          createdAt: '...';
                          updatedAt: '...';
                          entries?: '...';
                        };
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
                        createdAt: Date;
                        updatedAt: Date;
                      }
                    >;
                  };
                  externalPartyId?: string;
                  externalParty?: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                  };
                  createdAt: Date;
                  updatedAt: Date;
                }
              >;
            };
            externalPartyId?: string;
            externalParty?: {
              id: string;
              name: string;
              createdAt: Date;
              updatedAt: Date;
            };
            createdAt: Date;
            updatedAt: Date;
          }
        >;
      };
      externalPartyId?: string;
      externalParty?: {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      };
      createdAt: Date;
      updatedAt: Date;
    }
  >;
},
      }
      errors: {
        400: {
          message: 'Account ID is required',
        },
        401: {
          message: 'Unauthorized',
        },
      }
    },
    DELETE: {
      parameters: {
        path: { accountId: string;  },
        query?: never,
      },
      responses: {
        200: {
          success: true,
        },
      }
      errors: {
        400: {
          message: 'Account ID is required',
        },
        401: {
          message: 'Unauthorized',
        },
      }
    },
  },
};
export interface ActionPaths {
};

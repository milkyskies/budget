
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
  'api/accounts/post': {
    POST: {
      parameters: {
        path?: never,
        body: {
  name: string;
  type: 'CASH' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD';
  balance: number;
  budgetId: string;
},
        query?: never,
      },
      responses: {
        200: {
  id: string;
  name: string;
  balance: number;
  budgetId: string;
  createdAt: Date;
  updatedAt: Date;
},
      }
    },
  },
};
export interface ActionPaths {
};

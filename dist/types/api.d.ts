import { Scopes } from './';
type APIResponseBase<T> = {
    success: boolean;
    message: string;
    data: T;
};
type APIConfigResponse = APIResponseBase<{
    token: {
        id: string;
        userId: string;
        token: string;
        projectId: string;
        expiredAt: string;
        scopes: Scopes[];
        createdAt: string;
        updatedAt: string;
    };
}>;
type APIBranchesResponse = APIResponseBase<{
    branches: Array<{
        id: string;
        name: string;
        projectId: string;
        isMain: boolean;
        createdAt: string;
        updatedAt: string;
    }>;
}>;
type APIVariablesResponse = APIResponseBase<Array<{
    id: string;
    key: string;
    value: string;
    branchId: string;
    createdAt: string;
    updatedAt: string;
}>>;
export { APIConfigResponse, APIBranchesResponse, APIVariablesResponse };
//# sourceMappingURL=api.d.ts.map
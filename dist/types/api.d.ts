import { Scopes } from './';
type APIConfigResponse = {
    success: boolean;
    message: string;
    data: {
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
    };
};
type APIBranchesResponse = {
    success: boolean;
    message: string;
    data: {
        branches: Array<{
            id: string;
            name: string;
            projectId: string;
            isMain: boolean;
            createdAt: string;
            updatedAt: string;
        }>;
    };
};
export { APIConfigResponse, APIBranchesResponse };
//# sourceMappingURL=api.d.ts.map
import { RenvClient } from './types';
type Constructor = {
    logEnabled?: boolean;
    isProduct?: boolean;
    baseUrl?: string;
};
declare class Renv implements RenvClient {
    private readonly token;
    private readonly logEnabled;
    private readonly isProduct;
    private projectId?;
    private branch;
    private data;
    constructor(token: string, config?: Constructor);
    private config;
    private branches;
    private variables;
    load(branch?: string): Promise<void>;
    get(key: string): string | undefined;
    getAll(): Record<string, string>;
}
export { Renv };
//# sourceMappingURL=base.d.ts.map
import { RenvClient } from './types';
declare class Renv implements RenvClient {
    private readonly token;
    private readonly logEnabled;
    private projectId?;
    private branch;
    private scopes;
    private data;
    constructor(token: string, logEnabled?: boolean);
    private config;
    private branches;
    load(branch?: string): Promise<void>;
}
export { Renv };
//# sourceMappingURL=base.d.ts.map
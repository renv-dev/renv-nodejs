import { RenvClient, Branch, Scopes, APIConfigResponse, APIBranchesResponse, APIVariablesResponse } from './types';

const BASE_ENDPOINT = 'https://renv-web.vercel.app/api';

class Renv implements RenvClient {
    private readonly token: string;
    private readonly logEnabled: boolean = true;
    private projectId?: string;
    private branch: Branch = 'main';
    private scopes: Scopes[] = [];
    private data: Record<string, string> = {};

    constructor(token: string, logEnabled: boolean = false) {
        this.token = token;
        this.logEnabled = logEnabled;
    }

    private async config(): Promise<APIConfigResponse> {
        const config = await fetch(`${BASE_ENDPOINT}/keys`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        });
        if (!config.ok) {
            throw new Error(`Failed to load configuration: ${config.statusText}`);
        }
        return config.json();
    }

    private async branches(branch: string): Promise<APIBranchesResponse> {
        if (!this.projectId) {
            throw new Error('Project ID is not set. Please load the configuration first.');
        }
        const branches = await fetch(`${BASE_ENDPOINT}/projects/${this.projectId}/branches?name=${branch}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        });
        if (!branches.ok) {
            throw new Error(`Failed to load branches: ${branches.statusText}`);
        }
        return branches.json();
    }

    private async variables(): Promise<APIVariablesResponse> {
        if (!this.projectId) {
            throw new Error('Project ID is not set. Please load the configuration first.');
        }
        const varsResponse = await fetch(`${BASE_ENDPOINT}/projects/${this.projectId}/branches/${this.branch}/envs`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        });
        if (!varsResponse.ok) {
            throw new Error(`Failed to load variables: ${varsResponse.statusText}`);
        }
        return varsResponse.json();
    }

    async load(branch: string = 'main'): Promise<void> {
        const config = await this.config();
        const tokenData = config.data.token;
        this.projectId = tokenData.projectId;
        this.scopes = tokenData.scopes;

        const branches = await this.branches(branch);
        if (branches.data.branches.length === 0) {
            throw new Error(`Branch "${branch}" not found.`);
        } else if (branches.data.branches.length > 1) {
            throw new Error(`Multiple branches found with the name "${branch}".`);
        }

        this.branch = branches.data.branches[0].id;
        if (this.logEnabled) console.log(`Loaded configuration for branch "${branch}" (ID: ${this.branch})`);

        const vars = await this.variables();
        this.data = vars.data.map(({ key, value }) => ({ key, value })).reduce((acc, { key, value }) => {
            acc[key] = value;
            return acc;
        }, {} as Record<string, string>);

        if (this.logEnabled) console.log(`Loaded ${Object.keys(this.data).length} environment variables.`);
    }

    get(key: string): string | undefined {
        return this.data[key];
    }
    
    getAll(): Record<string, string> {
        return this.data;
    }
}

export { Renv };
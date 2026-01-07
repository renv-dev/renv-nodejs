type RenvClient = {
    load(branch?: string): Promise<void>;
}

export { RenvClient };
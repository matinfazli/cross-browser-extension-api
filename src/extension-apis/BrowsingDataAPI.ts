export type RemovalOptions = {
    hostnames?: string[],
    originTypes?: { unprotectedWeb?: boolean, protectedWeb?: boolean, extension?: boolean },
    since?: number
}

export type DataTypeSet = {
    cache?: boolean,
    cookies?: boolean,
    downloads?: boolean,
    fileSystems?: boolean,
    formData?: boolean,
    history?: boolean,
    indexedDB?: boolean,
    localStorage?: boolean,
    passwords?: boolean,
    pluginData?: boolean,
    serverBoundCertificates?: boolean,
    serviceWorkers?: boolean
}

export interface BrowsingDataAPI {
    remove(removalOptions: RemovalOptions, dataTypes: DataTypeSet): Promise<void>;

    removeCache(removalOptions: RemovalOptions): Promise<void>;

    removeCookies(removalOptions: RemovalOptions): Promise<void>;

    removeDownloads(removalOptions: RemovalOptions): Promise<void>;

    removeFormData(removalOptions: RemovalOptions): Promise<void>;

    removeHistory(removalOptions: RemovalOptions): Promise<void>;

    removeLocalStorage(removalOptions: RemovalOptions): Promise<void>;

    removalOptions(removalOptions: RemovalOptions): Promise<void>;

    removePluginData(removalOptions: RemovalOptions): Promise<void>;

    settings(): Promise<{ options: RemovalOptions, dataToRemove: DataTypeSet, dataRemovalPermitted: DataTypeSet }>;
}

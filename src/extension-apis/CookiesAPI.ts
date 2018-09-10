export type Cookie = {
    domain: string,
    expirationDate?: number,
    firstPartyDomain: string,
    hostOnly: boolean,
    httpOnly: boolean,
    name: string,
    path: string,
    secure: boolean,
    session: string,
    value: string
}

export type CookieStore = {
    id: string,
    tabIds: number[]
}

export type OnChangedCause = 'evicted' | 'expired' | 'explicit' | 'expired_overwrite' | 'overwrite';

export interface OnChanged {
    addListener(listener: (changeInfo: { removed: boolean, cookie: Cookie, cause: OnChangedCause }) => void): void;

    removeListener(listener: (changeInfo: { removed: boolean, cookie: Cookie, cause: OnChangedCause }) => void): void;

    hasListener(listener: (changeInfo: { removed: boolean, cookie: Cookie, cause: OnChangedCause }) => void): boolean;
}

export interface CookiesAPI {
    get(details: { firstPartyDomain?: string, name: string, storeId?: string, url: string }): Promise<Cookie>;

    getAll(details: { domain?: string, firstPartyDomain?: string, name?: string, path?: string, secure?: boolean, session?: boolean, storeId?: string, url?: string }): Promise<Cookie[]>;

    getAllCookieStores(): Promise<CookieStore[]>;

    onChanged: OnChanged;

    remove(details: { firstPartyDomain?: string, name: string, storeId?: string, url: string }): Promise<Cookie>;

    set(details: { domain?: string, expirationDate?: string, firstPartyDomain?: string, httpOnly?: boolean, name?: string, path?: string, secure?: boolean, storeId?: string, url: string, value?: string }): Promise<Cookie>;
}


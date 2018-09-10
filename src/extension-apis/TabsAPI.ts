export type Tab = {
    active: boolean,
    audible?: boolean,
    autoDiscardable?: boolean,
    cookieStoreId?: string,
    discarded?: boolean,
    favIconUrl?: string,
    height?: number,
    hidden: boolean,
    highlighted: boolean,
    id?: number,
    incognito: boolean,
    index: number,
    isArticle: boolean,
    isInReaderMode: boolean,
    lastAccessed: number,
    mutedInfo?: string, // TODO: tabs.MutedInfo
    openerTabId?: number,
    pinned: boolean,
    selected: boolean,
    sessionId?: string,
    status?: string,
    title?: string,
    url?: string,
    width?: number,
    windowId: number
}

export interface TabsAPI {

}

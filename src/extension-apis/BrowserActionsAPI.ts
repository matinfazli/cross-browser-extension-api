import {Tab} from "./TabsAPI";

export type ColorArray = number[];

export interface OnClicked {
    addListener(listener: (tab: Tab) => void): void;

    removeListener(listener: (tab: Tab) => void): void;

    hasListener(listener: (tab: Tab) => void): boolean;
}

export interface BrowserActionsAPI {
    disable(tabId: number): void;

    enable(tabId: number): void;

    getBadgeBackgroundColor(details: { tabId?: number, windowId?: number }): Promise<ColorArray>;

    getBadgeText(details: { tabId?: number, windowId?: number }): Promise<string>;

    getPopup(details: { tabId?: number, windowId?: number }): Promise<string>;

    getTitle(details: { tabId?: number, windowId?: number }): Promise<string>;

    isEnabled(details: { tabId?: number, windowId?: number }): Promise<boolean>;

    onClicked: OnClicked;

    openPopup(): Promise<void>;

    setBadgeBackgroundColor(details: { color: string | ColorArray | null, tabId?: number, windowId?: number }): void;

    setBadgeText(details: { text: string | null, tabId?: number, windowId?: number }): void;

    setIcon(details: { imageData?: ImageData | { [k: string]: string } | null, path?: string | { [k: string]: string } | null, tabId?: number, windowId?: number }): Promise<void>;

    setPopup(details: { tabId?: number, windowId?: number, popup: string | null }): void;

    setTitle(details: { title: string | null, tabId: number, windowId: number }): void;
}

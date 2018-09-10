export type BookmarkTreeNode = {
    children?: BookmarkTreeNode[],
    dateAdded?: number,
    dateGroupModified?: number,
    id: string,
    index?: number,
    parentId?: string,
    title: string,
    type?: string, // TODO: BookmarkTreeNodeType
    unmodifiable?: string,
    url?: string,
}

export type CreateDetails = {
    index?: number,
    parentId?: string,
    title?: string,
    type?: string, //TODO: BookmarkTreeNodeType
    url?: string
}

export interface OnChanged {
    addListener(listener: (id: string, bookmark: BookmarkTreeNode) => void): void;

    removeListener(listener: (id: string, bookmark: BookmarkTreeNode) => void): void;

    hasListener(listener: (id: string, bookmark: BookmarkTreeNode) => void): boolean;
}

export interface OnChildrenReordered {
    addListener(listener: (id: string, reorderInfo: { childIds: string[] }) => void): void;

    removeListener(listener: (id: string, reorderInfo: { childIds: string[] }) => void): void;

    hasListener(listener: (id: string, reorderInfo: { childIds: string[] }) => void): boolean;
}

export interface OnCreated {
    addListener(listener: (id: string, bookmark: BookmarkTreeNode) => void): void;

    removeListener(listener: (id: string, bookmark: BookmarkTreeNode) => void): void;

    hasListener(listener: (id: string, bookmark: BookmarkTreeNode) => void): boolean;
}

export interface OnImportBegan {
    addListener(listener: () => void): void;

    removeListener(listener: () => void): void;

    hasListener(listener: () => void): boolean;
}

export interface OnImportEnded {
    addListener(listener: () => void): void;

    removeListener(listener: () => void): void;

    hasListener(listener: () => void): boolean;
}

export interface OnMoved {
    addListener(listener: (id: string, moveInfo: { parentId: string, index: string, oldParentId: string, oldIndex: number }) => void): void;

    removeListener(listener: (id: string, moveInfo: { parentId: string, index: string, oldParentId: string, oldIndex: number }) => void): void;

    hasListener(listener: (id: string, moveInfo: { parentId: string, index: string, oldParentId: string, oldIndex: number }) => void): boolean;
}

export interface OnRemoved {
    addListener(listener: (id: string, removeInfo: { parentId: string, index: string, node: BookmarkTreeNode }) => void): void;

    removeListener(listener: (id: string, removeInfo: { parentId: string, index: string, node: BookmarkTreeNode }) => void): void;

    hasListener(listener: (id: string, removeInfo: { parentId: string, index: string, node: BookmarkTreeNode }) => void): boolean;
}

export interface BookmarksAPI {
    create(bookmark: CreateDetails): Promise<BookmarkTreeNode>;

    get(idOrIdList: string | string[]): Promise<BookmarkTreeNode[]>;

    getChildren(id: string): Promise<BookmarkTreeNode[]>;

    getRecent(numberOfItems: number): Promise<BookmarkTreeNode[]>;

    getSubTree(id: string): Promise<BookmarkTreeNode[]>;

    getTree(): Promise<BookmarkTreeNode[]>;

    move(id: string, destination: { parentId?: string, index?: string }): Promise<BookmarkTreeNode>;

    onChanged: OnChanged;
    onChildrenReordered: OnChildrenReordered;
    onCreated: OnCreated;
    onImportBegan: OnImportBegan;
    onImportEnded: OnImportEnded;
    onMoved: OnMoved;
    onRemoved: OnRemoved;

    remove(id: string): Promise<void>;

    removeTree(id: string): Promise<void>;

    search(query: string | { query?: string, url?: string, title?: string }): Promise<BookmarkTreeNode>;

    update(id: string, changes: { title: string, url: string }): Promise<BookmarkTreeNode>;
}

export type Command = {
    name?: string,
    description?: string,
    shortcut?: string
}

export interface OnCommand {
    addListener(listener: (name: string) => void): void;

    removeListener(listener: (name: string) => void): void;

    hasListener(listener: (name: string) => void): boolean;
}

export interface CommandsAPI {
    getAll(): Promise<Command[]>;

    onCommand: OnCommand;

    reset(name: string): Promise<void>;

    update(details: { name: string, description?: string, shortcut?: string }): Promise<void>;
}

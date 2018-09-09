export type Alarm = {
    name: string,
    scheduledTime: number,
    periodInMinutes?: number
}

export type AlarmInfo = {
    when?: number,
    delayInMinutes?: number,
    periodInMinutes?: number
}

export interface OnAlarm {
    addListener(listener: (alarm: Alarm) => void): void;

    removeListener(listener: (alarm: Alarm) => void): void;

    hasListener(listener: (alarm: Alarm) => void): boolean;
}

export interface AlarmsAPI {
    clear(name?: string): Promise<boolean>;

    clearAll(): Promise<boolean>;

    create(name?: string, alarmInfo?: AlarmInfo): Promise<boolean>;

    get(name?: string): Promise<Alarm>;

    getAll(): Promise<Alarm>;

    onAlarm: OnAlarm;
}

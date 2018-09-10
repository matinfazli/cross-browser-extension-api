import {AlarmsAPI} from "./AlarmsAPI";
import {BookmarksAPI} from "./BookmarksAPI";
import {BrowserActionsAPI} from "./BrowserActionsAPI";

export interface API {
    alarms: AlarmsAPI;
    bookmarks: BookmarksAPI;
    browserActions: BrowserActionsAPI;
}

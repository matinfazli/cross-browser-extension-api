import {AlarmsAPI} from "./AlarmsAPI";
import {BookmarksAPI} from "./BookmarksAPI";

export interface API {
    alarms: AlarmsAPI;
    bookmarks: BookmarksAPI;
}

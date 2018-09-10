import {AlarmsAPI} from "./AlarmsAPI";
import {BookmarksAPI} from "./BookmarksAPI";
import {BrowserActionsAPI} from "./BrowserActionsAPI";
import {BrowsingDataAPI} from "./BrowsingDataAPI";
import {CommandsAPI} from "./CommandsAPI";

export interface API {
    alarms: AlarmsAPI;
    bookmarks: BookmarksAPI;
    browserActions: BrowserActionsAPI;
    browsingData: BrowsingDataAPI;
    commands: CommandsAPI;
}

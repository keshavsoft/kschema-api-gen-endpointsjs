import { locateSource } from "./Helpers/steps/locateSource.js";
import { locateDestination } from "./Helpers/steps/locateDestination.js";
import { createFolder } from "../core/createFolder.js";

import { updateAppJs } from "./Helpers/steps/updateRoutesJs.js";

import { announce } from "./Helpers/steps/announce.js";

import resolveFolderName from "./Helpers/steps/resolveFolderName.js";

export default ({ folderName = "", tableName,
    argsAsIs, toPath, isAnnounce = true,
    checkBeforeCreate = true,
    inShowLog = true }) => {

    const localToPath = toPath;

    const source = locateSource();
    const destination = locateDestination({
        inResolvedFolderName: folderName,
        toPath: localToPath
    });

    const createFolderResponse = createFolder({
        source, destination,
        isAnnounce, checkBeforeCreate
    });

    if (createFolderResponse.KTF) {
        updateAppJs({
            appJsPath: `${localToPath}/end-points.js`,
            endpoint: folderName,
            inShowLog
        });
    };

    if (isAnnounce) announce({ inResolvedFolderName: folderName });

    return folderName;
};
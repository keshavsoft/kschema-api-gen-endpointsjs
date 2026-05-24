import updateImports from "./UpdateRoutesJs/updateImports/index.js";
import updateAppUse from "./UpdateRoutesJs/updateUse/index.js";
import fs from "fs";

export function updateAppJs({ appJsPath, endpoint, inShowLog = true }) {
    if (!fs.existsSync(appJsPath)) {
        if (inShowLog) console.log("app.js file not found ?");

        return false;
    };

    updateImports({ appJsPath, endpoint });
    updateAppUse({ appJsPath, endpoint });
};
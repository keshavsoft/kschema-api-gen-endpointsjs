import fixRoutesJs from "express-fix-routes-js";

const startFunc = async ({ appJsPath, endpoint, inShowLog = true }) => {
    await fixRoutesJs({
        showLog: true,
        endPointsJsPath: appJsPath,
        inActionName: endpoint,
        inFolderName: endpoint,
        inGetType: "simple"
    });

    // if (!fs.existsSync(appJsPath)) {
    //     if (inShowLog) console.log("app.js file not found ?");

    //     return false;
    // };

    // updateImports({ appJsPath, endpoint });
    // updateAppUse({ appJsPath, endpoint });
};

export default startFunc;
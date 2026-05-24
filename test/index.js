import index from "../index.js";

const startFunc = async () => {
    const fn = await index();

    await fn({
        folderName: "Table1",
        toPath: process.cwd(),
        showLog: false,
        isAnnounce: false,
        tableName: "Table1"
    });
};

startFunc().then();
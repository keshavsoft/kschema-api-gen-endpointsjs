import index from "../index.js";

const startFunc = async () => {
    const fn = await index();

    await fn({
        folderName: "V1",
        toPath: process.cwd(),
        showLog: false,
        isAnnounce: false
    });
};

startFunc().then();
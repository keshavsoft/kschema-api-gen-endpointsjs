import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async () => {
    const v = getLatestVersion();

    const module = await import(`./bin/${v}/AddSubRoute/index.js`);

    return await module.default;
};

export default load;
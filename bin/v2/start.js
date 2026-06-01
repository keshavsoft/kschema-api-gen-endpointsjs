import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

import addTableName from "./AddTableName/index.js";

import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = () => {
  const input = parseInput();

  if (input.cmd === "--help" || input.cmd === "-h" || input.cmd === "help") return showUsage(version);

  addTableName(input);
};

export default run;
import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

import addSubRoute from "./AddSubRoute/index.js";

import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = () => {
  const input = parseInput();

  if (input.cmd === "--help" || input.cmd === "-h" || input.cmd === "help") return showUsage(version);

  addSubRoute(input);
};

export default run;
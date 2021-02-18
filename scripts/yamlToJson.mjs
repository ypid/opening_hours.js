// Node script used to convert a .yaml file to a .json file
// Call yamlToJson.mjs [input] [output]
const [, , input, output] = process.argv;
const out = output | `${input.split(".")[0]}.json`;

import jsYaml from "js-yaml";

import { readFileSync, writeFileSync } from "fs";
import prettier from "prettier";

const loadedYaml = jsYaml.load(readFileSync(input, { encoding: "utf-8" }));
writeFileSync(
  out,
  prettier.format(JSON.stringify(loadedYaml), { parser: "json" })
);

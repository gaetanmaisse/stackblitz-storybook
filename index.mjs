import { $ } from "zx";

const reproRootFolder = "storybook-repro";

const currentPath = await $`pwd`;
console.log(`currentPath ${currentPath}`);

cd("/tmp");
await $`rm -rf ${reproRootFolder}`;
await $`mkdir ${reproRootFolder}`;
cd(`/tmp/${reproRootFolder}`);

const framework = "react";
await $`npx sb@next repro --template ${framework} ${framework}`;
await $`rm -rf ${framework}/.git`;
await $`rm -rf ${currentPath}/${framework}`;
await $`mv ${framework} ${currentPath}/${framework}`;

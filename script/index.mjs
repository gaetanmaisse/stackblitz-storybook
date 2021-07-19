import { $ } from "zx";
import { templates } from "./templates.mjs";
import { commitEverythingInDirectory } from "./git-helper.mjs";
import { pwd } from "./fs-helper.mjs";

const reproRootFolder = "storybook-repro";

const currentPath = await pwd();

cd("/tmp");
await $`rm -rf ${reproRootFolder}`;
await $`mkdir ${reproRootFolder}`;

for (const template of templates) {
  cd(`/tmp/${reproRootFolder}`);
  const framework = template;
  await $`npx sb@next repro --template ${framework} ${framework}`;
  await $`rm -rf ${framework}/.git`;
  await $`rm -rf ${currentPath}/${framework}`;
  await $`mv ${framework} ${currentPath}/${framework}`;
  cd(currentPath);

  await commitEverythingInDirectory(
    framework,
    `feat: update ${framework} example`
  );
}

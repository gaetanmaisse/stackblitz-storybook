import { $ } from "zx";

/**
 * Execute `pwd` command and return the result
 *
 * @return {Promise<string>}
 */
export async function pwd() {
  return (await $`pwd`).toString().replace("\n", "");
}

/**
 * Create a tmp directory using `mktemp` command and return the result
 *
 * @return {Promise<string>}
 */
export async function createTmpDir() {
  return (await $`mktemp -d`).toString().replace("\n", "");
}

/**
 * Create a tmp directory using `mktemp` command and return the result
 *
 * @return {Promise<string>}
 */
export async function copy(sourceFile, targetDirectory) {
  return await $`cp ${sourceFile} ${targetDirectory}`;
}

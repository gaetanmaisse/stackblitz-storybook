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
export async function copyAll(source, target) {
  return await $`cp -a /${source}/. /${target}/`;
}

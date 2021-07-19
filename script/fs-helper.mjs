import { $ } from "zx";

/**
 * Execute `pwd` command and return the result
 *
 * @return {Promise<string>}
 */
export async function pwd() {
  return (await $`pwd`).toString().replace("\n", "");
}

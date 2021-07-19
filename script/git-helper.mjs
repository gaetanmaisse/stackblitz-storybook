/**
 *
 * @param {string} directory
 * @param {string} commitMessage
 * @return {Promise<void>}
 */
export async function commitEverythingInDirectory(directory, commitMessage) {
  await $`git add ${directory}/`;

  try {
    await $`git commit -m ${commitMessage}`;
  } catch (e) {
    console.log(`Nothing to commit 🤷`);
  }
}

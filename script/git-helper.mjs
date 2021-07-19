/**
 *
 * @param {string} commitMessage
 * @return {Promise<void>}
 */
export async function commitEverythingInDirectory(commitMessage) {
  await $`git add .`;

  try {
    await $`git commit -m ${commitMessage}`;
  } catch (e) {
    console.log(`Nothing to commit 🤷`);
  }
}

/**
 *
 * @param {string} branch
 * @return {Promise<void>}
 */
export async function initRepo(branch) {
  await $`git init --initial-branch ${branch}`;
}

import { $ } from 'zx';

let commandResult = await $`echo ⚡️ Hello!`;
console.log(`And the command result is: ${commandResult}`)

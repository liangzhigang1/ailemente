// 从node.js 14版及以上版本中，require作为COMMONJS的一个命令已不再直接支持使用，所以我们需要导入createRequire命令才可以
// 执行pre-commit钩子的时候会进这个文件，然后发现require is undefined，eslint只会校验src下的文件
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
// 先去 .git/COMMIT_EDITMSG 文件中读取了 commit 提交的信息
const msg = require('fs')
  .readFileSync('.git/COMMIT_EDITMSG', 'utf8')
  .trim()

// 使用了正则去校验提交信息的格式
// feat 代表新功能，docs 代表文档，perf 代表性能
const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
const mergeRe = /^(Merge pull request|Merge branch)/

if (!commitRE.test(msg)) {
  if (!mergeRe.test(msg)) {
    console.log('git commit信息检验不通过')
    console.error(`git commit的信息格式不对, 需要使用 title(scope): desc的格式 比如 fix: xxbug feat(test): add new 具体校验逻辑看 scripts/verifyCommit.js `)
    process.exit(1)
  }
} else {
  console.log('git commit信息校验通过')
}


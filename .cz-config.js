const glob = require('glob');

/**
 * @param {string} pattern
 * @param {Function} fn
 */
const globMap = (pattern, fn) =>
  glob
    .sync(pattern)
    .map(fn || (path => path))
    .map(path => path.replace(/\/$/, ''));

module.exports = {
  types: [
    { value: 'feat', name: '🎸 feat:     A new feature' },
    { value: 'fix', name: '🐛 fix:      A bug fix' },
    { value: 'wip', name: '🕯 wip:      Work in progress' },
    { value: 'chore', name: '🤖 chore:    Build process or auxiliary tool change' },
    { value: 'refactor', name: '💡 refactor: A code change that neither fixes a bug or adds a feature' },
    { value: 'style', name: '💄 style:    Markup, white-space, formatting, missing semi-colons...' },
    { value: 'test', name: '💍 test:     Adding missing tests' },
    { value: 'perf', name: '💪 perf:     A code change that improves performance' },
    { value: 'docs', name: '✏️ docs:     Documentation only changes' },
    { value: 'ci', name: '🕹️ ci:      CI related changes' },
    { value: 'revert', name: '🔥 revert:   Revert to a commit' }
  ],
  allowCustomScopes: true,
  skipQuestions: ['footer'],
  allowBreakingChanges: ['feat', 'fix', 'revert', 'refactor'],
  scopes: [].concat(globMap('packages/*/', path => path.replace(/packages\//, '')))
};

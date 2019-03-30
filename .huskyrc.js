const task = arr => arr.join(' && ');
module.exports = {
  hooks: {
    'pre-commit': task(['lint-staged']),
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};

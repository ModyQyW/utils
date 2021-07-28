module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
  },
  hooks: {
    'before:init': 'yarn run lint',
    'after:bump': 'yarn run build',
  },
};

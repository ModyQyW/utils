module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
  },
  hooks: {
    'before:init': 'pnpm run test',
  },
};

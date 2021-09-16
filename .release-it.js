module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
  },
  hooks: {
    'before:init': 'pnpm install && pnpm run lint',
    'after:bump': 'pnpm run build',
    'after:release': 'cnpm sync @modyqyw/utils',
  },
};

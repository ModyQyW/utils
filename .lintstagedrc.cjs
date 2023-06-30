module.exports = {
  '*.md': 'markdownlint --fix --ignore-path=.gitignore',
  '*.{js,cjs,mjs,ts,cts,mts}': 'eslint --fix --cache --ignore-path=.gitignore',
  '*.{ts,cts,mts}': 'tsc -p tsconfig.json --noEmit'
};

module.exports = {
  '*.json': 'prettier --write',
  '*.{js,jsx,ts,tsx,vue}': 'eslint --fix',
  '*.{md,markdown}': 'markdownlint --fix',
};

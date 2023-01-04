import { defineConfig } from 'rollup';
import { rollupIndexConfig, rollupIndexTypesConfig } from './src/rollup';

export default defineConfig([rollupIndexConfig(), rollupIndexTypesConfig()]);

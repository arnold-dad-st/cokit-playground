import { defineConfig } from 'eslint/config';
import mono from '@servicetitan/eslint-config/mono';

export default defineConfig([
    mono,
    /**
     * To exclude files from linting, import { globalIgnores } from eslint/config,
     * then call globalIgnores with array of glob patterns. E.g.,
     */
    // globalIgnores(['.storybook', '**/*.d.ts'])
    {
        /**
         * Add overrides for specific rules here. Use "files" to only override in files
         * matching the specified glob pattern(s).
         */
        // files: [],
        rules: {},
    },
]);

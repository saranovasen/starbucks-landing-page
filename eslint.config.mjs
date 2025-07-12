import globals from 'globals';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig } from 'eslint/config';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
];

const customConfig = {
  ignores: ['node_modules', 'dist', 'build', 'coverage'],
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    perfectionist,
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'perfectionist/sort-imports': ['error', { type: 'natural', order: 'asc' }],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};

export default defineConfig([
  ...eslintConfig,
  customConfig,
  eslintConfigPrettier,
]);

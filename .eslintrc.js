module.exports = {
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'eslint-config-prettier',
		'prettier',
	],
	plugins: ['prettier'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: {
			js: '@typescript-eslint/parser',
			ts: '@typescript-eslint/parser',
			'<template>': 'espree',
		},
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
		extraFileExtensions: ['.vue'],
	},
	rules: {
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'import/extensions': ['error', 'ignorePackages'],
		'prettier/prettier': 'error',
	},
};

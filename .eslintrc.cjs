/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:svelte/recommended',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	parserOptions: {
		project: true,
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		'prettier/prettier': 'warn',
		'no-unused-vars': 'off',
		'@typescript-eslint/adjacent-overload-signatures': 'warn',
		'@typescript-eslint/array-type': 'warn',
		'@typescript-eslint/class-literal-property-style': 'warn',
		'@typescript-eslint/consistent-generic-constructors': 'warn',
		'@typescript-eslint/consistent-indexed-object-style': 'warn',
		'@typescript-eslint/consistent-type-assertions': 'warn',
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': 'warn',
		'@typescript-eslint/no-confusing-non-null-assertion': 'warn',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/no-inferrable-types': 'warn',
		'@typescript-eslint/non-nullable-type-assertion-style': 'warn',
		'@typescript-eslint/prefer-for-of': 'warn',
		'@typescript-eslint/prefer-function-type': 'warn',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'off',
		'@typescript-eslint/prefer-string-starts-ends-with': 'warn',
		'padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var']
			},
			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'any', prev: 'directive', next: 'directive' },
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: '*', next: 'block-like' },
			{ blankLine: 'always', prev: 'block-like', next: '*' },
			{ blankLine: 'always', prev: 'block-like', next: 'block-like' },
			{ blankLine: 'always', prev: 'multiline-block-like', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'multiline-block-like' },
			{
				blankLine: 'always',
				prev: 'multiline-block-like',
				next: 'multiline-block-like'
			},
			{ blankLine: 'always', prev: 'multiline-expression', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'multiline-expression' },
			{
				blankLine: 'always',
				prev: 'multiline-expression',
				next: 'multiline-expression'
			},
			{ blankLine: 'always', prev: 'import', next: '*' },
			{ blankLine: 'any', prev: 'import', next: 'import' },
			{ blankLine: 'always', prev: 'export', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'export' },
			{ blankLine: 'any', prev: 'export', next: 'export' }
		],
		'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
		'@typescript-eslint/prefer-ts-expect-error': 'warn',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/require-await': 'warn',
		'@typescript-eslint/naming-convention': [
			'warn',
			// {
			// 	selector: 'interface',
			// 	format: ['PascalCase'],
			// 	custom: {
			// 		regex: '^I[A-Z]',
			// 		match: false
			// 	}
			// },
			{
				selector: 'variableLike',
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase']
			},
			{
				selector: 'typeLike',
				format: ['PascalCase']
			},
			{
				selector: 'enumMember',
				format: ['UPPER_CASE']
			}
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
		],
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-assignments': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'svelte/valid-compile': ['error', { ignoreWarnings: true }],
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'dayjs',
						message: 'Please use the custom dayjs import from ./path/to/dayjsCustom instead.'
					}
				]
			}
		]
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};

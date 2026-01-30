import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {

    },

  },
  // Intégration des règles @ngrx/signals (flat config)
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      '@ngrx': (await import('@ngrx/eslint-plugin')).default ?? (await import('@ngrx/eslint-plugin')),
    },
    rules: {
      '@ngrx/enforce-type-call': 'error',
      '@ngrx/prefer-protected-state': 'error',
      '@ngrx/signal-store-feature-should-use-generic-type': 'error',
      '@ngrx/signal-state-no-arrays-at-root-level': 'error',
      '@ngrx/with-state-no-arrays-at-root-level': 'error'
  },
}
];

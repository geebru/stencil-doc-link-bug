import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-doc-link-bug',
  buildEs5: 'prod',
  devServer: {
    reloadStrategy: 'pageReload'
  },
  outputTargets: [
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode',
      file: './stencil.html-data.json',
    },
    {
      type: 'www',
      serviceWorker: null,
    }
  ],
};

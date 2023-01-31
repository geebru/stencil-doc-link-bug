import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-doc-link-bug',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};

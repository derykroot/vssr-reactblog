import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

import replace from '@rollup/plugin-replace';
import {getallmdatamdx} from './helpers/mdxmetadata'

export default async () =>{
  let rplc = replace({
    preventAssignment: true,
    'process.env.MDATA': JSON.stringify(await getallmdatamdx())
  })

  const config: UserConfig = {
    plugins: [react(), ssr(), (await import('@mdx-js/rollup-frontmatter')).default(), rplc],
    clearScreen: false,
    resolve: {
      alias: {
        // Needed for MDX, see https://github.com/mdx-js/mdx/discussions/1794#discussioncomment-1581513
        'react/jsx-runtime': 'react/jsx-runtime.js',
      },
    },
    optimizeDeps: { include: ['react/jsx-runtime.js'] },
  }
  return config;
}
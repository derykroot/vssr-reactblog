import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

export default async () =>{

  const options = {
    // See https://mdxjs.com/advanced/plugins
    remarkPlugins: [(await import('remark-frontmatter')).default],
    rehypePlugins: [],
  }

  const config: UserConfig = {
    plugins: [react(), ssr(), (await import('@mdx-js/rollup')).default(options)],
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
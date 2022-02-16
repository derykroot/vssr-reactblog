import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

export default async () =>{
  const config: UserConfig = {
    plugins: [react(), ssr(), (await import('@mdx-js/rollup-frontmatter')).default()],
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
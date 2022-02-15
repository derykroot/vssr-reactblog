import { promises as fs } from 'node:fs'
import yaml from 'js-yaml'

export { onBeforeRender }

async function onBeforeRender() {
  let bts = await fs.readFile("/pages/about/post.page.mdx", "utf8");
  const vlr = JSON.stringify(yaml.loadAll(bts)[0]) + "test";
  return {
    pageContext: {
      pageProps: {
          vlr,
      }
    },
  }
}
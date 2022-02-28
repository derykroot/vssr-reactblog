// import * as pt from './post.page.mdx';
import {getmetadatas} from '../../helpers/mdxmetadata'

export { onBeforeRender }

async function onBeforeRender() {
  
  const vlrs = await getmetadatas(); 
  return {
    pageContext: {
      pageProps: {
          vlrs,
      }
    },
  }
}
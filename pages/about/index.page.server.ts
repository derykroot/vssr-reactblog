// import * as pt from './post.page.mdx';
import {getmetadatas} from '../../helpers/mdxmetadata'

export { onBeforeRender }

async function onBeforeRender() {
  // console.log(pt.mdata);
  const vlr = JSON.stringify(await getmetadatas()); 
  return {
    pageContext: {
      pageProps: {
          vlr,
      }
    },
  }
}
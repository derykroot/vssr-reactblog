import * as pt from './post.page.mdx';

export { onBeforeRender }

async function onBeforeRender() {
  console.log(pt.mdata);
  const vlr = JSON.stringify(pt.mdata) + " **test";  
  return {
    pageContext: {
      pageProps: {
          vlr,
      }
    },
  }
}
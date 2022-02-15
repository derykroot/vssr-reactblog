import { promises as fs } from 'node:fs'
import path from 'path'
import yaml from 'js-yaml'

export { onBeforeRender }

async function onBeforeRender() {
  console.log("dir: " + path.resolve("../../"));
  console.log("dirfile: " + path.resolve("pages/about","post.page.mdx"));
  let sdir = await fs.readdir(path.resolve(""));
  console.log(sdir.join(", \n"));console.log(path.resolve("") + "*******");
  sdir = await fs.readdir(path.resolve("../"));
  console.log(sdir.join(", \n"));console.log(path.resolve("../") + "*******");
  sdir = await fs.readdir(path.resolve("../../"));
  console.log(sdir.join(", \n"));console.log(path.resolve("../../") + "=======");

  let fls = await fs.readdir(path.resolve(""));
  for (let s of fls) {
    console.log(s);
    let st = await fs.readFile(path.resolve("", s), "utf8");
    console.log(st);
  }

  let bts = await fs.readFile(path.resolve("pages/about","post.page.mdx"), "utf8");
  const vlr = JSON.stringify(yaml.loadAll(bts)[0]) + "test";  
  return {
    pageContext: {
      pageProps: {
          vlr,
      }
    },
  }
}
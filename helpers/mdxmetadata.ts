import { promises as fs } from "fs";
import yaml from 'js-yaml'

const mtds = process.env.MDATA;

async function extractyaml(src: any) {
    //let res = yaml.loadAll(src)[0];
    let fromMd = await import('mdast-util-from-markdown');
    let frontmatter = (await import('micromark-extension-frontmatter')).frontmatter
    let mutil = await import('mdast-util-frontmatter')

    let tree = fromMd.fromMarkdown(src, {
        extensions: [frontmatter(['yaml', 'toml'])],
        mdastExtensions: [mutil.frontmatterFromMarkdown(['yaml', 'toml'])]
    });
    let yamlextracted = (<any>tree.children.find( e => e.type == 'yaml'));
    yamlextracted = yamlextracted == null ? "" : yamlextracted.value;
    let res = (<string>yamlextracted).length < 1 ? {} : yaml.loadAll(yamlextracted)[0];
    return res;
}

export async function getallmdatamdx() {
    let local = "./pages/blog/posts";
    let fls = (await fs.readdir(local)).filter( v => v.endsWith(".mdx"));
    let vlrs = [];
    for (let f of fls) {
        let flst = await fs.readFile(local + "/" + f, "utf8");
        let mdt:any = await extractyaml(flst);
        mdt = { postname: f.split(".")[0], ...mdt};
        vlrs.push(mdt);
    }
    return vlrs;
}

export async function getmetadatas() {
    return (import.meta.env.DEV == true ? getallmdatamdx() : mtds);
}
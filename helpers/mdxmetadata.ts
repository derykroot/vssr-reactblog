import { promises as fs } from "fs";
import yaml from 'js-yaml'

const mtds = process.env.MDATA;

export async function getallmdatamdx() {
    let local = "./pages/blog/posts";
    let fls = (await fs.readdir(local)).filter( v => v.endsWith(".mdx"));
    let vlrs = [];
    for (let f of fls) {
        let flst = await fs.readFile(local + "/" + f, "utf8");
        let mdt:any = yaml.loadAll(flst)[0];
        mdt = { postname: f.split(".")[0], ...mdt};
        vlrs.push(mdt);
    }
    return vlrs;
}

export async function getmetadatas() {
    return (import.meta.env.DEV == true ? getallmdatamdx() : mtds);
}
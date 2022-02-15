import React from 'react'
import './index.css'

export { Page } 

function Page({vlr} : {vlr:string}) {
  // let bts = readFileSync("./pages/about/post.page.mdx", "utf8");
  // console.log(yaml.loadAll(bts)[0]);
  return (
    <>
      <h1>About </h1>
      <p>{vlr}</p>
    </>
  )
}

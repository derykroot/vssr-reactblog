import React from 'react'

export { Page };

function Page({vlrs} : {vlrs:any}) {
    const listItems = vlrs.map((v:any) => {
        let lrf = "/blog/posts/" + v.postname;
        return (
        <li key={v.postname}> 
            <a href={lrf}>{v.postname}</a>
        </li>)}
  );
  return (
    <>
      <h1>Blog Posts</h1>
      <ul>{listItems}</ul>
    </>
  )
}

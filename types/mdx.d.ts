declare module '*.mdx' {
    let MDXComponent: (props) => JSX.Element;
    export default MDXComponent;
    export const mdata:any;
  }
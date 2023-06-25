import * as esbuild from 'esbuild-wasm';

//plugin
export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',

    //esbuild - setup takes the build prop - representing bundling process which we will hijack
    setup(build: esbuild.PluginBuild) {

      //add listeners to the build process - figure out where the entry point is stored (onResolve)
      //filter is the filter on the filename...
      //namespace allows limiting of loading specific files within a namespace.
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log('onResole', args);
        return { path: args.path, namespace: 'a' };
      });
 
      //add listener to override the load process...by taking the return from onResolve and load...
      //if attempt at index.js, load custom code...
      //recursive loop and try load any imports by recalling onResolve() step...
      //otherwise, return custom content
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log('onLoad', args);
 
        //manually override and load
        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: `
              import message from './message';
              console.log(message);
            `,
          };
        } else {
          return {
            loader: 'jsx',
            contents: 'export default "hi there!"',
          };
        }
      });
    },
  };
};
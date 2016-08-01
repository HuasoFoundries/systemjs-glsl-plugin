# systemjs-glsl-plugin

Loader plugin to treat (and build) OpenGL Shading Language (*.glsl) files as javascript modules. Made for `jspm@0.17`

This plugin is, for now, a POC to load *.glsl files (such as the ones found on the [THREE.js source](https://github.com/mrdoob/three.js) ) and let SystemJS treat them as javascript ES6 modules.

I made this loader to import some specific THREE.js submodules into one of my projects, then building a static build with [jspm-cli](https://github.com/jspm/jspm-cli), and getting [Rollup](https://github.com/rollup/rollup) to perform its three shaking magic on the result.

## Installation

Install it with `jspm` using:

```sh
jspm install glsl=npm:systemjs-glsl-plugin
```

## Config

This loader must be enabled in the `meta` section of `jspm.config.js` 

```js
meta: {
  "*.glsl": {
    "defaultExtension": false,
    "loader": "glsl"
  },{
    ...  
  }
}
```


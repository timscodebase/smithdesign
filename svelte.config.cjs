// const node = require("@sveltejs/adapter-node");
const pkg = require("./package.json");
const netlify = require("@sveltejs/adapter-netlify");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    adapter: netlify(),

    target: "#svelte",

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};

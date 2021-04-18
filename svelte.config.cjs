// const node = require("@sveltejs/adapter-node");
const pkg = require("./package.json");
// const netlify = require("@sveltejs/adapter-netlify");
const vercel = require("@sveltejs/adapter-vercel");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    adapter: vercel(),

    target: "#svelte",

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};

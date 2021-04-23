// const node = require("@sveltejs/adapter-node");
const pkg = require("./package.json");
const vercel = require("@sveltejs/adapter-vercel");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    adapter: vercel(),

    target: "#svelte",

    files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};

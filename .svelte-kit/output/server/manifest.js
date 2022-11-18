export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-fe8585bd.js","imports":["_app/immutable/start-fe8585bd.js","_app/immutable/chunks/preload-helper-b21cceae.js","_app/immutable/chunks/index-e013d4b4.js","_app/immutable/chunks/singletons-404d25b4.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "rss.xml",
				pattern: /^\/rss\.xml$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/rss.xml/_server.js')
			},
			{
				id: "sitemap.xml",
				pattern: /^\/sitemap\.xml$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/sitemap.xml/_server.js')
			},
			{
				id: "posts/[slug]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "posts/[...page]",
				pattern: /^\/posts(?:\/(.*))?\/?$/,
				names: ["page"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

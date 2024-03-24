export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["demo_photos/god_sox.webp","demo_photos/oshinoko.jpeg","demo_photos/tanuki.jpeg","favicon.png","robots.txt"]),
	mimeTypes: {".webp":"image/webp",".jpeg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.mD_uEOY9.js","app":"_app/immutable/entry/app.ZkEnk8F6.js","imports":["_app/immutable/entry/start.mD_uEOY9.js","_app/immutable/chunks/entry.8_jbPAjD.js","_app/immutable/chunks/scheduler.eNMpi6sU.js","_app/immutable/entry/app.ZkEnk8F6.js","_app/immutable/chunks/scheduler.eNMpi6sU.js","_app/immutable/chunks/index.Bt15D2ky.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/top",
				pattern: /^\/top\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

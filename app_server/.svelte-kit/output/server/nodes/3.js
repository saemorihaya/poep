import * as universal from '../entries/pages/top/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/top/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/top/+page.ts";
export const imports = ["_app/immutable/nodes/3.XubwNxkI.js","_app/immutable/chunks/scheduler.eNMpi6sU.js","_app/immutable/chunks/index.Bt15D2ky.js"];
export const stylesheets = ["_app/immutable/assets/3.uJilmx4i.css"];
export const fonts = [];

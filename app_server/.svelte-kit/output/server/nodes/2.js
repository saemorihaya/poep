import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.sdBbVUe_.js","_app/immutable/chunks/scheduler.eNMpi6sU.js","_app/immutable/chunks/index.Bt15D2ky.js"];
export const stylesheets = ["_app/immutable/assets/2.9aa_RFyI.css"];
export const fonts = [];

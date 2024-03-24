import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const welcome = "/_app/immutable/assets/svelte-welcome.NKSIh51R.webp";
const welcome_fallback = "/_app/immutable/assets/svelte-welcome.FTYsst4A.png";
const css = {
  code: "section.svelte-19xx0bt.svelte-19xx0bt{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}h1.svelte-19xx0bt.svelte-19xx0bt{width:100%}.welcome.svelte-19xx0bt.svelte-19xx0bt{display:block;position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-19xx0bt img.svelte-19xx0bt{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""} <section class="svelte-19xx0bt" data-svelte-h="svelte-nu5rbp"><h1 class="svelte-19xx0bt"><span class="welcome svelte-19xx0bt"><picture><source${add_attribute("srcset", welcome, 0)} type="image/webp"> <img${add_attribute("src", welcome_fallback, 0)} alt="Welcome" class="svelte-19xx0bt"></picture></span>

		to your new<br>SvelteKit app</h1> <h2>try editing <strong>src/routes/+page.svelte</strong></h2> </section>`;
});
export {
  Page as default
};

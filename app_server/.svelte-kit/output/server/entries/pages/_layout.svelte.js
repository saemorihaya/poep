import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component, e as each, f as escape } from "../../chunks/ssr.js";
import { U as UserInfo } from "../../chunks/userInfo.js";
import { p as page } from "../../chunks/stores.js";
const css$1 = {
  code: "header.svelte-ixaimk.svelte-ixaimk{display:flex;justify-content:space-between;justify-content:center;background-color:black;color:var(--color-theme-1);background:linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))}nav.svelte-ixaimk.svelte-ixaimk{display:flex;justify-content:center}ul.svelte-ixaimk.svelte-ixaimk{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-ixaimk.svelte-ixaimk{position:relative;height:100%}li[aria-current=“page”].svelte-ixaimk.svelte-ixaimk::before{--size:6px;content:“”;width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-ixaimk a.svelte-ixaimk{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear;color:rgb(225, 225, 225)}a.svelte-ixaimk.svelte-ixaimk:hover{color:rgba(225, 225, 225, 0.5)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-ixaimk"><div class="“header-content”"><nav class="svelte-ixaimk"><ul class="svelte-ixaimk"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-ixaimk"><a href="/" class="svelte-ixaimk" data-svelte-h="svelte-5a0zws">Home</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="svelte-ixaimk"><a href="/" class="svelte-ixaimk" data-svelte-h="svelte-1ajff16">About</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/top") ? "page" : void 0,
    0
  )} class="svelte-ixaimk"><a href="/top" class="svelte-ixaimk" data-svelte-h="svelte-so1rop">Top</a></li></ul></nav></div> </header>`;
});
const css = {
  code: ".app.svelte-1wevoko{display:flex;flex-direction:column;min-height:100vh}main.svelte-1wevoko{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-1wevoko{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-1wevoko{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const userInfos = JSON.parse(data.post.userInfos).map((jsonObj) => new UserInfo(jsonObj.id, jsonObj.name, jsonObj.password));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="app svelte-1wevoko">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1wevoko">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-1wevoko">${each(userInfos, (user) => {
    return `<p>id: ${escape(user.id)}, name: ${escape(user.name)}, password: ${escape(user.password)}</p>`;
  })}</footer> </div>`;
});
export {
  Layout as default
};

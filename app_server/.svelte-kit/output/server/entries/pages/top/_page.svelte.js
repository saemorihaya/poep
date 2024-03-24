import { c as create_ssr_component, d as add_attribute, f as escape, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: ".container.svelte-ofor9e{display:flex;align-items:flex-start;gap:10px;border:2px solid #ffb6c1;padding:10px;border-radius:10px}img.svelte-ofor9e{max-width:200px;height:auto}.text.svelte-ofor9e{font-size:1rem;color:#333}",
  map: null
};
const ImageTextComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageUrl: imageUrl2 } = $$props;
  let { text: text2 } = $$props;
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl2 !== void 0)
    $$bindings.imageUrl(imageUrl2);
  if ($$props.text === void 0 && $$bindings.text && text2 !== void 0)
    $$bindings.text(text2);
  $$result.css.add(css$1);
  return `<div class="container svelte-ofor9e"><img${add_attribute("src", imageUrl2, 0)} alt="Descriptive text" class="svelte-ofor9e"> <p class="text svelte-ofor9e">${escape(text2)}</p> </div>`;
});
const css = {
  code: "main.svelte-1iyuvch{text-align:center;padding:1em;font-family:Arial, sans-serif}",
  map: null
};
let imageUrl = "demo_photos/oshinoko.jpeg";
let text = "ここに表示するテキストを入力してください";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1iyuvch"><h1 data-svelte-h="svelte-1uxuedm">画像テキストコンポーネントのデモ</h1> ${validate_component(ImageTextComponent, "ImageTextComponent").$$render($$result, { imageUrl, text }, {}, {})} </main>`;
});
export {
  Page as default
};

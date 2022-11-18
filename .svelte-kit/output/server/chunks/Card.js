import { c as create_ssr_component, b as add_attribute, j as is_void, k as compute_slots } from "./index.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { as = "div" } = $$props;
  let { href = void 0 } = $$props;
  let { class: _class = void 0 } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  return `${((tag) => {
    return tag ? `<${as}${add_attribute("class", ["relative flex flex-col items-start group", _class].join(" "), 0)}>${is_void(tag) ? "" : `${slots.eyebrow ? slots.eyebrow({}) : ``}

  ${$$slots.title ? `<div class="${"text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"}">${href ? `<div class="${"absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"}"></div>
        <a${add_attribute("href", href, 0)} data-sveltekit-prefetch><span class="${"absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl"}"></span>
          <span class="${"relative z-10"}">${slots.title ? slots.title({}) : ``}</span></a>` : `${slots.title ? slots.title({}) : ``}`}</div>` : ``}

  ${$$slots.description ? `<div class="${[
      "relative z-10 flex-1 text-sm text-zinc-600 dark:text-zinc-400",
      !!$$slots.title ? "mt-2" : ""
    ].join(" ").trim()}">${slots.description ? slots.description({}) : ``}</div>` : ``}

  ${$$slots.actions ? `<div aria-hidden="${"true"}" class="${"relative z-10 flex items-center mt-4"}">${slots.actions ? slots.actions({}) : ``}</div>` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(as)}`;
});
export {
  Card as C
};

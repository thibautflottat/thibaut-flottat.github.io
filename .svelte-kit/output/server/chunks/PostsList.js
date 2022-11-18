import { c as create_ssr_component, d as spread, e as escape_object, v as validate_component, g as escape, b as add_attribute, i as each } from "./index.js";
import { C as Card } from "./Card.js";
import { format, parseISO } from "date-fns";
const ArrowRightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 20 20" },
      { fill: "currentColor" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
const PostPreview_svelte_svelte_type_style_lang = "";
const css = {
  code: ".prose.svelte-1c2379o>p{margin-top:0;margin-bottom:0}",
  map: null
};
const PostPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: `/posts/${post.slug}`,
      "data-sveltekit-prefetch": true
    },
    {},
    {
      actions: () => {
        return `<div slot="${"actions"}"><div class="${"flex items-center text-teal-500"}"><span class="${"text-sm font-medium"}">Read</span>
      ${validate_component(ArrowRightIcon, "ArrowRightIcon").$$render($$result, { class: "w-4 h-4 ml-1" }, {}, {})}</div></div>`;
      },
      description: () => {
        return `<div slot="${"description"}" class="${"prose dark:prose-invert svelte-1c2379o"}"><!-- HTML_TAG_START -->${post.preview.html}<!-- HTML_TAG_END --></div>`;
      },
      title: () => {
        return `${slots.default ? slots.default({ slot: "title" }) : `${escape(post.title)}`}`;
      },
      eyebrow: () => {
        return `${slots.eyebrow ? slots.eyebrow({ slot: "eyebrow" }) : ``}`;
      }
    }
  )}`;
});
const PostDate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { decorate } = $$props;
  let { post } = $$props;
  let { collapsed = false } = $$props;
  let { class: _class } = $$props;
  if ($$props.decorate === void 0 && $$bindings.decorate && decorate !== void 0)
    $$bindings.decorate(decorate);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  return `<div class="${[
    escape(
      [
        "relative z-10 order-first mb-3 flex text-sm text-zinc-400 dark:text-zinc-500",
        _class
      ].join(" "),
      true
    ),
    decorate ? "pl-3.5" : ""
  ].join(" ").trim()}">${decorate ? `<span class="${"absolute inset-y-0 left-0 flex items-center py-1"}" aria-hidden="${"true"}"><span class="${"h-full w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"}"></span></span>` : ``}
  <div class="${["flex", !collapsed ? "flex-col" : ""].join(" ").trim()}"><time${add_attribute("datetime", post.date, 0)}>${escape(format(new Date(parseISO(post.date)), "MMMM d, yyyy"))}</time>
    ${collapsed ? `<span class="${"mx-1"}">\u2022</span>` : ``}
    <span>${escape(post.readingTime)}</span></div></div>`;
});
const PostsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<div class="${"flex flex-col gap-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"}">${each(posts, (post) => {
    return `<article class="${"grid items-start grid-cols-4 gap-8"}">${validate_component(PostDate, "PostDate").$$render($$result, { class: "flex-col hidden md:flex", post }, {}, {})}

      <div class="${"col-span-4 md:col-span-3"}">${validate_component(PostPreview, "PostPreview").$$render($$result, { post }, {}, {
      eyebrow: () => {
        return `${slots.default ? slots.default({ slot: "eyebrow" }) : `
            ${validate_component(PostDate, "PostDate").$$render(
          $$result,
          {
            class: "md:hidden",
            post,
            collapsed: true,
            decorate: true
          },
          {},
          {}
        )}
          `}`;
      }
    })}</div>
    </article>`;
  })}</div>`;
});
export {
  ArrowRightIcon as A,
  PostsList as P
};

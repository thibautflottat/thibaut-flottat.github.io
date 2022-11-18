const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ data }) {
  const component = data.post.isIndexFile ? await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../posts/getting-started/index.md": () => import("../../../../chunks/index3.js").then((n) => n._) }), `../../../../posts/${data.post.slug}/index.md`) : await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../posts/lorem-ipsum.md": () => import("../../../../chunks/lorem-ipsum.js").then((n) => n._) }), `../../../../posts/${data.post.slug}.md`);
  return {
    post: data.post,
    component: component.default,
    layout: {
      fullWidth: true
    }
  };
}
export {
  load
};

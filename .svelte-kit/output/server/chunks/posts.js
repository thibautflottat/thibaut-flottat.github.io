import { _ as __vite_glob_0_0 } from "./index3.js";
import { _ as __vite_glob_0_1 } from "./lorem-ipsum.js";
import { format } from "date-fns";
import { parse } from "node-html-parser";
import readingTime from "reading-time/lib/reading-time.js";
const posts = Object.entries(/* @__PURE__ */ Object.assign({ "/posts/getting-started/index.md": __vite_glob_0_0, "/posts/lorem-ipsum.md": __vite_glob_0_1 })).map(([filepath, post]) => {
  const html = parse(post.default.render().html);
  const preview = post.metadata.preview ? parse(post.metadata.preview) : html.querySelector("p");
  return {
    ...post.metadata,
    slug: filepath.replace(/(\/index)?\.md/, "").split("/").pop(),
    isIndexFile: filepath.endsWith("/index.md"),
    date: post.metadata.date ? format(
      addTimezoneOffset(new Date(post.metadata.date)),
      "yyyy-MM-dd"
    ) : void 0,
    preview: {
      html: preview.toString(),
      text: preview.structuredText ?? preview.toString()
    },
    readingTime: readingTime(html.structuredText).text
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post, index, allPosts) => ({
  ...post,
  next: allPosts[index - 1],
  previous: allPosts[index + 1]
}));
function addTimezoneOffset(date) {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1e3;
  return new Date(new Date(date).getTime() + offsetInMilliseconds);
}
export {
  posts as p
};

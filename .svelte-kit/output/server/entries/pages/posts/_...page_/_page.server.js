import { r as redirect } from "../../../../chunks/index2.js";
import { p as posts } from "../../../../chunks/posts.js";
function paginate(data, { page = 1, limit } = {}) {
  if (limit) {
    return data.slice((page - 1) * limit, page * limit);
  }
  return data;
}
async function load({ params }) {
  let page = 1;
  let limit = 10;
  if (params.page) {
    try {
      const index = params.page.split("page/").pop();
      if (index) {
        page = parseInt(index);
      }
    } catch (e) {
      console.error(e);
    }
  }
  const postsForPage = paginate(posts, { limit, page });
  if (postsForPage.length == 0 && page > 1) {
    throw redirect(302, "/posts");
  }
  return {
    posts: postsForPage,
    page,
    limit
  };
}
export {
  load
};

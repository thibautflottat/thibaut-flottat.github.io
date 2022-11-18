import { c as create_ssr_component, b as add_attribute } from "./index.js";
const PenguinsMp4 = "/_app/immutable/assets/penguins-b7dc7505.mp4";
const metadata = {
  "title": "Getting Started",
  "date": "2022-10-09T00:00:00.000Z",
  "headings": [
    {
      "depth": 2,
      "value": "Creating a Post",
      "id": "creating-a-post"
    },
    {
      "depth": 2,
      "value": "Rendering Posts",
      "id": "rendering-posts"
    },
    {
      "depth": 2,
      "value": "Getting Posts",
      "id": "getting-posts"
    },
    {
      "depth": 2,
      "value": "Theme",
      "id": "theme"
    },
    {
      "depth": 2,
      "value": "Mdsvex Plugins",
      "id": "mdsvex-plugins"
    },
    {
      "depth": 3,
      "value": "Videos",
      "id": "videos"
    },
    {
      "depth": 3,
      "value": "Relative URLs for Images and Videos",
      "id": "relative-urls-for-images-and-videos"
    },
    {
      "depth": 2,
      "value": "Deploying",
      "id": "deploying"
    },
    {
      "depth": 2,
      "value": "That\u2019s it!",
      "id": "thats-it"
    }
  ]
};
const Getting_started = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Thanks for checking out my blog template. It\u2019s based on the blog I built for my own <a href="${"https://mattjennings.io"}" rel="${"nofollow"}">website</a> and I hope this is a good starting point for you to start yours.</p>
<p>Let\u2019s go over a few quick things:</p>
<ul><li><p>This template was built using <code>@sveltejs/kit@1.0.0-next.511</code>. I\u2019ll keep it updated when I can, but be aware that there things might break since SvelteKit is still in beta.</p></li>
<li><p>The theme of this blog is heavily borrowed from Tailwind\u2019s <a href="${"https://spotlight.tailwindui.com/"}" rel="${"nofollow"}">\u201CSpotlight\u201D blog template</a>. This is <em>not</em> a port of that template, but the styling is pretty much the same.</p></li>
<li><p>You should edit the <code>src/lib/info.js</code> file to contain your information. This will properly update the parts of the website that display your name, social links, and SEO (meta tags) for your posts.</p></li></ul>
<p>Now that that\u2019s out of the way, let\u2019s learn about how to make posts.</p>
<h2 id="${"creating-a-post"}"><a href="${"#creating-a-post"}">Creating a Post</a></h2>
<p>All of your posts (including this one) are located in the <code>posts</code> folder. They are written in markdown and parsed with mdsvex. If you\u2019re unfamiliar with mdsvex, I would recommend <a href="${"https://mdsvex.com/playground"}" rel="${"nofollow"}">looking at the website</a> to see what is all possible out of the box.</p>
<p>You can add a new post by creating either a new <code>.md</code> file or a folder with an <code>index.md</code> file:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">/posts/my-first-post.md
/posts/my-first-post/index.md</code>`}<!-- HTML_TAG_END --></pre>
<p>Make sure your posts have <code>title</code> and <code>date</code> properties in the front matter:</p>
<pre class="${"language-md"}"><!-- HTML_TAG_START -->${`<code class="language-md"><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml">title: My First Post
date: 2021-07-09
preview: This text will be used for the preview instead of the first paragraph</span>
<span class="token punctuation">---</span></span>

(your content here)</code>`}<!-- HTML_TAG_END --></pre>
<p>The <code>preview</code> property is optional, in case you want to customize the preview text. If the property is added, but the text is left empty, the first paragraph is used automatically.</p>
<h2 id="${"rendering-posts"}"><a href="${"#rendering-posts"}">Rendering Posts</a></h2>
<p>Each individual post is rendered at <code>src/routes/posts/[slug]</code>. You\u2019ll notice the route has 3 files:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">-| +page.js
-| +page.server.js
-| +page.svelte</code>`}<!-- HTML_TAG_END --></pre>
<p>The metadata for the post is loaded in <code>+page.server.js</code>. It is then used in <code>+page.js</code> to dynamically import the post\u2019s markdown file as a Svelte component. After that, both the post metadata and its Svelte component are passed into <code>+page.svelte</code> to be rendered.</p>
<p>There are some basic meta tags setup for SEO and social media sharing, including a generated open graph image (courtesy of <a href="${"https://og-image.vercel.app"}" rel="${"nofollow"}">og-image.vercel.app</a>).</p>
<p><img src="${"https://og-image.vercel.app/**Getting%20Started**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg"}" alt="${"open-graph"}"></p>
<p>Feel free to customize this page as you see fit. I included some nice-to-haves like a table of contents and links to the next and/or previous posts.</p>
<h2 id="${"getting-posts"}"><a href="${"#getting-posts"}">Getting Posts</a></h2>
<p>Your posts can be retrieved via <code>import { posts } from &#39;$lib/data/posts&#39;</code>. They are automatically sorted from newest to oldest and contain relevant metadata for each post.</p>
<p><code>$lib/data/posts</code> should only be imported in <code>*.server.js</code> files. It uses some APIs that only work server-side, so it will throw an error if you try to load it on client-side code. (It also is the data source for every post on your website, so you wouldn\u2019t want that being bundled with your client code anyways).</p>
<p>If you wish to render an entire post, you will need to import the <code>.md</code> file directly (as done in <code>src/routes/posts/[slug]/+page.js</code>).</p>
<h2 id="${"theme"}"><a href="${"#theme"}">Theme</a></h2>
<p>Most of the site is themed using Tailwind\u2019s <a href="${"https://tailwindcss.com/docs/typography-plugin"}" rel="${"nofollow"}">typography plugin</a>. You can the configuration for it in <code>tailwind.config.cjs</code>. As mentioned at the beginning of this post, the overall theme is taken from <a href="${"https://spotlight.tailwindui.com/"}" rel="${"nofollow"}">Tailwind\u2019s \u201CSpotlight\u201D</a>.</p>
<p>If you wish to change the theme of your code blocks, you can edit the <code>src/prism.css</code> file. Prism themes can be <a href="${"https://github.com/PrismJS/prism-themes/tree/master/themes"}" rel="${"nofollow"}">found here</a>.</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">helloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token string">'Hello World'</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"mdsvex-plugins"}"><a href="${"#mdsvex-plugins"}">Mdsvex Plugins</a></h2>
<p>I\u2019ve added some mdsvex plugins to support a few extra things (check out the <code>mdsvex.config.js</code> file).</p>
<h3 id="${"videos"}"><a href="${"#videos"}">Videos</a></h3>
<p>.mp4 and .webm videos are supported just like images.</p>
<pre class="${"language-md"}"><!-- HTML_TAG_START -->${`<code class="language-md"><span class="token url"><span class="token operator">!</span>[<span class="token content">my video</span>](<span class="token url">/videos/my-cool-video.mp4</span>)</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"relative-urls-for-images-and-videos"}"><a href="${"#relative-urls-for-images-and-videos"}">Relative URLs for Images and Videos</a></h3>
<p>The <a href="${"https://github.com/mattjennings/mdsvex-relative-images"}" rel="${"nofollow"}">mdsvex-relative-images</a> plugin allows loading images or videos with a relative path. This is particularly nice for grouping images with the post under the same folder.</p>
<pre class="${"language-md"}"><!-- HTML_TAG_START -->${`<code class="language-md"><span class="token url"><span class="token operator">!</span>[<span class="token content">penguins</span>](<span class="token url">./penguins.mp4</span>)</span></code>`}<!-- HTML_TAG_END --></pre>
<p><video${add_attribute("src", PenguinsMp4, 0)} autoplay muted playsinline loop title="${"penguins"}"></video></p>
<h2 id="${"deploying"}"><a href="${"#deploying"}">Deploying</a></h2>
<p>You can deploy this like you would any other SvelteKit project. It uses the auto adapter by default.</p>
<p><a href="${"https://kit.svelte.dev/docs/adapters"}" rel="${"nofollow"}">See the SvelteKit docs on adapters</a></p>
<h2 id="${"thats-it"}"><a href="${"#thats-it"}">That\u2019s it!</a></h2>
<p>I think I\u2019ve covered most of the important stuff. If you have any questions, suggestions, or problems feel free to <a href="${"https://github.com/mattjennings/sveltekit-blog-template/issues"}" rel="${"nofollow"}">open an issue</a>.</p>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Getting_started,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};

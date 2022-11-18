import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-d82e1aac.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-d82e1aac.js","_app/immutable/chunks/index-e013d4b4.js","_app/immutable/chunks/PostsList-44c1eef5.js","_app/immutable/chunks/index-64e2830b.js","_app/immutable/chunks/SocialLinks-c9cc25d8.js","_app/immutable/chunks/info-f6f5ade0.js"];
export const stylesheets = ["_app/immutable/assets/PostsList-988031de.css"];

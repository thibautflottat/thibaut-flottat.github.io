import{S as Z,i as ee,s as te,a as D,k as v,q,w as B,Q as se,h as f,c as V,l as $,m as k,r as H,x as C,n as u,b as z,G as p,y as F,t as y,d as T,f as P,z as G,g as U,B as W}from"../../../../chunks/index-e013d4b4.js";import{n as X}from"../../../../chunks/info-f6f5ade0.js";import{A as ae}from"../../../../chunks/ArrowLeftIcon-605e7b22.js";import{P as le,A as re}from"../../../../chunks/PostsList-44c1eef5.js";function ne(c){let e;return{c(){e=v("div")},l(a){e=$(a,"DIV",{}),k(e).forEach(f)},m(a,s){z(a,e,s)},p:W,i:W,o:W,d(a){a&&f(e)}}}function oe(c){let e,a,s,n,l;return a=new ae({props:{class:"w-4 h-4"}}),{c(){e=v("a"),B(a.$$.fragment),s=q(`
        Previous`),this.h()},l(t){e=$(t,"A",{href:!0,"data-sveltekit-prefetch":!0,class:!0});var i=k(e);C(a.$$.fragment,i),s=H(i,`
        Previous`),i.forEach(f),this.h()},h(){u(e,"href",n=`/posts/page/${c[0].page-1}`),u(e,"data-sveltekit-prefetch",""),u(e,"class","svelte-9puhmz")},m(t,i){z(t,e,i),F(a,e,null),p(e,s),l=!0},p(t,i){(!l||i&1&&n!==(n=`/posts/page/${t[0].page-1}`))&&u(e,"href",n)},i(t){l||(P(a.$$.fragment,t),l=!0)},o(t){y(a.$$.fragment,t),l=!1},d(t){t&&f(e),G(a)}}}function Y(c){let e,a,s,n,l;return s=new re({props:{class:"w-4 h-4"}}),{c(){e=v("a"),a=q(`Next
        `),B(s.$$.fragment),this.h()},l(t){e=$(t,"A",{href:!0,"data-sveltekit-prefetch":!0,class:!0});var i=k(e);a=H(i,`Next
        `),C(s.$$.fragment,i),i.forEach(f),this.h()},h(){u(e,"href",n=`/posts/page/${c[0].page+1}`),u(e,"data-sveltekit-prefetch",""),u(e,"class","svelte-9puhmz")},m(t,i){z(t,e,i),p(e,a),F(s,e,null),l=!0},p(t,i){(!l||i&1&&n!==(n=`/posts/page/${t[0].page+1}`))&&u(e,"href",n)},i(t){l||(P(s.$$.fragment,t),l=!0)},o(t){y(s.$$.fragment,t),l=!1},d(t){t&&f(e),G(s)}}}function ie(c){let e,a,s,n,l,t,i,A,L,R,x,w,S,d,h,m,N,I;document.title=e=X+" | Posts",w=new le({props:{posts:c[0].posts}});const Q=[oe,ne],b=[];function J(r,_){return r[2]?1:0}h=J(c),m=b[h]=Q[h](c);let o=c[1]&&Y(c);return{c(){a=D(),s=v("div"),n=v("header"),l=v("h1"),t=q("Writing on tech, music, and whatever else I feel like"),i=D(),A=v("p"),L=q("All of my written content collected in one place"),R=D(),x=v("div"),B(w.$$.fragment),S=D(),d=v("div"),m.c(),N=D(),o&&o.c(),this.h()},l(r){se("svelte-1j9di4b",document.head).forEach(f),a=V(r),s=$(r,"DIV",{class:!0});var g=k(s);n=$(g,"HEADER",{class:!0});var E=k(n);l=$(E,"H1",{class:!0});var K=k(l);t=H(K,"Writing on tech, music, and whatever else I feel like"),K.forEach(f),i=V(E),A=$(E,"P",{class:!0});var M=k(A);L=H(M,"All of my written content collected in one place"),M.forEach(f),E.forEach(f),R=V(g),x=$(g,"DIV",{class:!0});var O=k(x);C(w.$$.fragment,O),O.forEach(f),S=V(g),d=$(g,"DIV",{class:!0});var j=k(d);m.l(j),N=V(j),o&&o.l(j),j.forEach(f),g.forEach(f),this.h()},h(){u(l,"class","text-4xl font-bold tracking-tight sm:text-5xl"),u(A,"class","mt-6"),u(n,"class","pt-4"),u(x,"class","mt-16 sm:mt-20"),u(d,"class","flex items-center justify-between pt-16 pb-8"),u(s,"class","flex flex-col flex-grow")},m(r,_){z(r,a,_),z(r,s,_),p(s,n),p(n,l),p(l,t),p(n,i),p(n,A),p(A,L),p(s,R),p(s,x),F(w,x,null),p(s,S),p(s,d),b[h].m(d,null),p(d,N),o&&o.m(d,null),I=!0},p(r,[_]){(!I||_&0)&&e!==(e=X+" | Posts")&&(document.title=e);const g={};_&1&&(g.posts=r[0].posts),w.$set(g);let E=h;h=J(r),h===E?b[h].p(r,_):(U(),y(b[E],1,1,()=>{b[E]=null}),T(),m=b[h],m?m.p(r,_):(m=b[h]=Q[h](r),m.c()),P(m,1),m.m(d,N)),r[1]?o?(o.p(r,_),_&2&&P(o,1)):(o=Y(r),o.c(),P(o,1),o.m(d,null)):o&&(U(),y(o,1,1,()=>{o=null}),T())},i(r){I||(P(w.$$.fragment,r),P(m),P(o),I=!0)},o(r){y(w.$$.fragment,r),y(m),y(o),I=!1},d(r){r&&f(a),r&&f(s),G(w),b[h].d(),o&&o.d()}}}function ce(c,e,a){let s,n,{data:l}=e;return c.$$set=t=>{"data"in t&&a(0,l=t.data)},c.$$.update=()=>{var t;c.$$.dirty&1&&a(2,s=l.page===1),c.$$.dirty&1&&a(1,n=(t=l.posts[l.posts.length-1])==null?void 0:t.previous)},[l,n,s]}class me extends Z{constructor(e){super(),ee(this,e,ce,ie,te,{data:0})}}export{me as default};

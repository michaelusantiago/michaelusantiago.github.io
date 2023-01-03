(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function p(){}function F(e){return e()}function q(){return Object.create(null)}function E(e){e.forEach(F)}function G(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let v;function Q(e,t){return v||(v=document.createElement("a")),v.href=t,e===v.href}function R(e){return Object.keys(e).length===0}function i(e,t){e.appendChild(t)}function U(e,t,n){e.insertBefore(t,n||null)}function K(e){e.parentNode&&e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function V(e){return document.createTextNode(e)}function d(){return V(" ")}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function W(e){return Array.from(e.childNodes)}let M;function $(e){M=e}const b=[],P=[],A=[],B=[],X=Promise.resolve();let O=!1;function Y(){O||(O=!0,X.then(z))}function j(e){A.push(e)}const I=new Set;let w=0;function z(){const e=M;do{for(;w<b.length;){const t=b[w];w++,$(t),Z(t.$$)}for($(null),b.length=0,w=0;P.length;)P.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];I.has(n)||(I.add(n),n())}A.length=0}while(b.length);for(;B.length;)B.pop()();O=!1,I.clear(),$(e)}function Z(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const ee=new Set;function te(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function ne(e,t,n,o){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),o||j(()=>{const s=e.$$.on_mount.map(F).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...s):E(s),e.$$.on_mount=[]}),c.forEach(j)}function re(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(b.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(e,t,n,o,r,c,s,x=[-1]){const u=M;$(e);const l=e.$$={fragment:null,ctx:[],props:c,update:p,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:q(),dirty:x,skip_bound:!1,root:t.target||u.$$.root};s&&s(l.root);let _=!1;if(l.ctx=n?n(e,t.props||{},(a,m,...g)=>{const y=g.length?g[0]:m;return l.ctx&&r(l.ctx[a],l.ctx[a]=y)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](y),_&&oe(e,a)),m}):[],l.update(),_=!0,E(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const a=W(t.target);l.fragment&&l.fragment.l(a),a.forEach(K)}else l.fragment&&l.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor,t.customElement),z()}$(u)}class ce{$destroy(){re(this,1),this.$destroy=p}$on(t,n){if(!G(n))return p;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!R(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ie="/assets/me-55b5f3cc.jpg";function se(e){let t,n,o,r,c,s,x,u,l,_,a,m,g,y,S,L,C,T,H,k;return{c(){t=f("main"),n=f("div"),o=f("img"),c=d(),s=f("h1"),s.textContent="Michael Santiago",x=d(),u=f("h2"),u.textContent="Software Architect",l=d(),_=f("br"),a=d(),m=f("section"),m.innerHTML=`<p>It&#39;s just here to remind me that I need to deploy the official one in
      <a href="https://michaelsantiago.ca">https://michaelsantiago.ca</a>.</p> 
    <br/> 
    <h4>I alone is waiting for that moment...</h4>`,g=d(),y=f("br"),S=d(),L=f("h3"),L.innerHTML='💪 I&#39;m the <a href="https://neontech.vercel.app" target="_blank" rel="noreferrer">NeonTech</a>',C=d(),T=f("br"),H=d(),k=f("footer"),k.innerHTML=`<hr class="svelte-1pk7o66"/> 
    <p class="svelte-1pk7o66">MICHAEL SANTIAGO © 2023</p>`,h(o,"class","my-image"),h(o,"alt","it's just me"),Q(o.src,r=ie)||h(o,"src",r),h(o,"height","250"),h(n,"class","image-container svelte-1pk7o66"),h(s,"class","my-name svelte-1pk7o66"),h(k,"class","svelte-1pk7o66")},m(N,D){U(N,t,D),i(t,n),i(n,o),i(t,c),i(t,s),i(t,x),i(t,u),i(t,l),i(t,_),i(t,a),i(t,m),i(t,g),i(t,y),i(t,S),i(t,L),i(t,C),i(t,T),i(t,H),i(t,k)},p,i:p,o:p,d(N){N&&K(t)}}}class ae extends ce{constructor(t){super(),le(this,t,null,se,J,{})}}new ae({target:document.getElementById("app")});

var E=Object.defineProperty;var S=(t,e,r)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var y=(t,e,r)=>S(t,typeof e!="symbol"?e+"":e,r);import{a as g,S as w,i as f}from"./assets/vendor-tK733MBj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const i={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-load-more")},x="?key=49168840-e3c83c6477977e837e7a2b39b";g.defaults.baseURL="https://pixabay.com/api/";async function m(t,e=1){const r={q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e},{data:o}=await g.get(`/${x}`,{params:r});return o}function b(t){return t.map(({webformatURL:e,largeImageURL:r,tags:o,likes:s,views:a,comments:n,downloads:v})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${r}">
            <img class="gallery-img" src="${e}" alt="${o}" loading="lazy" />
            <ul class="gallery-list">
                <li class="gallery-list-info">
                    <p class="gallery-info-name">Likes</p>
                    <p class="gallery-info-value">${s}</p>
                </li>
                <li class="gallery-list-info">
                    <p class="gallery-info-name">Views</p>
                    <p class="gallery-info-value">${a}</p>
                </li>
                <li class="gallery-list-info">
                    <p class="gallery-info-name">Comments</p>
                    <p class="gallery-info-value">${n}</p>
                </li>
                <li class="gallery-list-info">
                    <p class="gallery-info-name">Downloads</p>
                    <p class="gallery-info-value">${v}</p>
                </li>
            </ul>
        </a>
    </li>
        `).join("")}let c=1,d="";const L=new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});async function C(t){t.preventDefault();const e=t.currentTarget;if(d=e.elements.user_query.value.trim(),d===""){f.warning({title:"Caution",message:"Please enter a query!",position:"topRight"});return}i.loaderEl.classList.add("active"),c=1;try{const r=await m(d,c);if(i.loaderEl.classList.remove("active"),!r.hits.length){i.galleryEl.innerHTML="",f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.hide();return}i.galleryEl.innerHTML=b(r.hits),L.refresh(),r.hits.length<r.totalHits?(l.show(),l.button.addEventListener("click",p)):l.hide()}catch(r){console.log(r)}finally{e.reset()}}async function p(){c+=1,l.disable();try{const t=await m(d,c);if(!t.hits.length){f.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l.hide(),l.button.removeEventListener("click",p);return}i.galleryEl.insertAdjacentHTML("beforeend",b(t.hits)),L.refresh(),c*15>=t.totalHits?(f.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l.hide()):l.enable()}catch(t){console.log(t),l.hide()}}l.button.addEventListener("click",p);const u=class u{constructor(e){this.button=e,this.prevText=""}disable(){this.button.disable=!0,this.prevText=this.button.textContent,this.button.textContent="Loading..."}enable(){this.button.disable=!1,this.button.textContent=this.prevText}hide(){this.button.classList.add(u.HIDDEN_CLASS)}show(){this.button.classList.remove(u.HIDDEN_CLASS)}};y(u,"HIDDEN_CLASS","is-hidden");let h=u;i.formEl.addEventListener("submit",C);const l=new h(i.btnLoadMore);
//# sourceMappingURL=index.js.map

import{a as c,S as f,i as n}from"./assets/vendor-tK733MBj.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const s={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-load-more-btn")},d="?key=49168840-e3c83c6477977e837e7a2b39b";c.defaults.baseURL="https://pixabay.com/api/";async function p(a){const l={q:a.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15},{data:o}=await c.get(`/${d}`,{params:l});return o}function y(a){return a.map(({webformatURL:l,largeImageURL:o,tags:t,likes:e,views:r,comments:i,downloads:u})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${o}">
            <img class="gallery-img" src="${l}" alt="${t}" loading="lazy" />
            <ul class="gallery-list">
                <li class="gallery-list-info">
                    <p class="gallery-info-name">Likes</p>
                    <p class="gallery-info-value">${e}</p>
                </li>
                <li class="gallery-list-info">
                    <p class="gallery-info-name">Views</p>
                    <p class="gallery-info-value">${r}</p>
                </li>
                <li class="gallery-list-info">
                    <p class="gallery-info-name">Comments</p>
                    <p class="gallery-info-value">${i}</p>
                </li>
                <li class="gallery-list-info">
                    <p class="gallery-info-name">Downloads</p>
                    <p class="gallery-info-value">${u}</p>
                </li>
            </ul>
        </a>
    </li>
        `).join("")}function g(a){console.log("click")}const m=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(a){a.preventDefault();const l=a.currentTarget,o=l.elements.user_query.value.trim();if(o===""){n.warning({title:"Caution",message:"Please enter a query!",position:"topRight"});return}return s.loaderEl.classList.add("active"),p(o).then(t=>{if(s.loaderEl.classList.remove("active"),!t.total)return s.galleryEl.innerHTML="",n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[];s.galleryEl.innerHTML=y(t.hits),m.refresh()}).catch(t=>{console.log(t)}).finally(()=>{l.reset(),s.btnLoadMore.classList.add("show")})}s.formEl.addEventListener("submit",h);s.btnLoadMore.addEventListener("click",g);
//# sourceMappingURL=index.js.map

import{S as u,i as n}from"./assets/vendor-De63neY_.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const i={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")},f="https://pixabay.com/api/",p="?key=49168840-e3c83c6477977e837e7a2b39b";function y(o){const l=new URLSearchParams({q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}${p}&${l}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function g(o){return o.map(({webformatURL:l,largeImageURL:t,tags:a,likes:e,views:r,comments:s,downloads:c})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${t}">
            <img class="gallery-img" src="${l}" alt="${a}" loading="lazy" />
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
                    <p class="gallery-info-value">${s}</p>
                </li>
                <li class="gallery-list-info">
                    <p class="gallery-info-name">Downloads</p>
                    <p class="gallery-info-value">${c}</p>
                </li>
            </ul>
        </a>
    </li>
        `).join("")}const m=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function d(o){o.preventDefault();const l=o.currentTarget,t=l.elements.user_query.value.trim();if(t===""){n.warning({title:"Caution",message:"Please enter a query!",position:"topRight"});return}return i.loaderEl.classList.add("active"),y(t).then(a=>{if(i.loaderEl.classList.remove("active"),!a.total)return i.galleryEl.innerHTML="",n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[];i.galleryEl.innerHTML=g(a.hits),m.refresh()}).catch(a=>{console.log(a)}).finally(()=>{l.reset()})}i.formEl.addEventListener("submit",d);
//# sourceMappingURL=index.js.map

import{S as f,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/";function d(i){const o="46506725-7d59e0c0fb37faa107be781d3",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>r.hits)}function y(i){return i.map(o=>{const{webformatURL:s,largeImageURL:r,tags:e,likes:t,views:n,comments:u,downloads:m}=o;return`
            <li class="gallery-item">
                <a class="gallery-link" href="${r}">
                    <img class="gallery-image" src="${s}" data-source="${r}" alt="${e}" loading="lazy" />
                </a>
                <div class="info">
                    <p class="info-item">
                        <b>Likes</b>
                        ${t}
                    </p>
                    <p class="info-item">
                        <b>Views</b>
                        ${n}
                    </p>
                    <p class="info-item">
                        <b>Comments</b>
                        ${u}
                    </p>
                    <p class="info-item">
                        <b>Downloads</b>
                        ${m}
                    </p>
                </div>
            </li>
            `}).join("")}const h=new f(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");g.addEventListener("submit",i=>{i.preventDefault();const o=document.querySelector("#search-box").value.trim();if(o===""){a.error({message:"Please enter a search query!",position:"topRight",timeout:3e3});return}c.style.display="block",d(o).then(s=>{if(l.innerHTML="",s.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}l.innerHTML=y(s),h.refresh()}).catch(()=>{a.error({message:"Sorry, something went wrong. Please try again!",position:"topRight",timeout:3e3})}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=index.js.map

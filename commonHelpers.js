import{a as b,i as m,S as L}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function p(o,t){const i="42276910-5dbc0617c597b0712888fd711",r="https://pixabay.com/api/",n={key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:10};return(await b.get(r,{params:n})).data}function S(o){const{comments:t,downloads:i,views:s,likes:e,webformatURL:r,tags:n,largeImageURL:u}=o;return`<li class="gallery-item">
               <a class="gallery-link" href="${r}">
              <img class="gallery-image" src="${u}" alt="${n}" />
              </a>
              <p><b>Likes: </b>${e}</p>
              <p><b>Views: </b>${s}</p>
              <p><b>Comments: </b>${t}</p>
              <p><b>Downloads: </b>${i}</p>
          </li>`}function w(o){return o.map(S).join("")}const a={formElem:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let l,c,d;a.formElem.addEventListener("submit",E);a.loadMoreBtn.addEventListener("click",M);async function E(o){if(o.preventDefault(),l=o.target.elements.input.value.trim(),!l){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c=1,h();try{const t=await p(l,c);if(t.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}d=Math.ceil(t.total/10),a.gallery.innerHTML="",f(t.hits)}catch(t){showError(t),d=0,a.gallery.innerHTML=""}y(),g(),o.target.reset()}async function M(){c+=1,h();const o=await p(l,c);f(o.hits),y(),g(),scrollBy({behavior:"smooth",top:"500"})}function f(o){const t=w(o);a.gallery.insertAdjacentHTML("beforeend",t),new L(".gallery a",B).refresh()}function P(){a.loadMoreBtn.classList.remove("hidden")}function v(){a.loadMoreBtn.classList.add("hidden")}function g(){c>=d?v():P()}function h(){a.loader.classList.remove("hidden")}function y(){a.loader.classList.add("hidden")}const B={captions:!0,captionType:"attr",captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250};
//# sourceMappingURL=commonHelpers.js.map

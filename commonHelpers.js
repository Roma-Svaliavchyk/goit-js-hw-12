import{a as b,i as m,S}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function p(r,o){const i="42276910-5dbc0617c597b0712888fd711",t="https://pixabay.com/api/",a={key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:10};return(await b.get(t,{params:a})).data}function w(r){const{comments:o,downloads:i,views:s,likes:e,webformatURL:t,tags:a,largeImageURL:u}=r;return`<li class="gallery-item">
               <a class="gallery-link" href="${t}">
              <img class="gallery-image" src="${u}" alt="${a}" />
              </a>
              <p><b>Likes: </b>${e}</p>
              <p><b>Views: </b>${s}</p>
              <p><b>Comments: </b>${o}</p>
              <p><b>Downloads: </b>${i}</p>
          </li>`}function E(r){return r.map(w).join("")}const n={formElem:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let c,l,M=4;n.formElem.addEventListener("submit",P);n.loadMoreBtn.addEventListener("click",v);async function P(r){r.preventDefault(),c=r.target.elements.input.value.trim(),l=1,h();try{const o=await p(c,l);if(o.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!2",position:"topRight"});return}n.gallery.innerHTML="",f(o.hits)}catch(o){showError(o),n.gallery.innerHTML=""}if(L(),y(),r.target.reset(),!c){m.error({message:"Sorry, there are no images matching your search query. Please try again!1",position:"topRight"}),n.gallery.innerHTML="",g();return}}async function v(){l+=1,h();const r=await p(c,l);f(r.hits),L(),y(),scrollBy({behavior:"smooth",top:"500"})}let d=null;function f(r){const o=E(r);n.gallery.insertAdjacentHTML("beforeend",o),d?d.refresh():d=new S(".gallery a",T)}function B(){n.loadMoreBtn.classList.remove("hidden")}function g(){n.loadMoreBtn.classList.add("hidden")}function y(){l>=M?g():B()}function h(){n.loader.classList.remove("hidden")}function L(){n.loader.classList.add("hidden")}const T={captions:!0,captionType:"attr",captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250};
//# sourceMappingURL=commonHelpers.js.map
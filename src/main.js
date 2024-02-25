import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchArticles } from './js/pixabay-api.js';
import { hitsTemplate } from './js/render-functions.js';

const refs = {
  formElem: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

let query;
let page;
let maxPage = 4;

refs.formElem.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(e) {
  e.preventDefault();

  query = e.target.elements.input.value.trim();

 

  page = 1;
  showLoader();

  try {
    const data = await fetchArticles(query, page);
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!2',
        position: 'topRight',
      });
      
      
      return;
    }
    //maxPage = Math.ceil(data.total / 10);

    refs.gallery.innerHTML = '';
    renderMarkups(data.hits);
  } catch (err) {
    showError(err);
    //maxPage = 0;
    refs.gallery.innerHTML = '';
  }

  hideLoader();
  checkBtnVisibleStatus();
  
  e.target.reset();

  if (!query) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!1',
      position: 'topRight',
    });
    
    refs.gallery.innerHTML = '';
    hideLoadBtn()
    return;
  }
}


async function onLoadMoreClick() {
  page += 1;
  showLoader();
  const data = await fetchArticles(query, page);

  renderMarkups(data.hits);
  hideLoader();
  checkBtnVisibleStatus();

  scrollBy({
    behavior: 'smooth',
    top: '500',
  });

  
}

// function renderMarkups(hits) {
//   const markup = hitsTemplate(hits);

//   refs.gallery.insertAdjacentHTML('beforeend', markup);
//   lightbox = new SimpleLightbox('.gallery a', options);
 
//   lightbox.refresh();
// }

let lightbox = null;
function renderMarkups(hits) {
  const markup = hitsTemplate(hits);

  refs.gallery.insertAdjacentHTML('beforeend', markup);
  
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', options);
  } else {
    lightbox.refresh();
  }
}

function showLoadBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}
function hideLoadBtn() {
  refs.loadMoreBtn.classList.add('hidden');
}

function checkBtnVisibleStatus() {
  if (page >= maxPage) {
    hideLoadBtn();
  } else {
    showLoadBtn();
  }
}

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

const options = {
  captions: true,
  captionType: 'attr',
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};
function hitTemplate(hit) {
    const {
      comments,
      downloads,
      views,
      likes,
      webformatURL,
      tags,
      largeImageURL,
    } = hit;
  
    return `<li class="gallery-item">
               <a class="gallery-link" href="${webformatURL}">
              <img class="gallery-image" src="${largeImageURL}" alt="${tags}" />
              </a>
              <p><b>Likes: </b>${likes}</p>
              <p><b>Views: </b>${views}</p>
              <p><b>Comments: </b>${comments}</p>
              <p><b>Downloads: </b>${downloads}</p>
          </li>`;
  }
  
  export function hitsTemplate(hits) {
    return hits.map(hitTemplate).join('');
  }
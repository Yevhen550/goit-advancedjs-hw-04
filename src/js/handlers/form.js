import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import { fetchFotoCard } from '../pixabay-api';
import { refs } from '../utils/constants';
import { createMarkupGalleryCards } from '../render-functions';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function handlerSearch(ev) {
  ev.preventDefault();

  const form = ev.currentTarget;
  const userQuery = form.elements.user_query.value.trim();

  if (userQuery === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a query!',
      position: 'topRight',
    });

    return;
  }
  refs.loaderEl.classList.add('active');

  return fetchFotoCard(userQuery)
    .then(data => {
      refs.loaderEl.classList.remove('active');
      if (!data.total) {
        refs.galleryEl.innerHTML = '';

        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return [];
      }

      refs.galleryEl.innerHTML = createMarkupGalleryCards(data.hits);
      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      form.reset();
    });
}

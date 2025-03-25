import { refs } from './js/utils/constants';
import { handlerSearch } from './js/handlers/form';
import { handlerLoadMoreBtn } from './js/handlers/load_more';

refs.formEl.addEventListener('submit', handlerSearch);
refs.btnLoadMore.addEventListener('click', handlerLoadMoreBtn);


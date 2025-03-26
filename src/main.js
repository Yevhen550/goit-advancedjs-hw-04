import { refs } from './js/utils/constants';
import { handlerSearch } from './js/handlers/form';
import { LoadMoreButton } from './js/utils/buttonService';

refs.formEl.addEventListener('submit', handlerSearch);

export const loadMoreButton = new LoadMoreButton(refs.btnLoadMore);

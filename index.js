import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";
import SlimSelect from 'slim-select'
import { selector, divCatInfo, loader, error } from './js/refs'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { createMarkupSelect, createMarkup} from './js/markup'

selector.addEventListener("change", onChangeSelect);
fetchBreeds()
  .then(obj => {
      onLoad();
      return (selector.innerHTML = createMarkupSelect(obj.data));
    })
    .then(() => slimSelect())
    .catch(onError);

function onChangeSelect(e) {
  const breedId = e.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(obj => {
      onLoad();
      return (divCatInfo.innerHTML = createMarkup(obj.data));
    })
    .then(() => success())
    .catch(onError);
}

function success() {
  Notify.success('Search successful!', '');
}

function onError() {
  Report.failure(error.textContent, '');
}

function onLoad() {
  selector.hidden = false;
  loader.classList.remove('loader');
}

function slimSelect() {
  new SlimSelect({
    select: selector,
  });
}
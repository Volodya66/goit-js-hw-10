import Choices from 'choices.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { selector, divCatInfo, loader, error } from './js/refs'
import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";
import { createMarkupSelect, createMarkup} from './js/markup'

selector.addEventListener("change", onChangeSelect);

fetchBreeds()
  .then(obj => {
    selector.hidden = false;
    loader.hidden = true;
    selector.innerHTML = createMarkupSelect(obj.data);
    choices();
    })
  .catch(onError);

function onChangeSelect(e) {
  const breedId = e.currentTarget.value;

  loader.hidden = false;
  divCatInfo.hidden = true;

  fetchCatByBreed(breedId)
  .then(obj => {
    divCatInfo.hidden = false;
    loader.hidden = true;
    divCatInfo.innerHTML = createMarkup(obj.data);
    success()
  })
  .catch(onError);
}

function success() {
  Notify.success('Search successful!', {
        position: 'center-top',
        timeout: 1000,
    });
}

function onError() {
  Report.failure(error.textContent, '');
}

function choices() {
  new Choices(selector, {
    allowHTML: true
  });
}
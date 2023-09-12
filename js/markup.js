function createMarkupSelect(data) {
  return data
    .map(({ name, id }) =>
    `<option value="${id}">${name}</option>`
  ).join("");
}

function createMarkup(data) {
  const { url, breeds: [{ name, description, temperament }] } = data[0];
  return `<div class="cat-box">
        <img src="${url}" alt="${name}" width="400"/>
      </div>
      <div class="cat-container">
        <h2>${name}</h2>
        <p>${description}</p>
        <p>
          <span class="cat-text">Temperament: </span>
          ${temperament}
        </p>
      </div>`;
}
export { createMarkupSelect, createMarkup};
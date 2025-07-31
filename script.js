const item = document.getElementById('textItem');
const addProduct = document.getElementById('buttonAdd');
const error = document.querySelector('.errorList');
const closeError = document.querySelector('.closeError');
const list = document.getElementById('list');


addProduct.addEventListener('click', () => {
  const value = item.value.trim();

  if (value === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <label>
      <input type="checkbox" />
      <span></span>
      ${value}
    </label>
    <img class="deleted" src="Assets/Icons/deleteItem.svg" alt="Remover item" />
  `;

  list.insertBefore(li, list.firstChild);
  item.value = '';
});

list.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleted')) {
    const li = event.target.closest('li');
    const checkbox = li.querySelector('input[type="checkbox"]');

    if (checkbox && checkbox.checked) {
      li.remove();
      error.classList.add("show-error");
    } else {
      alert('Selecione um item para remover');
    }
  }
});

closeError.addEventListener('click', (event) => {
  error.classList.remove("show-error");
});
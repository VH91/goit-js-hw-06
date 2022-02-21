let inputEl = document.querySelector('#validation-input');

let inputLength = Number(inputEl.dataset.length);

const input = document.querySelector('input');
inputEl.addEventListener('change', event => {
  const valueEl = event.target.value;

  if (valueEl.length === inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
const baseUrl = 'https://60c9e9df772a760017204c05.mockapi.io/api/v1/form';

const buttonElem = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');

const getFormData = () => Object.fromEntries(new FormData(formElem));

const validateHandler = () => {
  buttonElem.disabled = !formElem.reportValidity();
};

// get data for server
// input:event
// output: undeffined

const submitHandler = event => {
  event.preventDefault();

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(getFormData()),
  })
    // input: callback
    // output: promise
    // callback inp/out
    // response obj
    // any

    .then(res => res.json())
    .then(resBody => {
      alert(JSON.stringify(resBody));
      formElem.reset();
    })
    .catch(() => {
      errorElem.textContent = 'Failed to create user';
    });
};

formElem.addEventListener('input', validateHandler);
formElem.addEventListener('submit', submitHandler);

// input: event
// output: undefined

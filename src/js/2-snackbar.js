import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const promiseForm = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const fulfilledRadio = document.querySelector('input[value="fulfilled"]');
const rejectedRadio = document.querySelector('input[value="rejected"]');

const rejectedTrigger = () => {
  return Promise.reject();
};

const fulfilledTrigger = () => {
  return Promise.resolve();
};

const promiseDelay = (delay, promiseFunc) => {
  const timeoutId = setTimeout(() => {
    if (promiseFunc === 'fulfilled') {
      fulfilledTrigger()
        .then(() => {
          iziToast.success({
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            messageColor: '#ffffff',
            backgroundColor: 'green',
            timeout: 5000,
            close: false,
          });
          console.log('Fulfilled!!!');
        })
        .finally(() => clearTimeout(timeoutId));
    }
    if (promiseFunc === 'rejected') {
      rejectedTrigger()
        .catch(() => {
          iziToast.error({
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight',
            messageColor: '#ffffff',
            backgroundColor: '#FF2E2E',
            timeout: 5000,
            close: false,
          });
          console.log('rejected!!!!');
        })
        .finally(() => clearTimeout(timeoutId));
    }
  }, delay);
};

const handleSubmit = event => {
  event.preventDefault();
  const form = event.target;

  if (fulfilledRadio.checked) {
    promiseDelay(Number(delay.value), 'fulfilled');
  }
  if (rejectedRadio.checked) {
    promiseDelay(Number(delay.value), 'rejected');
  }

  form.reset();
};

promiseForm.addEventListener('submit', handleSubmit);

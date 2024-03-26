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
    if (promiseFunc === 'rejeckted') {
      fulfilledTrigger()
        .then(() => {
          iziToast.success({
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            timeout: 5000,
          });
          console.log('Fulfilled!!!');
        })
        .finally(() => clearTimeout(timeoutId));
    }
    if (promiseFunc === 'fulfilled') {
      rejectedTrigger()
        .catch(() => {
          iziToast.error({
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight',
            timeout: 5000,
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
  console.log(Number(delay.value));

  if (rejectedRadio.checked) {
    promiseDelay(Number(delay.value), 'fulfilled');
  }
  if (fulfilledRadio.checked) {
    promiseDelay(Number(delay.value), 'rejeckted');
  }

  form.reset();
};

promiseForm.addEventListener('submit', handleSubmit);

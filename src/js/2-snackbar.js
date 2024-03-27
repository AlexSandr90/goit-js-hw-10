import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const promiseForm = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const fulfilledRadio = document.querySelector('input[value="fulfilled"]');
const rejectedRadio = document.querySelector('input[value="rejected"]');

const toastSettings = {
  position: 'topRight',
  messageColor: '#ffffff',
  timeout: 5000,
  close: false,
  radius: 15,
};

const promiseDelay = (delay, promiseFunc) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promiseFunc === 'fulfilled' ? resolve() : reject();
    }, delay);
  });
};

const handlePromise = (delay, promiseFunc) => {
  promiseDelay(delay, promiseFunc)
    .then(() => {
      iziToast.show({
        ...toastSettings,
        message: `✅ Fulfilled promise in ${delay}ms`,
        backgroundColor: 'green',
      });
    })
    .catch(() => {
      iziToast.show({
        ...toastSettings,
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: '#FF2E2E',
      });
    });
};

const handleSubmit = event => {
  event.preventDefault();
  const form = event.target;

  if (fulfilledRadio.checked) {
    handlePromise(Number(delay.value), 'fulfilled');
  }
  if (rejectedRadio.checked) {
    handlePromise(Number(delay.value), 'rejected');
  }

  form.reset();
};

promiseForm.addEventListener('submit', handleSubmit);

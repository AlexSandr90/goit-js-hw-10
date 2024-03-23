import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('button[data-start]');
const daysField = document.querySelector('span[data-days]');
const hoursField = document.querySelector('span[data-hours]');
const minutesField = document.querySelector('span[data-minutes]');
const secondsField = document.querySelector('span[data-seconds]');
const dateNow = new Date();

let selectedDate;

const updateTimerDisplay = ({ days, hours, minutes, seconds }) => {
  daysField.textContent = String(days).padStart(2, '0');
  hoursField.textContent = String(hours).padStart(2, '0');
  minutesField.textContent = String(minutes).padStart(2, '0');
  secondsField.textContent = String(seconds).padStart(2, '0');
};

const startTimer = () => {
  const intervalId = setInterval(() => {
    const date = new Date();
    let difTime = selectedDate - date.getTime();
    const { days, hours, minutes, seconds } = convertMs(difTime);

    updateTimerDisplay({ days, hours, minutes, seconds });

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};

startButton.addEventListener('click', () => {
  startTimer();
  startButton.disabled = true;
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    let difDate = selectedDate - dateNow.getTime();
    if (difDate <= 0) {
      alert('Please choose a date in the future');
      return;
    }
  },
};

flatpickr('input#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

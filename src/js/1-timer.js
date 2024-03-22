import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('button[data-start]')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minDate: 'today',
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('input#datetime-picker', options);

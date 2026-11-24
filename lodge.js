const form = document.querySelector('#booking-form');
const result = document.querySelector('#form-result');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const arrival = new Date(`${data.get('arrival')}T12:00:00`);
  const departure = new Date(`${data.get('departure')}T12:00:00`);
  if (departure <= arrival) {
    result.textContent = 'Please choose a departure date after your arrival date.';
    result.classList.add('is-visible');
    return;
  }
  result.textContent = `Enquiry preview ready for ${data.get('name')}. This mock-up does not send your details.`;
  result.classList.add('is-visible');
});

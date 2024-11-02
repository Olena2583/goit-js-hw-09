`use strict`;
const formData = { email: '', message: '' };

const STORAGE_KEY = 'feedback-form-state';

const form = document.getElementById('feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const savedFormData = JSON.parse(savedData);

    formData.email = savedFormData.email || '';
    formData.message = savedFormData.message || '';
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

populateFormData();

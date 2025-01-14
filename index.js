const emailInput = document.querySelector('.email-input');
const submitButton = document.querySelector('.submit-btn');
const emailResponse = document.querySelector('.error-message');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
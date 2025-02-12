const emailInput = document.querySelector('.email-input');
const submitButton = document.querySelector('.submit-btn');
const emailResponse = document.querySelector('.error-message');
const errorImg = document.querySelector('.error-img');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function handleSubmit() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    emailResponse.textContent = 'Whoops! It looks like you forgot to add your email.';
    emailInput.style.border = '1px solid hsl(354, 100%, 66%)';
    errorImg.style.display = 'inline';
    emailResponse.style.color = 'hsl(354, 100%, 66%)';
  } else if (!emailPattern.test(emailValue)) {
    emailResponse.textContent = 'Please provide a valid email address.';
    emailInput.style.border = '1px solid hsl(354, 100%, 66%)';
    errorImg.style.display = 'inline';
    emailResponse.style.color = 'hsl(354, 100%, 66%)';
  } else {
    emailResponse.textContent = 'You have been added to the email list!';
    emailResponse.style.color = 'hsl(120, 100%, 40%)';
    emailInput.style.border = '0.1rem solid hsl(120, 100%, 40%)';
    emailInput.value = '';
    errorImg.style.display = 'none';
  }

};

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  handleSubmit();
});

emailInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSubmit();
  }
});
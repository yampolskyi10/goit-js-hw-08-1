import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function saveFormData() {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
}


const throttledSaveFormData = throttle(saveFormData, 500); 
emailInput.addEventListener('input', throttledSaveFormData);
messageInput.addEventListener('input', throttledSaveFormData);


loadFormData();


form.addEventListener('submit', handleSubmit);


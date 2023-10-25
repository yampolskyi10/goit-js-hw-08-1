import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = "feedback-form-state";



function saveFormData() {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const formData = JSON.parse(savedData);
            emailInput.value = formData.email;
            messageInput.value = formData.message;
        }
    } catch (error) {
        console.error('Помилка при завантаженні даних :', error);
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


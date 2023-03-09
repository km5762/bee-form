const confirmPassword = document.querySelector('#confirm-password-input');
const form = document.querySelector('form');
const submit = document.querySelector('#submit-button');
confirmPassword.addEventListener('change', checkPassword);

submit.addEventListener('click', () => {
    form.classList.add('submitted');
})

function checkPassword() {
    const password = document.querySelector('#password-input');
    const confirm = document.querySelector('#confirm-password-input');

    if (password.value === confirm.value) {
        confirm.setCustomValidity('')
    } else {
        confirm.setCustomValidity('Passwords do not match')
    }
}
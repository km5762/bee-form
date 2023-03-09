const confirmPassword = document.querySelector('#confirm-password-input');

confirmPassword.addEventListener('change', checkPassword);

function checkPassword() {
    const password = document.querySelector('#password-input');
    const confirm = document.querySelector('#confirm-password-input');
    const confirmPasswordStatus = document.querySelector('#confirm-password-status');

    if (password.value === confirm.value) {
        confirm.setCustomValidity('')
    } else {
        confirm.setCustomValidity('Passwords do not match')
    }
}
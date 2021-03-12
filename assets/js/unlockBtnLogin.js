window.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('#email-input');
    const passwordInput = document.querySelector('#password-input');
    const submitBtn = document.querySelector('#submit-btn');

    const checkBoth = () => {
        if (passwordInput.value && emailInput.value)
            submitBtn.disabled = false
        else
            submitBtn.disabled = true
    }

    emailInput.addEventListener('input', () => checkBoth());
    passwordInput.addEventListener('input', () => checkBoth());
})
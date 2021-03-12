window.addEventListener('DOMContentLoaded', () => {
    const acceptConditionCheckbox = document.querySelector('#accept-conditions');
    const registerBtn = document.querySelector('#register-btn');

    acceptConditionCheckbox.addEventListener('change', () => {
        if (acceptConditionCheckbox.checked)
            registerBtn.disabled = false;
        else
            registerBtn.disabled = true;
    });
});
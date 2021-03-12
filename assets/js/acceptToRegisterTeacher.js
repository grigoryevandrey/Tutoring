window.addEventListener('DOMContentLoaded', () => {
    const acceptConditionCheckbox = document.querySelector('#accept-conditions');
    const acceptPoliciesCheckbox = document.querySelector('#accept-policies');
    const registerBtn = document.querySelector('#register-btn');

    const checkBoth = () => {
        if (acceptConditionCheckbox.checked && acceptPoliciesCheckbox.checked)
            registerBtn.disabled = false;
        else
            registerBtn.disabled = true;
    }

    acceptConditionCheckbox.addEventListener('change', () => checkBoth());
    acceptPoliciesCheckbox.addEventListener('change', () => checkBoth());
});
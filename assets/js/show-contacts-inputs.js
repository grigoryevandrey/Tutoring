window.addEventListener('DOMContentLoaded', () => {
    const discordInput = document.querySelector('#discord-input-box');
    const skypeInput = document.querySelector('#skype-input-box');
    const discordCheckBox = document.querySelector('#use-discord');
    const skypeCheckBox = document.querySelector('#use-skype');

    const disp = thing => thing.classList.remove('not-display');
    const notDisp = thing => thing.classList.add('not-display');

    const check = (checkBox, inputToManipulate) => {
        if (checkBox.checked) disp(inputToManipulate)
        else notDisp(inputToManipulate);
    }

    check(discordCheckBox, discordInput);
    check(skypeCheckBox, skypeInput);

    discordCheckBox.addEventListener('change', () => check(discordCheckBox, discordInput));
    skypeCheckBox.addEventListener('change', () => check(skypeCheckBox, skypeInput));
});
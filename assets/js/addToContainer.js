document.addEventListener('DOMContentLoaded', () => {
    const langInput = document.querySelector('#language-input')
    const addLangBtn = document.querySelector('#add-language')
    const langsContainer = document.querySelector('#languages-container')
    const achievementsInput = document.querySelector('#achievements-input')
    const addAchievementBtn = document.querySelector('#add-achievement')
    const achievementsContainer = document.querySelector('#achievements-container')

    const replaceStrangeChars = (string = '') => string.replace(/[^\wА-Яа-я\?.!,&() ]/g, '');

    const createBox = (content, appendTo) => {
        content = replaceStrangeChars(content);
        if (content == '') return
        if (typeof (appendTo) != 'object') throw new TypeError('Second argument must be an object from document');

        let div = document.createElement('div');
        let p = document.createElement('p');
        let i = document.createElement('i');

        i.classList.add('fas');
        i.classList.add('fa-times');
        div.classList.add('box');

        p.textContent = content;

        div.append(i);
        div.append(p);

        appendTo.append(div);
    }

    addLangBtn.addEventListener('click', e => {
        e.preventDefault();

        createBox(langInput.value, langsContainer);

        langInput.value = '';
    })

    addAchievementBtn.addEventListener('click', e => {
        e.preventDefault();

        createBox(achievementsInput.value, achievementsContainer);

        achievementsInput.value = '';
    })
});
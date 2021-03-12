window.addEventListener('DOMContentLoaded', () => {
    const headNav = document.querySelector('header nav'),
        burgerNav = document.querySelector('#burgerNav'),
        closeNav = document.querySelector('#closeNavMob');

    const disp = name => {
        name.classList.remove('not-display-mob');
        name.classList.add('display-mob');
    }

    const notDisp = name => {
        name.classList.add('not-display-mob');
        name.classList.remove('display-mob');
    }

    burgerNav.addEventListener('click', () => {
        disp(headNav);
        disp(closeNav);
        notDisp(burgerNav);
    });

    closeNav.addEventListener('click', () => {
        notDisp(headNav);
        notDisp(closeNav);
        disp(burgerNav)
    })
});
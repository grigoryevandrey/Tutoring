window.addEventListener('DOMContentLoaded', () => {
    const selectBoxes = document.querySelectorAll('.selector-wrapper');

    selectBoxes.forEach(box => {
        const selected = box.querySelector('.selected');
        const optionsContainer = box.querySelector('.options-container');

        const optionsList = box.querySelectorAll('.option');

        selected.addEventListener('click', () => {
            optionsContainer.classList.toggle('active');
        });

        optionsList.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerHTML = option.querySelector('label').innerHTML;
                selected.style.color = "rgb(67, 76, 93)";
                optionsContainer.classList.remove('active');
            })
        })
    });
});
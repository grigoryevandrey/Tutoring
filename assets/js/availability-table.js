document.addEventListener('DOMContentLoaded', () => {
    const tableBox = document.querySelector('.availability-table');

    //mouse events
    let isPressed = false;

    document.addEventListener('mousedown', () => {
        isPressed = true;
    });
    document.addEventListener('mouseup', () => {
        isPressed = false;
    });
    document.addEventListener('mouseout', (e) => {
        if (e.toElement == null && e.relatedTarget == null) {
            isPressed = false;
        }
    });

    //functions
    const addColumn = columns => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('table-column');
        tableBox.append(newDiv);
        let newSpan = document.createElement('span');
        newSpan.classList.add('table-day');
        newDiv.append(newSpan);
        switch (columns) {
            case 1:
                break;
            case 2:
                newSpan.textContent = 'Пон';
                break;
            case 3:
                newSpan.textContent = 'Вт';
                break;
            case 4:
                newSpan.textContent = 'Ср';
                break;
            case 5:
                newSpan.textContent = 'Чт';
                break;
            case 6:
                newSpan.textContent = 'Пт';
                break;
            case 7:
                newSpan.textContent = 'Сб';
                break;
            case 8:
                newSpan.textContent = 'Вс';
                break;
        }
    }

    const addZero = num => num < 10 ? `0${num}` : num;

    const addHour = (c, r) => {
        let newSpan = document.createElement('span');
        newSpan.classList.add('table-hour');
        tableColumns[c - 1].append(newSpan);
        newSpan.textContent = `${addZero(r-1)}:00`
    }

    const getId = (c) => {
        let res = '';
        switch (c) {
            case 2:
                res = 'Mon';
                break;
            case 3:
                res = 'Tue';
                break;
            case 4:
                res = 'Wed';
                break;
            case 5:
                res = 'Thu';
                break;
            case 6:
                res = 'Fri';
                break;
            case 7:
                res = 'Sat';
                break;
            case 8:
                res = 'Sun';
                break;
        }
        return res;
    }

    //days

    for (let cols = 1; cols <= 8; cols++) {
        addColumn(cols);
    }

    let tableColumns = document.querySelectorAll('.table-column');

    //hours + checkboxes

    for (let rows = 1; rows <= 24; rows++) {
        for (let cols = 1; cols <= 8; cols++) {
            if (cols === 1) {
                addHour(cols, rows);
            }

            if (cols !== 1) {
                let newCheckBox = document.createElement('input');
                let newLabel = document.createElement('label');
                let newSpan = document.createElement('span');
                newCheckBox.setAttribute('type', 'checkbox');
                newCheckBox.id = `${getId(cols)}${rows}`;
                newLabel.setAttribute('for', `${getId(cols)}${rows}`);
                newLabel.classList.add('hour-checkbox');
                newSpan.classList.add('hour-checkmark');
                newSpan.setAttribute('data-value', `${addZero(rows-1)}:00`);
                newLabel.append(newCheckBox);
                newLabel.append(newSpan);
                tableColumns[cols - 1].append(newLabel);
                newLabel.addEventListener('mouseover', (e) => {
                    if (isPressed && !e.target.matches("label") && !newCheckBox.disabled) newCheckBox.checked ? newCheckBox.checked = false : newCheckBox.checked = true;
                });
            }
        }
    }



    //8 столбцов
    //25 строк
});
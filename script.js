/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const itemsContainer = document.querySelector('.items');

sendInput.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        const textItem = sendInput.value;

        const newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.textContent = textItem;
        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        });

        if (textItem != '') {
            itemsContainer.append(newItem);
        }

        sendInput.value = '';
    };

});
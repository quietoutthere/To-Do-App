const inputButton = document.getElementById('inputButton');
const inputItem = document.getElementById('inputItem');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (inputItem.value.trim().length === 0) {
        inputItem.value = '';
        return
    }
    addItem();
})

function addItem() {
    const itemText = inputItem.value;
    inputItem.value = '';
    const newItem = createListItem(itemText);
    const list = document.getElementById('list');
    list.appendChild(newItem);
}

function createListItem(itemText) {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'list-item');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('change', function(e) {
        handleCheckBox(e, listItem);
    });
    listItem.appendChild(checkBox);
    
    const listItemText = document.createElement('div');
    listItemText.textContent = itemText;
    listItemText.className = 'item-text';
    listItem.appendChild(listItemText);
    return listItem;
}

function addButton(event) {
    const listItem = document.createElement('li')
    const lineItemButton = document.createElement('img');
    lineItemButton.id = 'trash-icon';
    lineItemButton.setAttribute('src', 'images/delete.png');
    lineItemButton.addEventListener('click', removeElement);
    event.target.parentElement.appendChild(lineItemButton);
}

function removeElement(event) {
    const trash = event.target;
    trash.parentElement.remove()
   }

function handleCheckBox(event) {
    event.preventDefault();
    const target = event.target;
    const activate = target.checked
    if (activate === true) {
        target.nextSibling.style.textDecoration = 'line-through';
        addButton(event)
    } else {
        target.nextSibling.style.textDecoration = 'none';
        removeButton(event)
    }
}

function removeButton(event) {
    const trashIcontElement = target.parentElement.querySelector('#trash-icon');
    event.target.parentElement.removeChild(trashIcontElement);
}

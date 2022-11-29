const inputButton = document.getElementById('inputButton');
const inputItem = document.getElementById('inputItem');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addItem();
})

function addItem() {
    const itemText = inputItem.value;
    inputItem.value = ''
    const newItem = createListItem(itemText);
    const list = document.getElementById('list');
    list.appendChild(newItem);
}

function createListItem(itemText) {
    const listItem = document.createElement('li')
    listItem.setAttribute('id', Math.random());
    listItem.style = 'list-style-type: none';

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('change', function(e) {
        handleCheckBox(e, listItem);
    });
    listItem.appendChild(checkBox);
    
    const listItemText = document.createElement('span');
    listItemText.textContent = itemText;
    listItemText.className = 'itemText';
    listItem.appendChild(listItemText);
    return listItem;
}

function addButton(li) {
    const listItem = document.createElement('li')
    const lineItemButton = document.createElement('img');
    lineItemButton.id = 'trash-icon';
    lineItemButton.setAttribute('src', 'images/delete.png');
    lineItemButton.addEventListener('click', removeElement);
    lineItemButton.style.height = '25px';
    li.appendChild(lineItemButton);
}

function removeElement(event) {
    event.preventDefault();
    const trash = event.target;
    trash.parentElement.remove()
   }

function handleCheckBox(event, li) {
    event.preventDefault();
    const target = event.target;
    const activate = target.checked
    if (activate === true) {
        target.nextSibling.style.textDecoration = 'line-through';
        addButton(li)
    } else {
        target.nextSibling.style.textDecoration = 'none';
        removeButton(event, target)
    }
}

function removeButton(event, target) {
    event.preventDefault();
    const trash = event.target;
    const trashIcontElement = target.parentElement.querySelector('#trash-icon');
    target.parentElement.removeChild(trashIcontElement);
}
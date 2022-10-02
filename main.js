const inputButton = document.getElementById('inputButton');
const listItem = document.createElement('li');
const inputItem = document.getElementById('inputItem');
const form = document.getElementById('form');
//inputButton.addEventListener('click', addItem);

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
    listItem.setAttribute('id', Math.random());
    listItem.style = 'list-style-type: none';

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('change', handleCheckBox);
    listItem.appendChild(checkBox);
    
    const listItemText = document.createElement('span');
    listItemText.textContent = itemText;
    listItemText.className = 'itemText';
    listItem.appendChild(listItemText);
    return listItem;
}

function addButton() {
    const lineItemButton = document.createElement('img');
    lineItemButton.setAttribute('src', 'images/delete.png');
    lineItemButton.addEventListener('click', removeElement);
    lineItemButton.style.height = '25px'
    listItem.appendChild(lineItemButton)
}

function removeElement(event) {
    event.preventDefault();
    const trash = event.target;
    trash.parentElement.remove()
   }

function handleCheckBox(event) {
    event.preventDefault();
    const target = event.target;
    target.nextSibling.style = target.checked ? 
    'text-decoration: line-through' : 
    'text-decoration: none';
    addButton();
}
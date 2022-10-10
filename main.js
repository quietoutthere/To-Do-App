// description: add delete button to item

// STEP 1: create todo item called 'workout'
// EXPECTED: 'workout' shows up on screen
// ACTUAL: IT WORKS

//STEP 2: click on box and add strikethrough to 'workout'
// EXPECTED: strikethrough shows up on 'workout'
// ACTUAL: IT WORKS

//STEP 3: have delete button show up when checkbox is clicked
// EXPECTED: delete button should show up to right of 'workout'
// ACTUAL: does not show up

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
    lineItemButton.setAttribute('src', 'images/delete.png');
    lineItemButton.addEventListener('click', removeElement);
    lineItemButton.style.height = '25px';
    li.appendChild(lineItemButton)
}

function removeElement(event) {
    event.preventDefault();
    const trash = event.target;
    trash.parentElement.remove()
   }

function handleCheckBox(event, li) {
    event.preventDefault();
    const target = event.target;
    target.nextSibling.style = target.checked ? 
    'text-decoration: line-through' : 
    'text-decoration: none';
    addButton(li);
}


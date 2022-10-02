//description: create two todo items and

//step 1: create a todo item called 'item 1'
//EXPECTED: todo item called item 1 shows up on screen
//ACTUAL: IT WORKS

//step 2: create a second todo item called 'item 2'
//EXPECTED: todo item called item 2 shows up below item 1
//ACTUAL: IT WORKS

//step 3: click on second todo item's checkbox
//EXPECTED: there should be a line through for item 2, a garbage icon should appear
//ACTUAL: IT WORKS

//step 4: click on second todo item's garbage icon
//EXPECTED: second todo item should dissapear
//ACTUAL: IT DOESN'T WORK; both todo items get deleted

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
    checkBox.addEventListener('change', handleCheckBox);
    listItem.appendChild(checkBox);
    
    const listItemText = document.createElement('span');
    listItemText.textContent = itemText;
    listItemText.className = 'itemText';
    listItem.appendChild(listItemText);
    return listItem;
}

function addButton() {
    const listItem = document.createElement('li')
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


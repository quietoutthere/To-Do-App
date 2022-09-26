const inputButton = document.getElementById('inputButton');
inputButton.addEventListener('click', addItem);

function addItem() {
    const inputItem = document.getElementById('inputItem');
    const itemText = inputItem.value;
    
    const newItem = createListItem(itemText);

    const list = document.getElementById('list');
    list.appendChild(newItem)
}

function createListItem(itemText) {
    const lineItem = document.createElement('li');
    lineItem.setAttribute('id', Math.random());
    lineItem.style = 'list-style-type: none';

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('change', handleCheckBox);
    lineItem.appendChild(checkBox);
    
    const lineItemText = document.createElement('span');
    lineItemText.textContent = itemText;
    lineItemText.className = 'itemText';
    lineItem.appendChild(lineItemText);

    //const lineItemButton = document.createElement('img');

    return lineItem;
}

function handleCheckBox(event) {
    event.preventDefault();
    const target = event.target;
    target.nextSibling.style = target.checked ? 
    'text-decoration: line-through' : 
    'text-decoration: none';
}

//const list = document.getElementById('script');
//const inputElement = document.createElement('li');
//const newLi = document.createTextNode(input.value);
//inputElement.append(newLi, checkBox, deleteButton);
//document.body.insertBefore(inputElement, list);
//checkBox.addEventListener('change', () => {
    //if (checkBox.checked){
    //inputElement.classList = 'line';
    //} else {
       // inputElement.classList = 'noline'
   // }
//})

//const checkBox = document.createElement('input');
//checkBox.type='checkbox';
//checkBox.style.cssFloat='left';
//const deleteButton = document.createElement('button')
//deleteButton.classList = 'button'
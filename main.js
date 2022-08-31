const input = document.querySelector('input');
const select = document.querySelector('button');


select.addEventListener('click', addItem);

function addItem() {
    const list = document.getElementById('list');
    const inputElement = document.createElement('li')
    const newLi = document.createTextNode(input.value);
    inputElement.appendChild(newLi);
    document.body.insertBefore(inputElement, list)
}



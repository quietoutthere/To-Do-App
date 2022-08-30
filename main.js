const item = document.querySelector('input');
const select = document.querySelector('button');
const list = document.getElementById('list');
const newP = document.createElement('p');


select.addEventListener('click', addItem);

function addItem() {
    let task = item.value;
    let newItem = document.createTextNode(task);
    newP.appendChild(newItem);
    newP.insertAdjacentText(newP, list)
    console.log(newP)
}


const input = document.querySelector('input');
const select = document.querySelector('button');
const list = document.getElementById('list');
const li = document.createElement('li');

select.addEventListener('click', addItem);

function addItem() {
    let newLi = document.createTextNode(input.value);
    li.appendChild(newLi);
    list.appendChild(li);
    console.log(list)
}



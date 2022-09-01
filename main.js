const input = document.querySelector('input');
const select = document.querySelector('button');
const checkBox = document.createElement('input');
checkBox.type='checkbox';
checkBox.style.cssFloat='left';
const deleteButton = document.createElement('button')
deleteButton.classList = 'button'

select.addEventListener('click', addItem);

function addItem() {
    const list = document.getElementById('script');
    const inputElement = document.createElement('li');
    const newLi = document.createTextNode(input.value);
    inputElement.append(newLi, checkBox, deleteButton);
    document.body.insertBefore(inputElement, list);
    checkBox.addEventListener('change', () => {
        if (checkBox.checked){
        inputElement.classList = 'line';
        } else {
            inputElement.classList = 'noline'
        }
    })
    
    

}
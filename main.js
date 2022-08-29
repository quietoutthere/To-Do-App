const submit = document.getElementById("button")
const toDoList = document.getElementById("list")

submit.addEventListener("click", add)

const add = (e) => {
    e.target.id
    const newItem = document.getElementById("addToList").value;
    newItem.createElement("li")
    li.appendChild(document.createTextNode(newItem))
    toDoList.appendChild(li)
    
}
console.log(add)
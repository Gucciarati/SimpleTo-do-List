let addButton = document.getElementById("AddNewTask")
let inputField = document.getElementById("InputField")
let newTasks = document.getElementById("newTasks")  
 function AddNewToDo() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    newTasks.appendChild(paragraph);
    inputField.value = "";
}
addButton.addEventListener("click", AddNewToDo)
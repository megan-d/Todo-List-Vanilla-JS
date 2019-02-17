//create selectors
const addButton = document.querySelector('#add-btn');
const input = document.querySelector('#input-todo');
let lis = document.querySelectorAll('li');
let ul = document.querySelector('ul');
let deleteButton = document.querySelector('#clear-all');

//create function to return input length
function inputLength() {
    return input.value.length;
}

//create a new li
function createListItem() {
    let li = document.createElement("li");
    let icon = document.createElement("i");
    let spanElement = document.createElement("span");
    li.textContent = input.value;
    input.value = '';
    icon.classList.add("far", "fa-trash-alt");
    spanElement.appendChild(icon);
    ul.appendChild(li).appendChild(spanElement);
    icon.onclick = deleteItem;
}

//create a new li when button clicked
function addLiAfterClick() {
    if(inputLength() > 0) {
        createListItem();
    }
}

//create a new li when enter pressed
function addLiAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode===13) {
        createListItem();
    }
}

//strikethrough the list item when checkbox is clicked
function itemCompleted(event) {
    if (event.target.tagName===('LI')) {
        event.target.classList.toggle("completed");
    }
}

//delete item when trash can is clicked
function deleteItem() {
    let parent = this.parentNode.parentNode.parentNode;
    let child = this.parentNode.parentNode;
    parent.removeChild(child);
}

//delete all items when clear all todos button is clicked
function deleteAllItems() {
    ul.innerHTML = '';
};


//set up event listeners for add and delete buttons
addButton.addEventListener("click", addLiAfterClick);
input.addEventListener("keypress", addLiAfterKeypress);
ul.addEventListener('click', itemCompleted);
deleteButton.addEventListener('click', deleteAllItems);

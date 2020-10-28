var today = new Date();
var currentTime = today.getHours();
var greeting;

if (currentTime >= 18) {
    greeting = 'Hi, Good Evening'
} else if (currentTime >= 12) {
    greeting = 'Hi, Good Afternoon'
} else if (currentTime >= 0) {
    greeting = 'Hi, Good Morning'
} else {
    greeting = 'Welcome'
}
document.write(`<h2>${greeting}<h2>`)

//Adding focus event to the textfield on load
function writeReady() {
    var elTextBox = document.getElementById('textfield');
    elTextBox.focus();
}
window.addEventListener('load', writeReady, false);


var elNewEntry = document.getElementById('textfield');
var elAddButton = document.getElementById('additem');
var elFeedbackMsg = document.getElementById('feedback');
var elClearList = document.getElementById('clear-list');
var elDeleteItem = document.getElementsByClassName('deleteTask');
var elCompletedItem = document.getElementsByClassName('check');
var elUList = document.getElementById('UList');

//Adding eventListerner to the ADD Button
function newTask1() {
    var elTextValue = document.getElementById('textfield').value;
    if (elTextValue != '') {
        elAddNewTodo(elTextValue);
        elNewEntry.value = '';
        elFeedbackMsg.innerHTML = '';
    } else {
        elFeedbackMsg.innerHTML = 'You have to type a task!';
    }
}
elAddButton.addEventListener('click', newTask1, false);

//Adding eventListerner to keyboard enter button
function newTask(e) {
    var elTextValue = document.getElementById('textfield').value;
    if (e.keyCode === 13) {
        e.preventDefault();
        if (elTextValue != '') {
            elAddNewTodo(elTextValue);
            elNewEntry.value = '';
            elFeedbackMsg.innerHTML = '';
        } else {
            elFeedbackMsg.innerHTML = 'You have to type a task!';
        }
    } 
        
}
elNewEntry.addEventListener("keypress", newTask, false);

//Function to add item to the list
function elAddNewTodo(text) {
    var elTextValue = document.getElementById('textfield').value;
    var elUList = document.getElementById('UList');
    newText = document.createTextNode(elTextValue);
    var elNewList = document.createElement('li');
    elNewList.setAttribute('id', 'list');
    elNewList.innerText = text;
    
    var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');
    elNewList.appendChild(checkbox);
    
    var removeTask = document.createElement('button');
        removeTask.setAttribute('id', 'deleteTask');
        removeTask.textContent = 'X';
        removeTask.addEventListener('click', deleteItemList, false);
    elNewList.appendChild(removeTask); 

    //elNewList.appendChild(newText);
    elNewList.addEventListener('dblclick', editItem, false);
    elUList.appendChild(elNewList);
}

//Function to Clear all list
function clearList() {
    var elUList = document.getElementById('UList');
    elUList.innerHTML = '';
}
elClearList.addEventListener('click', clearList, false);

//function to mark completed task
function tickTask(e){
    var task = e.target.parentNode;
    if(e.target.checked){
      task.style.textDecoration = "line-through";
      task.style.color = "#ff0000";
    }else {
      task.style.textDecoration = "none";
      task.style.color = "black";
    }
}
elUList.addEventListener('click', tickTask, false);

function deleteItemList() {
    //alert('remove this Item!');
    var li = this.parentNode;
    li.remove();
}

function editItem() {
    this.parentNode;
    console.log('edit this content!!!');
    // alert('edit this content');
    this.setAttribute('contenteditable', 'true');
    
}
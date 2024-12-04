const addBtn = document.getElementById("addBtn");
const taskTitle = document.getElementById("title");
const taskDesc = document.getElementById("desc");
const todoContainer = document.getElementById("todocontainer");

// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", loadTasks);

// Add task event
addBtn.addEventListener("click", () => {
    if (taskTitle.value.trim() === '' || taskDesc.value.trim() === '') {
        alert("Please Enter task title and description");
        return;
    }

    const taskData = {
        title: taskTitle.value,
        description: taskDesc.value
    };

    addTaskToDOM(taskData);
    saveTaskToLocalStorage(taskData);

    taskTitle.value = "";
    taskDesc.value = "";
});

// Function to add a task to the DOM
function addTaskToDOM(taskData) {
    let task = document.createElement("div");
    task.classList.add("border", "p-3", "taskColor", "d-flex", "justify-content-between", "align-items-center", "rounded-4", "mt-3");

    let leftDiv = document.createElement("div");
    let rightDiv = document.createElement("div");

    let theading = document.createElement("h3");
    theading.innerText = taskData.title;

    let tdesc = document.createElement("p");
    tdesc.innerText = taskData.description;

    leftDiv.appendChild(theading);
    leftDiv.appendChild(tdesc);

    task.appendChild(leftDiv);

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("btn", "btn-danger");

    delBtn.addEventListener("click", () => {
        todoContainer.removeChild(task);
        removeTaskFromLocalStorage(taskData);
    });

    rightDiv.appendChild(delBtn);
    task.appendChild(rightDiv);
    todoContainer.appendChild(task);
}

// Function to save a task to local storage
function saveTaskToLocalStorage(taskData) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskData);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to remove a task from local storage
function removeTaskFromLocalStorage(taskData) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.title !== taskData.title || task.description !== taskData.description);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

const addBtn = document.getElementById("addBtn");
const taskTitle = document.getElementById("title");
const taskDesc = document.getElementById("desc");
const todoContainer = document.getElementById("todocontainer");



addBtn.addEventListener("click", () => {
    if(taskTitle.value == '' || taskDesc.value == '')
    {
        alert("Please Enter task title and description")
        return
    }

    let task = document.createElement("div")
    task.classList.add("border", "p-3", "taskColor", "d-flex", "justify-content-between", "align-items-center", "rounded-4", "mt-3")

    let leftDiv = document.createElement("div")
    let rightDiv = document.createElement("div")

    let theading = document.createElement("h3")
    theading.innerText = taskTitle.value

    let tdesc = document.createElement("p")
    tdesc.innerText = taskDesc.value

    leftDiv.appendChild(theading)
    leftDiv.appendChild(tdesc)

    task.appendChild(leftDiv)

    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    delBtn.classList.add("btn", "btn-danger")

    delBtn.addEventListener("click", () =>
        {
            todoContainer.removeChild(task)
        })

    rightDiv.appendChild(delBtn)

    task.appendChild(rightDiv)

    todoContainer.appendChild(task)

    taskTitle.value = ""
    taskDesc.value = ""

  });  


  

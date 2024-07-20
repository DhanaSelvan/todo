var todoList = []

const addTodo = () => {
    var todo = document.getElementById("task").value;
    todoList.push(todo);
    console.log(todoList);
    createTaskList(todo);
    document.getElementById("task").value = ""
}

const createTaskList = (todo) => {
    const taskList = document.getElementById("tasks");
    const container = document.createElement("div");
    const task = document.createElement("li");
    task.innerHTML = todo;
    container.appendChild(task);
    const list = document.getElementsByClassName('list');
    const delBtn = document.createElement("button")
    delBtn.innerHTML = 'Delete'
    container.appendChild(delBtn)
    taskList.appendChild(container)
    delBtn.className = 'delete';
    delBtn.addEventListener('click', function() {
        taskList.removeChild(container);
    })
}
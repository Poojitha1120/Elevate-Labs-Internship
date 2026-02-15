const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearAll = document.getElementById("clearAll");

let tasks = [];

// Add Task
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = "";
    renderTasks();
}

// Render Tasks
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", function() {
            task.completed = !task.completed;
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    taskCount.textContent = "Total Tasks: " + tasks.length;
}

// Clear All
clearAll.addEventListener("click", function() {
    tasks = [];
    renderTasks();
});

"use strict";
const input = document.querySelector('input[placeholder="Enter ToDo"]');
const form = document.querySelector("form");
const lists = document.querySelector(".lists");
const noTaskContainer = document.querySelector(".no-task");
const deleteTaskBtns = document.querySelectorAll(`.close-icon`);
const deleteAllBtn = document.querySelector(`.delete-all`);
const allBtn = document.querySelector(`.all`);
const completedBtn = document.querySelector(`.completed`);
const activeBtn = document.querySelector(`.active`);

let taskCount = 0;
let tasks = [];


//HANDLING THE NO TASK FOUND
const noTask = function(array) {
    noTaskContainer.style.display = array.length === 0 ? "flex" : "none";
}

noTask(tasks);


// ADDING A TASK
form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  taskCount++;
  const task = {
    id: taskCount,
    text: input.value,
    completed: false,
  }
  const html = `
            <li class="list" data-id="${taskCount}">
                <div class="checkbox">
                    <input type="checkbox" id="c${taskCount}">
                    <label for="c${taskCount}">${input.value}</label>
                </div>
                <i class="fa-solid fa-x close-icon"></i>
            </li>
        `;
  input.value = "";
  input.blur();
  lists.insertAdjacentHTML(`beforeend`, html);
  tasks.push(task);
  noTask(tasks);
});




// DELETING A TASK
lists.addEventListener(`click`, function(e) {
    if(e.target.classList.contains(`close-icon`)) {
        e.target.parentElement.remove();
        const id = Number(e.target.parentElement.dataset.id)
        tasks = tasks.filter(task => task.id !== id)

        noTask(tasks);
        noTask(tasks.filter(task => task.completed));
        noTask(tasks.filter(task => !task.completed));
    }
})


//DELETING ALL TASKS
deleteAllBtn.addEventListener(`click`, function() {
    tasks.length = 0;
    lists.innerHTML = "";
    noTask(tasks);
})


//THE BOTTOM BUTTONS
completedBtn.addEventListener(`click`, function(e) {
    e.preventDefault();
    allBtn.classList.remove(`active-btn`);
    activeBtn.classList.remove(`active-btn`);
    completedBtn.classList.add(`active-btn`);
})

activeBtn.addEventListener(`click`, function(e) {
    e.preventDefault();
    allBtn.classList.remove(`active-btn`);
    completedBtn.classList.remove(`active-btn`);
    activeBtn.classList.add(`active-btn`);
})

allBtn.addEventListener(`click`, function(e) {
    e.preventDefault();
    completedBtn.classList.remove(`active-btn`);
    activeBtn.classList.remove(`active-btn`);
    allBtn.classList.add(`active-btn`);

    lists.innerHTML = "";
    renderAllTasks(tasks);
})


//COMPLETED TASKS
lists.addEventListener(`change`, function(e) {
        if(e.target.type === "checkbox") {
            const id = Number(e.target.parentElement.parentElement.dataset.id)
            const task = tasks.find(task => task.id === id)
    
            if(task) {
                task.completed = e.target.checked
                console.log(task);
            }
        }
})

completedBtn.addEventListener(`click`, function(e) {
    e.preventDefault();
    const completedTasks = tasks.filter(task => task.completed === true);
    if(completedTasks.length === 0) {
        lists.innerHTML = "";
        noTask(completedTasks);
    } else {
      //how can render the completedTasks on the screen?
      lists.innerHTML ="";
      renderCompletedTasks(completedTasks);
    }
})

activeBtn.addEventListener(`click`, function(e) {
    e.preventDefault();
    const activeTasks = tasks.filter(task => task.completed === false);
    if(activeTasks.length === 0) {
        lists.innerHTML = "";
        noTask(activeTasks);
    } else {
      //how can render the activeTasks on the screen?
       lists.innerHTML ="";
      listActiveTasks(activeTasks);
    }
})

console.log(lists.children.length)

const renderCompletedTasks = function(tasksArray) {
    lists.innerHTML = "";
    tasksArray.forEach(task => {
        const html = `
            <li class="list" data-id="${task.id}">
                <div class="checkbox">
                    <input type="checkbox" id="c${task.id}" ${task.completed ? "checked" : ""}>
                    <label for="c${task.id}">${task.text}</label>
                </div>
                <i class="fa-solid fa-x close-icon"></i>
            </li>
        `
        lists.insertAdjacentHTML(`beforeend`, html)
    })
}

const listActiveTasks = function(tasksArray) {
    lists.innerHTML = "";
    tasksArray.forEach(task => {
        const html = `
            <li class="list" data-id="${task.id}">
                <div class="checkbox">
                    <input type="checkbox" id="c${task.id}" ${task.completed ? 'checked' : ''}>
                    <label for="c${task.id}">${task.text}</label>
                </div>
                <i class="fa-solid fa-x close-icon"></i>
            </li>
        `
        lists.insertAdjacentHTML(`beforeend`, html)
    })
}

const renderAllTasks = function (tasksArray) {
    lists.innerHTML = "";
    tasksArray.forEach(task => {
        const html = `
            <li class="list" data-id="${task.id}">
                <div class="checkbox">
                    <input type="checkbox" id="c${task.id}" ${task.completed ? 'checked' : ''}>
                    <label for="c${task.id}">${task.text}</label>
                </div>
                <i class="fa-solid fa-x close-icon"></i>
            </li>
        `
        lists.insertAdjacentHTML(`beforeend`, html)

    })
}

const renderActiveTasks = function(tasksArray) {
    lists.innerHTML = "";
    tasksArray.forEach(task => {
        const html = `
            <li class="list" data-id="${task.id}">
                <div class="checkbox">
                    <input type="checkbox" id="c${task.id}">
                    <label for="c${task.id}">${task.text}</label>
                </div>
                <i class="fa-solid fa-x close-icon"></i>
            </li>
            `
    })
}
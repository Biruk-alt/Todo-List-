"use strict";
const input = document.querySelector('input');
const lists = document.querySelector('.lists');
const noTaskContainer = document.querySelector('.no-task');

let taskCount = 0;

input.addEventListener(`keydown`, function(e) {
    if(e.key === `Enter`) {
        e.preventDefault();
        taskCount++;
        const html =`
            <li class="list">
                <div class="checkbox">
                    <input type="checkbox" id="c${taskCount}">
                    <label for="c${taskCount}">${input.value}</label>
                </div>
                <i class="fa-solid fa-x"></i>
            </li>
        `
        input.value = "";
        input.blur();
        noTaskContainer.style.display = `none`;
        lists.insertAdjacentHTML(`beforeend`, html);
        console.log(`ENTER`);
    }
})

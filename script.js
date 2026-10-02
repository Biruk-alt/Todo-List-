"use strict";
const input = document.querySelector('input');
const lists = document.querySelector('.lists');
const noTaskContainer = document.querySelector('.no-task');

input.addEventListener(`keydown`, function(e) {
    if(e.key === `Enter`) {
        e.preventDefault();
        const html =`
            <li class="list">
                <h2>${input.value}</h2>
                <i class="fa-solid fa-x"></i>
            </li>
        `
        noTaskContainer.style.display = `none`;
        lists.insertAdjacentHTML(`beforeend`, html);
        console.log(`ENTER`);
    }
})

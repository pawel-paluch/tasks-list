{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({ content: newTaskContent });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    };

    const bindToggeDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButtons, taskIndex) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="task__item js__task"
        >
        <button class="tasks_button task__button--togleDone js-toggleDone">
        ${task.done ? "ptaszek" : ""}
        </button>
        <span class="tasks__content${task.done ? " tasks__content--done" : ""}">
            ${task.content}
            </span>
        <button class="tasks__button tasks__button-remove js-remove">
        <i class="fa-solid fa-check"></i>
        </button>
        `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindRemoveEvents();
        bindToggeDoneEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }
        newTaskElement.focus();

    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}

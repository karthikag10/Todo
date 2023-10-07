document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = "";

            
            const deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
        }
    });
});

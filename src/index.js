document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("DOMContentLoaded", () => {
  addEventListener("submit", (event) => {
    event.preventDefault();

    const chore = document.querySelector("#new-task-description").value;

    // Create a new task element and add it to the list
    const newTask = document.createElement("li");
    newTask.textContent = chore;
    document.querySelector("#tasks").appendChild(newTask);

    chore.value = "";  // Reset the input field to an empty string
  });
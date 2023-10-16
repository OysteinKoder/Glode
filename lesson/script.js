// The different elements we need to interact with
const inputText = document.querySelector("#input_text");
const submitTask = document.querySelector("#submit_task");
const taskList = document.querySelector("#task_list");
const todoForm = document.querySelector("#todo_form");

// adds a new task to the taskList
function addTask() {
  if (inputText.value) {
    const newTask = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";

    newTask.textContent = inputText.value;
    taskList.appendChild(newTask);
    newTask.appendChild(deleteButton);
  } else {
    alert("Please enter a task!");
  }
  saveData();
}
// removes the task from the taskList when clicked
taskList.addEventListener("click", function (event) {
  event.target.tagName === "BUTTON" && event.target.parentElement.remove();
  saveData();
});

// prevents the default form submission behavior and calls addTask()
// the default submission behavior refreshes the page, which we don't want
// it leads to bugs
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

// saves the data to localStorage
// is fired by the add data function
function saveData() {
  localStorage.setItem("taskList", taskList.innerHTML);
}

// loads the data from localStorage
function loadData() {
  taskList.innerHTML = localStorage.getItem("taskList");
}
loadData();

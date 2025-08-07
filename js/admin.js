const taskList = document.getElementById("taskList");
const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}
renderTasks();

function addTask() {
  const task = document.getElementById("taskTitle").value;
  if (!task) return;
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

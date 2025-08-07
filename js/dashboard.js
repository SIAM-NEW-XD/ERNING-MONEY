const user = JSON.parse(localStorage.getItem("user"));
if (!user) window.location.href = "index.html";

document.getElementById("userEmail").innerText = user.email;
document.getElementById("userBalance").innerText = user.balance;

// Dummy tasks
const tasks = [
  "Visit a website and stay 30s",
  "Subscribe a YouTube channel",
  "Follow Facebook page"
];

const taskList = document.getElementById("taskList");
tasks.forEach(task => {
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
});

function getUserData() {
  return JSON.parse(localStorage.getItem("user")) || null;
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Login failed");
  }
}

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const ref = document.getElementById("ref").value;
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(u => u.email === email)) return alert("Email already exists");
  const newUser = { email, password, balance: 0, refCode: email.split("@")[0], referredBy: ref };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("user", JSON.stringify(newUser));
  window.location.href = "dashboard.html";
}

function logout() {
  localStorage.removeItem("user");
}

function submitWithdraw() {
  const user = getUserData();
  if (!user) return alert("Login required");
  const amount = parseInt(document.getElementById("amount").value);
  const method = document.getElementById("method").value;
  if (amount < 50) return alert("Minimum 50");
  if (amount > user.balance) return alert("Insufficient balance");

  user.balance -= amount;
  localStorage.setItem("user", JSON.stringify(user));

  const withdraws = JSON.parse(localStorage.getItem("withdraws") || "[]");
  withdraws.push({ email: user.email, amount, method, status: "pending" });
  localStorage.setItem("withdraws", JSON.stringify(withdraws));
  alert("Withdraw request submitted");
}

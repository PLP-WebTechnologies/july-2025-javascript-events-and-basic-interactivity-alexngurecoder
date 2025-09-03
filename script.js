// Part 1: Event Handling

// onclick → change background color
const colorButton = document.getElementById("colorButton");
colorButton.onclick = function () {
  document.body.style.backgroundColor =
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// onmouseover / onmouseout → highlight text
const hoverText = document.getElementById("hoverText");
hoverText.onmouseover = function () {
  hoverText.style.color = "red";
  hoverText.style.fontWeight = "bold";
};
hoverText.onmouseout = function () {
  hoverText.style.color = "black";
  hoverText.style.fontWeight = "normal";
};

// onchange → display input value
const nameInput = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");
nameInput.onchange = function () {
  nameDisplay.textContent = `Hello, ${nameInput.value}!`;
};


// Part 2: Interactive Elements

// Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increaseBtn").onclick = function () {
  count++;
  countDisplay.textContent = count;
};
document.getElementById("resetBtn").onclick = function () {
  count = 0;
  countDisplay.textContent = count;
};

// Dropdown menu
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");

dropdownBtn.onclick = function () {
  dropdownContent.classList.toggle("show");
};

// Close dropdown if user clicks outside
window.onclick = function (event) {
  if (!event.target.matches('#dropdownBtn')) {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  }
};


// Part 3: Form Validation

function validateEmail(email) {
  let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return format.test(email);
}

function validatePassword(password) {
  // Minimum 8 characters, at least one uppercase, one lowercase, one number and one special character
  let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  return format.test(password);
}

function validateSignUp() {
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!username || !email || !password) {
    alert("All fields are required!");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!validatePassword(password)) {
    alert("Password must be 8+ characters, include uppercase, lowercase, number, and special character.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

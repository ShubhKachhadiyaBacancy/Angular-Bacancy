if(localStorage.getItem("loggedInUser")){
  window.location.href = "Dashboard.html";
}

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  Login();
});

function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
}

function Login() {
  const userEmail = document.getElementById("email").value.trim();
  const userPassword = document.getElementById("password").value.trim();
  const error = document.getElementById("error-message");

  if (!validatePassword(userPassword)) {
    error.innerText =
      "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    error.innerText = `No Accounts Found`;
    return;
  }

  const user = users.find((u) => u.email === userEmail);

  if (user) {
    if (user.password !== userPassword) {
      error.innerText = `Invalid Password`;
      return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "Dashboard.html";
  } else {
    error.innerText = `Invalid Email`;
  }
}

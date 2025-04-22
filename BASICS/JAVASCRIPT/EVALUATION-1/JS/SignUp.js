if(localStorage.getItem("loggedInUser")){
  window.location.href = "Dashboard.html";
}

document.getElementById("signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  SignUp();
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

function SignUp() {
  const userName = document.getElementById("username").value.trim();
  const userEmail = document.getElementById("email").value.trim();
  const userPassword = document.getElementById("password").value.trim();
  const error = document.getElementById("error-message");

  if (!validatePassword(userPassword)) {
    error.innerText =
      "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));
  const userExists = users.find((u) => u.email === userEmail);
  const usersLength = users ? users.length + 1 : 1;

  if (userExists) {
    error.innerText = "User Already Exists";
    return;
  }

  const newUser = {
    id: usersLength,
    username: userName,
    email: userEmail,
    password: userPassword,
  };

  if (!users) {
    localStorage.setItem("users", JSON.stringify([newUser]));
  } else {
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }

  window.location.href = "Login.html";
}

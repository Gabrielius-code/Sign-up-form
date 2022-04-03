function checkPassword() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const button = document.querySelector(".create-account");
  if (password.value === confirmPassword.value) {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    button.disabled = false;
  } else {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    button.disabled = true;
  }
}
const button = document.querySelector(".create-account");
button.addEventListener("click", () => {});

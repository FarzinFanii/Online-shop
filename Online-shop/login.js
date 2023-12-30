const btn = document.querySelector("#btn-button");
const email = document.querySelector("#email");
const password = document.querySelector("#Password");
const error = document.querySelector("#error");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (password.value.length > 0 && email.value.length > 0) {
    window.location.href = "index.html";
  } else {
    error.style.display = "block";
  }
});
email.addEventListener("keypress", keypress);
password.addEventListener("keypress", keypress);

function keypress() {
  error.style.display = "none";
}

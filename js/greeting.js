const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// first argument (can be any) -> making space for the JS
// JS fill the space with information about the eventListner
function loginBtnClick(event) {
  // prevent  automatic submitting and refreshing (default behaviour of any event)
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // const username = loginInput.value;
  // capitalise the first letter of each word
  const initialUsername = loginInput.value;

  const username =
    initialUsername.charAt(0).toUpperCase() + initialUsername.slice(1);

  // save the capitalised name into a local storage
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Welcome ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

// first check if we have the username on our local storage
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginBtnClick);
  // browser is not doing: loginBtnClick()
  // browser is doing: loginBtnClick(with extra info as a first argument)
} else {
  paintGreetings(savedUsername);
}

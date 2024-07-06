function addClass() {
  const text = document.querySelector("#ex1");
  const cls = document.querySelector("#class-input");
  text.classList.add(cls.value);
}

function toggleVisibility(elemID) {
  const elem = document.getElementById(elemID);
  elem.classList.toggle("hidden");
  elem.classList.toggle("visible");
}

function clickButton(btn) {
  btn.classList.remove("default");
  btn.classList.add("clicked");
  btn.textContent = "Clicked!";
}

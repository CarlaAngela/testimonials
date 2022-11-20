import { data } from "./data.js";

const controls = document.querySelectorAll(".btn-control");
let current = 0;

/*inicial values */

setUser(current);
document.querySelector(".current").innerHTML = `${(current + 1)
  .toString()
  .padStart(2, "0")}`;
document.querySelector(".total").innerHTML = `/${data.length
  .toString()
  .padStart(2, "0")}`;

/* events */

document.addEventListener("keydown", (event) => {
  
  const eventName = event.key;

  switch (eventName.toLowerCase()) {
    case "arrowleft":
      prevUser();
      break;
    case "arrowright":
      nextUser();
      break;
  }
});

controls.forEach((control) => {
  control.addEventListener("click", () => {
    if (control.className.includes("left")) {
      prevUser();
    } else {
      nextUser();
    }
  });
});

/* functions */

function setUser(index) {
  const img = document.querySelector("img");
  img.src = data[index].img;
  img.setAttribute("alt", data[index].name);

  document.querySelector(".user-name").innerHTML = data[index].name;
  document.querySelector(".user-comment p").innerHTML = data[index].comment;
}

function prevUser() {
  current === 0 ? (current = data.length - 1) : current--;
  setUser(current);
  showCurrentIndex(current);
}

function nextUser() {
  current === data.length - 1 ? (current = 0) : current++;
  setUser(current);
  showCurrentIndex(current);
}

function showCurrentIndex(index) {
  index === data.length
    ? (document.querySelector(".current").innerHTML = index
        .toString()
        .padStart(2, "0"))
    : (document.querySelector(".current").innerHTML = (index + 1)
        .toString()
        .padStart(2, "0"));
}

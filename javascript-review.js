let string = "Words";
let int = 0;

function updateParagraph() {
  int++;
  document.getElementById("paragraph").innerHTML = int;
}

let button = document.getElementById("button");

button.addEventListener("click", updateParagraph);

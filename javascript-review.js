let string = "Words";
let int = 0;
let animalInt = 2;
let animal = "Lion";

function updateInt() {
  int++;
  document.getElementById("paragraph").innerHTML = int;
}

function updateAnimal() {
  animalInt < 2 ? animalInt++ : (animalInt = 0);
  animal = animalInt == 0 ? "Lion" : animalInt == 1 ? "Tiger" : "Bear";
  document.getElementById("animal").innerHTML = animal;
}

let button = document.getElementById("button");

button.addEventListener("click", updateInt);
button.addEventListener("click", updateAnimal);

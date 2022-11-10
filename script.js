const container = document.querySelector(".container");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");

color2.addEventListener("click", () => {
  container.classList.add("bg-red");
});

color1.addEventListener("click", () => {
  container.classList.remove("bg-red");
});

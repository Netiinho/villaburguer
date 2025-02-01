//Menu
const bars = document.getElementById("bars");
const nav = document.getElementById("nav");
const navItems = document.querySelectorAll("a");

function toggleMenu() {
  nav.classList.toggle("active");
}

bars.addEventListener("click", toggleMenu);

navItems.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

//Cards
const card = document.getElementById("card");
const scrollLeft = document.getElementById("left");
const scrollRight = document.getElementById("right");

scrollLeft.addEventListener("click", () => {
  card.scrollBy({
    left: -200,
    behavior: "smooth",
  });
  console.log("Scroll Left");
});

scrollRight.addEventListener("click", () => {
  card.scrollBy({
    left: 200,
    behavior: "smooth",
  });
  console.log("Scroll Right");
});

const island = document.querySelector(".island");
const islandContent = document.querySelector(".island-content");

island.addEventListener("mouseenter", () => {
  setTimeout(() => {
    islandContent.style.opacity = 1;
    islandContent.style.transform = "scale(1)";
  }, 100);
});

islandContent.addEventListener("mouseleave", () => {
  islandContent.style.opacity = 0;
  islandContent.style.transform = "scale(0)";
});

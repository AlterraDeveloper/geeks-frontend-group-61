const blocksContainer = document.querySelector(".options");

// function expand(event) {
//   const activeBlock = blocksContainer.querySelector(".option.active");
//   activeBlock?.classList.remove("active");
//   event.target.classList.add("active");
// }

// blocksContainer.addEventListener("click", expand);
// blocksContainer.onclick = expand;

blocksContainer.onclick = function(event) {
  const activeBlock = blocksContainer.querySelector(".option.active");
  activeBlock?.classList.remove("active");
  event.target.classList.add("active");
};

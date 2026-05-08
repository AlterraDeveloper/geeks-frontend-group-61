const blocks = document.querySelectorAll(".option");

// for..of

for (const block of blocks) {
  // ....
//   block.addEventListener("click", expand);
  block.onclick = expand;
}

function expand(event) {
  const activeBlock = document.querySelector(".option.active");
  if (activeBlock !== null) {
    activeBlock.classList.remove("active");
  }

  event.target.classList.add("active");
}

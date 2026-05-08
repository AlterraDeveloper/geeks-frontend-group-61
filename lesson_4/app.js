const sizeButtons = document.querySelectorAll("input[type=radio]");
const board = document.getElementById("container");

for (const sizeBtn of sizeButtons) {
  sizeBtn.addEventListener("change", function (event) {
    const activeSize = event.target.value;

    if (activeSize === "S") {
      renderBoard(100);
    }

    if (activeSize === "M") {
      renderBoard(300);
    }

    if (activeSize === "L") {
      renderBoard(500);
    }
  });
}

function renderBoard(count) {
  board.innerHTML = ""; // clear container (board)

  for (let i = 0; i < 6; i++) {
    renderCell();
  }
}

//  <div class="square"></div>
function renderCell() {
  const cell = document.createElement("div"); // <div></div>
  cell.classList.add("square"); //  <div class="square"></div>

  // cell.addEventListener("mouseover")
  cell.onmouseenter = function (event) {
    const colors = ["red", "green", "purple", "cyan", "orange"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    event.target.style.background = randomColor;
  };

  cell.onmouseleave = function (event) {
    event.target.style.background = "#1d1d1d";
  };

  board.appendChild(cell);
}

const defaultSize = document.querySelector("input[type=radio][checked]");
defaultSize.dispatchEvent(new Event("change"));

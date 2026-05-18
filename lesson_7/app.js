function renderStar(index) {
  const starDiv = document.createElement("div");
  starDiv.classList.add("fa", "fa-star");
  // starDiv.setAttribute("data-index", index);
  starDiv.dataset.index = index;
  return starDiv;
  // <div class="..."></div>
}

const starContainer = document.querySelector("#container .stars");
const ratingValue = document.querySelector("#container .rating-value");

for (let i = 0; i < 5; i++) {
  const star = renderStar(i + 1);
  starContainer.append(star);
}

const stars = document.querySelectorAll(".fa-star");

for (const star of stars) {
  star.onclick = (event) => {
    const rate = Number(event.target.dataset.index);
    ratingValue.dataset.value = rate;

    for (const star of stars) {
      if (star.dataset.index > rate) {
        star.classList.remove("active");
      } else {
        star.classList.add("active");
      }
    }

    console.log("My rate = ", rate);
    
    if(rate === 5){
        blast();
    }    
  };
}

/**
 * Взрыв конфетти звездочками
 */
function blast() {
  const defaults = {
    particleCount: 120,
    spread: 80,
    startVelocity: 60,
    ticks: 200,
    zIndex: 9999,

    shapes: ["star"],

    scalar: 1.4,

    colors: [
      "#FFD700",
      "#FFC700",
      "#FFEA00",
      "#FFFFFF",
      "#FFE066",
    ],
  };

  // Слева
  confetti({
    ...defaults,
    origin: { x: 0, y: 0.7 },
    angle: 45,
  });

  // Справа
  confetti({
    ...defaults,
    origin: { x: 1, y: 0.7 },
    angle: 135,
  });
}

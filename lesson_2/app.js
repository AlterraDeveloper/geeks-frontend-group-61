function onClick(id) {
  const activeCard = document.querySelector(".active");

  activeCard?.classList.remove("active");
  //   activeCard && activeCard.classList.remove("active");
  //   if (activeCard !== null) {
  //     activeCard.classList.remove("active");
  //   }

  const card = document.getElementById(id);

  if (activeCard === card) return;

  card.classList.toggle("active");
  //   if (card.classList.contains("active")) {
  //     card.classList.remove("active");
  //   } else {
  //     card.classList.add("active");
  //   }
}

function openOrCloseCard(id) {
  console.log("case 1");

  const openedCard = document.querySelector(".active");
  openedCard?.classList.remove("active");

  const card = document.getElementById(id);

  if (openedCard === card) return;

  card.classList.add("active");
}

function openOrCloseCard2(event) {
  const openedCard = document.querySelector(".active");
  openedCard?.classList.remove("active");

  const card = event.currentTarget.parentElement.parentElement;
  
  if(card === openedCard) return;
  
  card.classList.add("active");
}

const buttons = document.getElementsByClassName("question-btn");
for (const btn of buttons) {
  btn.addEventListener("click", openOrCloseCard2);
}

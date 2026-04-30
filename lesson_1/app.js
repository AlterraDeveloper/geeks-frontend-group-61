// Поиск

// DOM - Document Object Model

const coins = document.getElementById("coins");
const energy = document.getElementById("energy");
const btn = document.getElementById("clicker");

function makeClick() {
  let energyValue = Number(energy.textContent);
  
  if (energyValue >= 5) {

    let coinsValue = Number(coins.innerText);
    // coinsValue = coinsValue + 5;
    coinsValue += 5;
    coins.innerText = coinsValue;

    energyValue -= 5;
    energy.textContent = energyValue;
  } else {
    btn.disabled = true;
    energy.style.color = "red";
  }
}

btn.addEventListener("click", makeClick);

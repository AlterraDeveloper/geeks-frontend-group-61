const phoneInput = document.querySelector("#phone-number");
const detectBtn = document.getElementById("detect-btn");
const form = document.querySelector("#form");
const resultImg = document.querySelector("#detection-result img");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

phoneInput.addEventListener("input", function () {
  let phone = phoneInput.value;
  phone = phone.slice(0, 10);
  phoneInput.value = phone;

  if (isLocal(phone)) {
    detectBtn.classList.remove("hidden");
  } else {
    detectBtn.classList.add("hidden");
  }
});

function isLocal(phone) {
  return phone.length === 10 && phone.startsWith("0");

  if (phone.length === 10 && phone.startsWith("0")) {
    return true;
  } else {
    return false;
  }
}

detectBtn.addEventListener("click", function () {
  const phone = phoneInput.value;

  const code = phone.slice(1, 4);

  if (["550", "551", "552", "553", "554", "555"].includes(code)) {
    resultImg.src = "images/mega.png";
    return;
  }

  if (["770", "771", "772", "773", "774", "775"].includes(code)) {
    resultImg.src = "images/beeline.jpg";
    return;
  }

  if (["500", "501", "502", "503", "504", "505"].includes(code)) {
    resultImg.setAttribute("src", "images/oshka.png");
    return;
  }

  resultImg.setAttribute("src", "images/error.png");

});

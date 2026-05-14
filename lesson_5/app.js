const original = document.getElementById("original");
const divs = original.querySelectorAll("div");
const originalArray = [];

for (const div of divs) {
  originalArray.push(Number(div.innerText));
}

const result = document.querySelector("#result");

function makeMap() {
  const mapResult = originalArray.map(function (item) {
    //return item / 2; // -50%
    return (item / 87.5).toFixed(2) + "$";
    // if(item % 2 === 0) {
    //     return "🍏";
    // } else {
    //     return "🍎";
    // }
    // return item % 2 === 0 ? "🍏" : "🍎";
  });

  renderArray(mapResult);
}

function makeFilter() {
  const filterResult = originalArray.filter(function (item) {
    // return item % 2 !== 0;
    return item > 50;
  });
  renderArray(filterResult);
}

// DRY - Don't Repeat Yourself


function renderArray(array) {
  const htmlItems = array.map(function (item) {
    const div = document.createElement("div");
    div.classList.add("color-box");
    div.innerText = item;
    return div;
  });
  result.innerHTML = "";
  result.append(...htmlItems);
}

function makeSlice(){
    const sliceResult = originalArray.slice(-2);
    renderArray(sliceResult);
}

function makeReverse(){
    // copy array
    // const copy = [...originalArray]; // 1
    // const copy = originalArray.map(x => x); // 2
    const copy = Array.from(originalArray); // 3

    const reverseResult = copy.reverse();
    renderArray(reverseResult);
}

function makeSort(){
    const copy = [...originalArray];
    const sortResult = copy.sort(function(a,b){
        return a - b;
    });
    renderArray(sortResult);
}
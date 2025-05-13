let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("counter");

let counter = 0;

function increment() {
  counter += 1;
  countEl.textContent = counter;
}
function decrement() {
  counter -= 1;
  countEl.textContent = counter;
}

function save() {
    let countStr = counter + " ; "
    saveEl.textContent += countStr
    countEl.textContent = 0
    counter = 0
}

function reset() {
  counter = 0;
  countEl.textContent = counter;
  saveEl.textContent = ""
}


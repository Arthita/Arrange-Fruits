let shelf = document.querySelector("#shelf")
let apples = document.querySelector("#first-shelf")
let oranges = document.querySelector("#second-shelf")
let fruits = ["🍎", "🍊", "🍎", "🍊", "🍎", "🍊", "🍎", "🍊"]
shelf.textContent = fruits.join(" ")

function arrange() {
  apples.textContent = ""
  oranges.textContent = ""
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "🍎") apples.textContent += fruits[i]
    else if (fruits[i] === "🍊") oranges.textContent += fruits[i]
  }
  shelf.textContent = ""
}
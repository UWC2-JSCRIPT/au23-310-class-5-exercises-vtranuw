// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
const updateCount = (amount) => {
  const countDisplay = document.getElementById("count");
  let currentCount = parseInt(countDisplay.textContent);
  currentCount += amount;
  countDisplay.textContent = currentCount;
};
// Set up event listeners
document.addEventListener("DOMContentLoaded", () => {
 // When a user clicks the + element, the count should increase by 1 on screen.
    .getElementById("plus")
    .addEventListener("click", () => updateCount(1));

// When a user clicks the – element, the count should decrease by 1 on screen.
    .getElementById("minus")
    .addEventListener("click", () => updateCount(-1));
});

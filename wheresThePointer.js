// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
// Declare function to handle the click event
function handleCellClick(event) {
  const tdElement = event.target;

  const x = event.clientX;
  const y = event.clientY;

  tdElement.innerHTML = `x: ${x}, y: ${y}`;
}
// This will add the handleCellClick to all td element
const tdElements = document.querySelectorAll("td");
tdElements.forEach((td) => {
  td.addEventListener("click", handleCellClick);
});

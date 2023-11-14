document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector(".today-list");
  list.addEventListener("click", function (e) {
    const clickedElement = e.target;
    let li = clickedElement;
    if (clickedElement.tagName !== "LI") {
      li = clickedElement.closest("li");
    }
    // If an li element is clicked, toggle the class "done" on the <li>
    if (li) {
      li.classList.toggle("done");
    }
    // If a delete link is clicked, delete the li element / remove from the DOM
    if (clickedElement.classList.contains("delete")) {
      list.removeChild(li);
    }
  });
  // If an 'Add' link is clicked, adds the item as a new list item with
  // addListItem function has been started to help you get going!
  // Make sure to add an event listener(s) to your new <li> (if needed)
  // Function to add a new list item
  const addListItem = function (e) {
    e.preventDefault();
    const input = this.parentNode.querySelector("input");
    const text = input.value;
    if (text) {
      const newLi = document.createElement("li");
      newLi.textContent = text;

      // Add delete link to delete an item
      const deleteLink = document.createElement("a");
      deleteLink.textContent = "Delete";
      deleteLink.className = "delete";
      newLi.appendChild(deleteLink);

      list.appendChild(newLi);
      input.value = "";
    }
  };

  // Event listener's declaration for the 'Add' link
  const addLink = document.querySelector(".add-item");
  addLink.addEventListener("click", addListItem);
});

// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
document.getElementById('more-info').addEventListener('click', (event) => {
  event.preventDefault(); // This will stop the default navigation behavior
  alert("Here's some info");
});
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
document.getElementById('dog').addEventListener('click', (event) => {
  event.stopPropagation(); // This will stop the event from propagating to the 'cat' container
  alert('Bow wow!');
});

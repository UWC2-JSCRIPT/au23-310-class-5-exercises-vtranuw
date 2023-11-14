// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const newLink = document.createElement('a');
newLink.setAttribute('id', 'cta');
newLink.textContent = 'Buy Now!';

const lastParagraph = document.querySelector('main p:last-of-type');
lastParagraph.parentNode.insertBefore(newLink, lastParagraph.nextSibling);


// Access (read) the data-color attribute of the <img>,
// log to the console

const imageElement = document.querySelector('img');
const colorData = imageElement.getAttribute('data-color');
console.log(colorData);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const thirdListItem = document.querySelector('ul li:nth-child(3)');
thirdListItem.className = 'highlight';

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
lastParagraph.remove();

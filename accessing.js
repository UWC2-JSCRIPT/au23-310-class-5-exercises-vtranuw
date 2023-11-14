// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById("weather-head").textContent =
  "February 10 Weather Forecast, Seattle";
// Change the styling of every element with class "sun" to set the color to "orange"
document.querySelectorAll(".sun").forEach( el => {
  el.style.color = "orange";
});

// Change the class of the second <li> from to "sun" to "cloudy"
let sunElements = document.querySelectorAll(".sun");
if (sunElements.length > 1) {
  sunElements[1].className = "cloudy";
}

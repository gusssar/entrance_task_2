var slider = document.getElementById("temp-range-1"); //слайдер
var output = document.getElementById("value-temp-1"); //вывод
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}
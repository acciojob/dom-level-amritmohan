//your JS code here. If required.

var element = document.getElementById("level");
var level = 0;

// Traverse up the DOM tree until reaching the root element
while (element) {
    level++;
    element = element.parentElement;
}
alert("The level of the element is: " + level);

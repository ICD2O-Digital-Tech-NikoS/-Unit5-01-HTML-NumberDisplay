// created by Niko 
// created on: May 27 2024
// user number display

"use strict"

function numberDisplay() {

  let userMax = document.getElementById("userMax").value;
  let userMin = document.getElementById("userMin").value;
  let numbers = "";
  let counter = userMin;

  while (counter <= userMax) {
    numbers = numbers + counter + "<br>";
    counter = counter++;
  }
  document.getElementById("user-info").innerHTML = numbers;
}


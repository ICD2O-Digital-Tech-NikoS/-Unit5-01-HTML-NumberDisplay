// created by Niko 
// created on: May 27 2024
// user number display

"use strict"

// function for user display
function numberDisplay() {

  // get user input for min
  let userMax = document.getElementById("userMax").value;
  // get user input for max
  let userMin = document.getElementById("userMin").value;
  // empty string for displaying numbers
  let numbers = "";
  // counter to see if user Min is equal to user Max
  let counter = userMin;

  // while counter is not equal to userMax, update the counter unti it is equal to userMax
  while (counter <= userMax) {
    numbers = numbers + counter + " ";
    counter++;
  }
  // display the numbers
  document.getElementById("user-info").innerHTML = numbers;

  if (userMin > userMax) {
    document.getElementById("user-info").innerHTML = "Your minimum is greater than your maximum. Please try again.";
  }
}


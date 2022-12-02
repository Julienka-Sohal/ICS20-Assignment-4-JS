// Copyright (c) 2022 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-4-JS/sw.js", {
    scope: "/ICS20-Assignment-4-JS/",
  })
}

//process
function myButtonClicked() {
  const iceCreamTop = document.getElementById("topping").value

  const cost = (3.0 + 0.8) * 0.13
  const plain = 3.0 * 0.13

  if (
    iceCreamTop == "sprinkles" ||
    iceCreamTop == "gummyBears" ||
    iceCreamTop == "chocoChips"
  ) {
    document.getElementById("garnish").innerHTML =
      "Your total comes to $" + cost.fixed(2) + "."
  } else {
    document.getElementById("garnish").innerHTML =
      "Your total comes to $" + plain.fixed(2) + "."
  }
}

// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit5-03-elseIf/sw.js", {
    scope: "/ICS2O-unit5-03-elseIf/",
  })
}

/**
 * this function updates slider value
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * this function
 */
function myButtonClicked() {
  const age = parseInt(document.getElementById("slider").value)

  if (age >= 17) {
    document.getElementById("answer").innerHTML =
      "you can watch an R rated movie alone!"
  } else if (age >= 13) {
    document.getElementById("answer").innerHTML =
      "you can watch a PG-13 rated movie alone!"
  } else if (age >= 5) {
    document.getElementById("answer").innerHTML =
      "you can watch a PG rated movie alone!"
  } else {
    document.getElementById("answer").innerHTML =
      "you're too young to do anything!"
  }
}

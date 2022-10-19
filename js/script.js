// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * Calculate perimeter of circle.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById("radius-of-circle").value)

  // output
  document.getElementById("perimeter-of-circle").innerHTML = Math.PI
    "<p>The Perimeter of the Circle is: " + 2 * Math.PI * radius + "cm" + ". </p>"
}

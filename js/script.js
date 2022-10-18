// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById("radius-of-circle").value)

  // process
  const radius = (2 * 3.14 * radius)

  // output
  document.getElementById("perimeter-of-circle").innerHTML = "The Perimeter of the Circle is:" + radius + "!"
}


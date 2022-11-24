// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Nov 24 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-04-JS/sw.js", {
    scope: "/ICS2O-Unit5-04-JS/",
  })
}

/**
 * This function displays an alert.
 */
function checkEligibility() {
  const day = (document.getElementById("day").value)
  const age = (document.getElementById("age").value)
  
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}

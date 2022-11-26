// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Nov 24 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-04-JS/sw.js", {
    scope: "/ICS2O-Unit5-04-JS/",
  })
}

/**
 * This function displays checks if user is eligible for the discount.
 */
function buttonOnClick() {
  //input
  const day = document.getElementById("day").value
  const age = document.getElementById("age").value

  if (day == "Tuesday" || day == "Thursday") || (age > 12 && age < 25) {
    document.getElementById("eligibility").innerHTML = "You are eligible for the discount."
  } else {
    document.getElementById("eligibility").innerHTML = "no sorrryyy"
  }
}

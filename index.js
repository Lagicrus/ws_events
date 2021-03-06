/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP857256";
    // e.g. return "UP654321";
}

function fn() {
    return "Sam";
}

function sn() {
    return "Riches";
}

function targetTextToConsole(event){
    console.log(event.target.textContent)
}

function tttcAttacher(){
    window.button0.addEventListener("click", targetTextToConsole)
}

function lovelyParaAttacher(){
    window.thisisalovelyparagraph.addEventListener("click", lovelyToggle)
}

function lovelyButtonAttacher(){
    window.button1.addEventListener("click", lovelyToggle)
}

function concatWorker(event){
    window.out1.textContent = window.in1.value + window.in2.value
}

function concatAttacher(){
    window.in1.addEventListener("change", concatWorker);
    window.in2.addEventListener("change", concatWorker)
}

function snitchAttacher(){
    window.mousewatcher.addEventListener("mouseover", snitchUpdater);
    window.mousewatcher.addEventListener("mouseout", snitchUpdater)
}

function reportUpdater(event){
    document.getElementById("report").textContent = "x: " + event.screenX + " y: " + event.screenY
}

function reportAttacher(){
    window.mousereporter.addEventListener("mousemove", reportUpdater)
}

function idValidationWatcher(event){
    if (event.target.value.includes(" ")){
        event.target.classList.add("invalid")
    }
    else{
        event.target.classList.remove("invalid")
    }
}

function idValidationAttacher(){
    document.getElementById("newid").addEventListener("input", idValidationWatcher)
}

/**
 * Utility functions for reference that may be used by tests
 * for various reasons.
 */

function exampleAttacher() {
  window.exampleid.addEventListener("click", exampleEventHandler);
}

function exampleEventHandler(event) {
    console.log("This is a", event.type, "event.");
}

// used by snitchAttacher
function snitchUpdater(event) {
  window.snitch.textContent = (event.type === 'mouseover' ? "IN" : "OUT");
}

// used by lovelyParaAttacher
function lovelyToggle() {
    window.thisisalovelyparagraph.classList.toggle("lovely");
}

/**
 * Add your functions here...
 */


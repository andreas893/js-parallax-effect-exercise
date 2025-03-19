"use strict";
let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let tree = document.getElementById("tree");
let tree4 = document.getElementById("tree4");


window.addEventListener("scroll", () => {
    let value = window.scrollY;
    let parallax = document.getElementsByClassName("parallax");

    text.style.marginTop = `${value*1.5}px`;

    tree4.style.left = `${value*-2}px`;

    tree.style.left = `${value*2.5}px`;
    
    hill1.style.top = `${value*0.5}px`;

    hill4.style.left = `${value*-1}px`;

    hill5.style.left = `${value*1}px`;

    leaf.style.top = `${value*-1}px`;

    
     let scaleValue = Math.max(1 - value * 0.001, 0.2); 
     text.style.transform = `scale(${scaleValue})`;
     text.style.opacity = Math.max(1 - value * 0.001, 0);
     parallax.style.opacity = Math.max(1 - value * 0.001, 0);

})

// back to top
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
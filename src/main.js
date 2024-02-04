"use strict";

let catImages = ["../cat-images/cat1.png","../cat-images/cat2.png","../cat-images/cat3.png","../cat-images/cat4.png","../cat-images/cat5.png","../cat-images/cat6.png","../cat-images/cat7.png","../cat-images/cat8.png","../cat-images/cat9.png","../cat-images/cat10.png","../cat-images/cat11.png","../cat-images/cat12.png","../cat-images/cat13.png","../cat-images/cat14.png","../cat-images/cat15.png","../cat-images/cat16.png","../cat-images/cat17.png"];
let shuffledImages = catImages;
if (!localStorage.getItem("Images")) {
    window.localStorage.setItem("Images", JSON.stringify(shuffledImages));
}
let oldDate = new Date;
let hour = oldDate.getHours();
let day = oldDate.getDay();
let i = 0;


const play = () => {
    let audio = document.querySelector("#cat-meow");
    audio.play();
}

const updateImage = (oldHours, day) => {
    let newDate = new Date();
    let newHour = newDate.getHours();
    let newDay = newDate.getDay();
    i = newDate.getDay();
    shuffledImages = JSON.parse(window.localStorage.getItem("Images"));

    // If the day changes, change the image
    if (oldHours == 23 && newHour == 0) {
        const background = document.querySelector("html").style.backgroundImage = `url(${shuffledImages[i]})`;
        const downloadLink = document.querySelector("#download-link").setAttribute("href", shuffledImages[i]);
    }

    if (day == 6 && newDay == 0) {
        shuffledImages = shuffle(catImages);
        window.localStorage.setItem("Images", JSON.stringify(shuffledImages));
    }

    console.log(shuffledImages[0]);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }


setInterval(function () {
    updateImage(hour, day);
    let date = new Date();
    day = date.getDay();
    hour = date.getHours();
}, 1000);

// Load image from storage as the page loads
window.onload = () => {
    let date = new Date();
    let i = date.getDay();
    shuffledImages = JSON.parse(window.localStorage.getItem("Images"));
    console.log(shuffledImages[i]);
    const background = document.querySelector("html").style.backgroundImage = `url(${shuffledImages[i]})`;
    const downloadLink = document.querySelector("#download-link").setAttribute("href", shuffledImages[i]);
}
window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let minGap = 1;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
let sliderValue1 = document.querySelector('#slider-value1');
let sliderValue2 = document.querySelector('#slider-value2');

function slideOne(){

    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    sliderValue1.textContent = sliderOne.value;
    fillColor();

    var sliderPosition = ( sliderOne.value / sliderOne.max )

    if(sliderOne.value === sliderOne.min) {
        sliderValue1.style.left = ((sliderPosition * 100)  - 7 ) + "%";
    }
    else if ( sliderOne.value === sliderOne.max) {
        sliderValue1.style.left =  ((sliderPosition * 100) - 2 ) + "%";
    }
    else {
        sliderValue1.style.left = ((sliderPosition * 100 - 5)) + "%";
    }

}

function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    sliderValue2.textContent = sliderTwo.value;
    fillColor();

    var sliderPosition = ( sliderTwo.value / sliderTwo.max )

    if(sliderTwo.value === sliderTwo.min) {
        sliderValue2.style.left = ((sliderPosition * 100)  + 2 ) + "%";
    }
    else if ( sliderTwo.value === sliderTwo.max) {
        sliderValue2.style.left =  ((sliderPosition * 100) - 2 ) + "%";
    }
    else {
        sliderValue2.style.left = ((sliderPosition * 100 - 5)) + "%";
    }

}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;

    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1-8.5}% , #3264fe ${percent1}% , #3264fe ${percent2-8}%, #dadae5 ${percent2}%)`;
}



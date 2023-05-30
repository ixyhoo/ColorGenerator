
let body  = document.querySelector("body")
    body.addEventListener("click", function () {

let num1 = Math.floor(Math.random() * 255);
let num2 = Math.floor(Math.random() * 255);
let num3 = Math.floor(Math.random() * 255);
console.log(num1, num2, num3);

let rgbColor = `rgb(${num1}, ${num2}, ${num3})`; 

body.style.backgroundColor = rgbColor;

});

                                                         
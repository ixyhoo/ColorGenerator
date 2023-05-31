    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);


    let rgbColor = `rgb(${num1}, ${num2}, ${num3})`;

    document.body.style.backgroundColor = rgbColor;
    document.body.innerHTML = `<h2>${rgbColor}</h2>`;




                                                         
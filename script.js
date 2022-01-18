const text = document.querySelector(".inputText");  
const divElement = document.querySelector(".div-content");
let arr = [];

function randColor() {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function buttonClick() {
    const newDiv = document.createElement("div");
    newDiv.className = "new-Div";

    newDiv.append(text.value);
    divElement.append(newDiv);
    newDiv.style.background = randColor();
    
    const object = {
        background:  newDiv.style.background,
        text:  text.value,
    };

    arr.push(object);
    console.log(arr);
}

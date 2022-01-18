let text = document.querySelector(".inputText");  
let divElement = document.querySelector(".div-content");

function randColor() {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function buttonClick() {
    let newDiv = document.createElement("div");
    newDiv.className = "new-Div";
    
    newDiv.append(text.value);
    divElement.append(newDiv);
    
    let elements = document.querySelectorAll(".new-Div");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.background = randColor();
    }
}


const container = document.querySelector("#container");
const button = document.querySelector("#btn");
// container.appendChild(button);

function play(){
    let userInput = prompt("How many pixels do you want per side?");
    Number(userInput);
    // console.log(userInput)
    createDivs(userInput);
}
function createDivs(n){
    let num = n*n;
    let boxSize = 100 / n + '%';
    for(let i=0; i < num; i++){
        const newDiv = document.createElement('div');
        newDiv.style["width"] = boxSize;
        newDiv.style["height"] = boxSize;
        newDiv.style["box-sizing"] = "border-box";
        //newDiv.style["border"] = "0.05px solid black";
        newDiv.addEventListener("mouseenter", () => {
            newDiv.style["background-color"] = "red"
        })

        container.appendChild(newDiv);
    }
}

function deleteDivs(n){
    const divList = container.querySelectorAll("div");
    divList.forEach(element => {
        //element.style["background-color"] = "blue";
        element.remove();
    });
}

button.addEventListener("click", () => {
    // console.log("hello");
    const divList = container.querySelectorAll("div");
    divList.forEach(element => {
        element.style["background-color"] = "blue";
    });
    let num = container.querySelectorAll("div");
    num = num.length;
    deleteDivs(num);

    play();
});
// let computedStyle = window.getComputedStyle(element);
// let backgroundColor = computedStyle.backgroundColor;
// container.appendChild(button);

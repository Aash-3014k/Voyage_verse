let btn = document.querySelector(".button");
console.log(btn);


let mode = "light";

btn.addEventListener("click", () => {
    let linkElement = document.querySelector("#theme-stylesheet");
    
    if (mode == "light") {
        linkElement.setAttribute("href", "style.css");
        mode = "dark"; 
    } else {
        linkElement.setAttribute("href", "styler.css");
        mode = "light";  
    }
});

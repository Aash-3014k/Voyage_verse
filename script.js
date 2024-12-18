let btn = document.querySelector(".button");


let mode = "Dark";

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

let key="o89TTvZX243YSk2ZqljP0FM5saP3_Mq81OabNWNHlVk"

let url="https://api.unsplash.com/search/photos?page=1&query=banaras&client_id=o89TTvZX243YSk2ZqljP0FM5saP3_Mq81OabNWNHlVk"


let result;
let head =document.querySelectorAll(".popp");
let img = document.querySelectorAll(".i_mg");
let response = async () =>{
    let j=0;
    for(let i=0;i<8;i++){
        let new_url=`https://api.unsplash.com/search/photos?page=1&query=${wellKnownTouristDestinations[i]}&client_id=o89TTvZX243YSk2ZqljP0FM5saP3_Mq81OabNWNHlVk`
        let data = await fetch(new_url)
        result = await data.json()
        let url_img=result.results[9].urls.full
        img[j].setAttribute("src" , url_img)
        head[j].innerText=wellKnownTouristDestinations[i]
        j++;
    }
   

}
response();



let method = document.querySelector(".more_button1")
let popup
let box

method.addEventListener("click",()=>{

    popup = document.querySelector(".box_click_curr")
    box = document.querySelectorAll(".box1")
    box.forEach((num)=>{
        num.style.display="none" 
    })
    popup.style.display="flex"
    
})

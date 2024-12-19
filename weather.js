let place = document.querySelector("input")

let btn=document.querySelector("button")

let api_key="0d00f044e7d063de41c720ab849cbed6"

let data;
let para = document.createElement("p")
let parent = document.querySelector(".result")
 para.style.color="green"

let infom = async () =>{
    let base_url=`https://api.openweathermap.org/data/2.5/weather?q=${place.value},uk&APPID=0d00f044e7d063de41c720ab849cbed6`
    let response = await fetch(base_url)
    data = await response.json()
    
    // para.innerText=""
    // para.innerText=`temperature : ${data.current.temp_c}`
    // parent.appendChild(para);
}



btn.addEventListener("click" , infom)



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


let new_box = [];

for(let i=0;i<TouristDestinations.length;i++){
    let b_ox = document.createElement('div');
    b_ox.setAttribute("class", "card")
    let img_div=document.createElement('img')
    img_div.setAttribute("class" , "im_g")
    let pop_up = document.createElement('div');
    pop_up.setAttribute("class", "popup")
    let pop_p = document.createElement('p');
    pop_p.setAttribute("class", "popp")
    let pop_add = document.createElement('h3');
    pop_add.setAttribute("class", "place_add")
    let b_tn = document.createElement('button')
    b_tn.innerText="Add to whislist";
    pop_up.appendChild(pop_p);
    pop_up.appendChild(pop_add);
    pop_up.appendChild(b_tn);
    b_ox.appendChild(img_div);
    b_ox.appendChild(pop_up);
    new_box.push(b_ox);
}

let result;
let see_All = document.querySelector(".see1");
let big_card_box = document.querySelector(".destination-cards");
let response = async () =>{
    for(let i=0;i<50;i++){
        let new_url=`https://api.unsplash.com/search/photos?page=1&query=${TouristDestinations[i].name}&client_id=o89TTvZX243YSk2ZqljP0FM5saP3_Mq81OabNWNHlVk`
        let data = await fetch(new_url)
        result = await data.json()
        let url_img=result.results[4].urls.full
        let x=new_box[i].querySelector(".im_g");
        x.setAttribute("src",url_img);
        let y=new_box[i].querySelector(".popp");
        y.innerText=TouristDestinations[i].name;
        let z=new_box[i].querySelector(".place_add");
        z.innerText=TouristDestinations[i].address;
    }  
}

for(let i=0;i<8;i++){
    big_card_box.appendChild(new_box[i]);
}


let loopIndex = 8;

let see_4 = () => {
    
    if(loopIndex>50) return;

    for (let i = loopIndex; i < loopIndex + 4 && loopIndex<TouristDestinations.length; i++) {
        big_card_box.appendChild(new_box[i]);
    }
    loopIndex += 4;
};

see_All.addEventListener("click", see_4);


response();

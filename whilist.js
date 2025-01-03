let key="wZxrQQw8HCm2mHEd5wmIysUkhwqODwhBwR8BL45B6Jg"

let url="https://api.unsplash.com/search/photos?page=1&query=banaras&client_id=wZxrQQw8HCm2mHEd5wmIysUkhwqODwhBwR8BL45B6Jg"


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
    let b_ox2 = document.createElement('div');
    b_ox2.setAttribute("class", "btns")
    b_ox2.style.display="flex"
    b_ox2.style.justifyContent="spacearound" 
    let b_tn = document.createElement('button')
    b_tn.innerText="Reviews";
    let b_tn2=document.createElement('button')
    b_tn2.innerText="Add"
    b_tn2.style.marginTop="1px"
    b_tn2.setAttribute("class", "b_tn2")
    b_tn2.style.display="none"
    b_ox2.appendChild(b_tn)
    b_ox2.appendChild(b_tn2)
    pop_up.appendChild(pop_p);
    pop_up.appendChild(pop_add);
    pop_up.appendChild(b_ox2);
    b_ox.appendChild(img_div);
    b_ox.appendChild(pop_up);
    new_box.push(b_ox);
}

let big_card_box = document.querySelector(".Main1_destination-cards");
let response = async () =>{
    for(let i=0;i<TouristDestinations.length;i++){
        let new_url=`https://api.unsplash.com/search/photos?page=1&query=${TouristDestinations[i].name}&client_id=wZxrQQw8HCm2mHEd5wmIysUkhwqODwhBwR8BL45B6Jg`
        let data = await fetch(new_url)
        let result = await data.json()
        let url_img=result.results[Math.floor(Math.random()*10)].urls.full
        let x=new_box[i].querySelector(".im_g");
        x.setAttribute("src",url_img);
        let y=new_box[i].querySelector(".popp");
        y.innerText=TouristDestinations[i].name;
        let z=new_box[i].querySelector(".place_add");
        z.innerText=TouristDestinations[i].address;

    }  
}


for(let i=0;i<TouristDestinations.length;i++){
    new_box[i].style.display="none";
    big_card_box.appendChild(new_box[i]);

}




response();

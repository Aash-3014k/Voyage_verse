let login_btn = document.querySelector(".btn2 button");
let sign_up_btn = document.querySelector(".btn1 button");
let login_card = document.querySelector(".login_card");
let sign_up_card = document.querySelector(".signin_card")
let body = document.querySelector('body'); 
let head1 =document.querySelector("#head1");
let head2 =document.querySelector("#head2");
let Main =document.querySelector("main");
let footer =document.querySelector("footer");
let line = document.querySelectorAll("hr")
let logout_btn=document.querySelector(".btn4");
let profile = document.querySelector(".btn3")
let curr_card=document.querySelector(".curr_converter_div")
let weather_card=document.querySelector(".weather_card")

function login_card_app(){
    head1.style.display = "none";
    Main.style.display = "none";
    footer.style.display = "none";
    line.forEach(hr => hr.style.display = "none");
    head2.style.display = "none";
    body.style.display = "flex";
    login_card.style.display = "flex";
    sign_up_card.style.display = "none";
    curr_card.style.display = "none";
    weather_card.style.display="none";
}
function signup_card_app(){
    head1.style.display = "none";
    Main.style.display = "none";
    line.forEach(hr => hr.style.display = "none");
    head2.style.display = "none";
    footer.style.display = "none";
    body.style.display = "flex";
    sign_up_card.style.display = "flex";
    login_card.style.display = "none";
    curr_card.style.display = "none";
    weather_card.style.display="none";
}

login_btn.addEventListener("click" ,login_card_app);
sign_up_btn.addEventListener("click" ,signup_card_app);


function toggleMenu() {
    const menu = document.querySelector('.menu1');
    menu.classList.toggle('show');
}

document.querySelector(".curr_btn").addEventListener("click",(evt)=>{
    evt.preventDefault();
    head1.style.display = "none";
    Main.style.display = "none";
    line.forEach(hr => hr.style.display = "none");
    head2.style.display = "none";
    footer.style.display = "none";
    body.style.display = "flex";
    sign_up_card.style.display = "none";
    login_card.style.display = "none";
    curr_card.style.display = "block";
    weather_card.style.display="none";

})
document.querySelector(".weather_btn").addEventListener("click",(evt)=>{
    evt.preventDefault();
    head1.style.display = "none";
    Main.style.display = "none";
    line.forEach(hr => hr.style.display = "none");
    head2.style.display = "none";
    footer.style.display = "none";
    body.style.display = "flex";
    sign_up_card.style.display = "none";
    login_card.style.display = "none";
    curr_card.style.display = "none";
    weather_card.style.display="block";
})

function back_fun(){
   head1.style.display = "flex";
   Main.style.display = "block";
   footer.style.display = "block";
   line.forEach(hr => hr.style.display = "block");
   head2.style.display = "block";
   body.style.display = "block";
   login_card.style.display = "none";
   sign_up_card.style.display = "none";
   logout_btn.style.display="none";
   profile.style.display="none";
   login_btn.style.display="block";
   sign_up_btn.style.display="block";
   document.querySelector(".container").style.display="none"
   curr_card.style.display = "none";
   weather_card.style.display = "none";
   document.querySelector(".menu1").style.marginRight="27vw"
   document.querySelector("#user_p").style.display="none";
}

function back(){
    head1.style.display = "flex";
    Main.style.display = "block";
    footer.style.display = "block";
    line.forEach(hr => hr.style.display = "block");
    head2.style.display = "block";
    body.style.display = "block";
    login_card.style.display = "none";
    sign_up_card.style.display = "none";
    logout_btn.style.display="block";
    profile.style.display="block";
    login_btn.style.display="none";
    sign_up_btn.style.display="none";
    document.querySelector(".container").style.display="none"
    document.querySelector(".menu1").style.marginRight="16.5vw"
    curr_card.style.display = "none";
    weather_card.style.display = "none";
    document.querySelector("#user_p").style.display="block";
    document.querySelector(".edit_details").style.display="none";
}
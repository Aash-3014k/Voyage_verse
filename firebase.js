import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
    getAuth , 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendEmailVerification 
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

import { getFirestore,setDoc ,collection ,getDoc ,doc,updateDoc,onSnapshot } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"; 

  const firebaseConfig = {
    apiKey: "AIzaSyBs65niGqBIx8SF6eq_9ByQOGLef5zIMuM",
    authDomain: "voyageverse-b5ce2.firebaseapp.com",
    projectId: "voyageverse-b5ce2",
    storageBucket: "voyageverse-b5ce2.firebasestorage.app",
    messagingSenderId: "161755186506",
    appId: "1:161755186506:web:7c5064b3dda52f2129edb3"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);
  
 async function signup(email,password){
    try{
        let respond = await createUserWithEmailAndPassword (auth ,email,password);
        await sendEmailVerification(auth.currentUser);
        console.log(respond.user);
        alert("Welcome");    
        database(respond.user);
    }
    catch(error){
        console.log("error");
        alert("error");
    } 
 }

 async function Login(email,password){
    try{
        let respond = await signInWithEmailAndPassword(auth ,email,password);
        console.log(respond.user);
        alert("Welcome back");
    }
    catch(error){
        console.log("error");
        alert("error");
    }
 }

 onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user");
      resetform();
      getData(user.uid);
      console.log(user.uid);
      document.querySelector(".btn3").addEventListener("click" , ()=>{
        profilecard();
      })
      document.querySelector("#update").addEventListener("click",(event)=>{
        event.preventDefault();
        UP_date(user.uid)
      })
      document.querySelectorAll(".b_tn2").forEach((button) =>{
        button.style.display="block";
      })
      document.querySelector(".back-btn2").addEventListener("click",(event)=>{
        event.preventDefault();
        resetform();
        reset_2();
      })

      document.querySelector(".back-btn3").addEventListener("click",(evt)=>{
        evt.preventDefault();
        resetform();
        reset3();
      
    })
      
    } else {
      document.querySelector(".profile-card").style.display="none"
      console.log("logout");
      backword();
      document.querySelectorAll(".b_tn2").forEach((button) =>{
        button.style.display="none";
      })
      document.querySelector(".back-btn2").addEventListener("click",(event)=>{
        event.preventDefault();
        backword();
        reset_2();
      })
      document.querySelector(".back-btn3").addEventListener("click",(evt)=>{
        evt.preventDefault();
        backword();
        reset3();
    })
    }
  });

document.querySelector(".btn4 button").addEventListener("click" , async()=>{
    try{
        await signOut(auth);
        console.log("logout");
        alert("logout_sucessfully");
    }
    catch{
        console.log("error");
        alert("error");
    }

})
document.querySelector(".button2").addEventListener("click" , async () =>{
   try{
    let  respond = await signInWithPopup(auth, provider);
    console.log(respond);
    alert("welcme");
    database(respond.user);
   }catch{
    console.log("error");
    alert("error");
   }

})
document.querySelector(".button2L").addEventListener("click" , async () =>{
    try{
     let  respond = await signInWithPopup(auth, provider);
     console.log(respond);
     alert("welcme back");
    }catch{
     console.log("error");
     alert("error");
    }
 
 })

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signupForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let Semail =document.querySelector(".signupEmail");
      let Spass= document.querySelector(".signupPass");
      signup(Semail.value , Spass.value);
  
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.LoginForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let Lemail =document.querySelector(".LoginEmail");
      let Lpass= document.querySelector(".LoginPass");
      Login(Lemail.value , Lpass.value);
    });
});

function resetform(){
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
}

function backword(){
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

async function database(user) {
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    id: user.uid,
    Name: "User",
    Email: user.email,
    state: "",
    city: "",
    country: "",
    Phone:""
  });
  console.log("Document written with ID: ", user.uid);
}

function getData(id) {
  const docRef = doc(db, "users", id);

  onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      const info = docSnap.data();
      document.querySelector(".profile-info h2").innerText = info.Name;
      document.querySelector(".profile-info p").innerText = info.city + ", " + info.country;
      document.querySelector(".detailsS").innerHTML = `<strong style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">State: </strong> ${info.state}`;
      document.querySelector(".detailsCo").innerHTML = `<strong style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Country: </strong> ${info.country}`;
      document.querySelector(".detailsC").innerHTML = `<strong style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">City: </strong> ${info.city}`;
      document.querySelector(".detailsE").innerHTML = `<strong style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Email: </strong> ${info.Email}`;
      document.querySelector(".detailsTel").innerHTML = `<strong style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Phone: </strong> ${info.Phone}`;
    } else {
      console.log("No such document!");
    }
  });
}


function profilecard(){
    head1.style.display = "none";
    Main.style.display = "none";
    line.forEach(hr => hr.style.display = "none");
    head2.style.display = "none";
    footer.style.display = "none";
    body.style.display = "flex";
    sign_up_card.style.display = "none";
    login_card.style.display = "none";
    document.querySelector(".container").style.display="flex"
}

document.querySelector(".back_btn_img").addEventListener("click",(event)=>{
  event.preventDefault();
  resetform();
})

document.querySelector(".edit-btn").addEventListener("click", (event) => {
  event.preventDefault();
  resetform();
  edit_card();

});

function edit_card(){
  head1.style.display = "none";
    Main.style.display = "none";
    line.forEach(hr => hr.style.display = "none");
    head2.style.display = "none";
    footer.style.display = "none";
    body.style.display = "flex";
    sign_up_card.style.display = "none";
    login_card.style.display = "none";
    document.querySelector(".edit_details").style.display="flex"
}

async function UP_date(id){
    const docRef = doc(db, "users", id);
    await updateDoc(docRef, {
    Name: document.querySelector("#name").value,
    Phone: document.querySelector("#phone").value,
    city: document.querySelector("#city").value,
    country: document.querySelector("#country").value,
    state: document.querySelector("#state").value
  });
  document.querySelector(".edit_details").style.display="none"
  resetform();
}
function reset_2(){
  amount.value="";
  msg.innerText="Amount";
  const textToSelect = 'USD';
  const textToSelect2 = 'INR';
  
  for (let i = 0; i < dropdowns[0].options.length; i++) {
    if (dropdowns[0].options[i].text === textToSelect) {
      dropdowns[0].selectedIndex = i;
      let img_after_from = document.querySelector(".flag1");
      img_after_from.src = "https://flagsapi.com/US/flat/64.png";
      break;
    }
  }
  
  for (let i = 0; i < dropdowns[1].options.length; i++) {
    if (dropdowns[1].options[i].text === textToSelect2) {
      dropdowns[1].selectedIndex = i;
      let img_after_to = document.querySelector(".flag2");
      img_after_to.src = "https://flagsapi.com/IN/flat/64.png";
      break;
    }
  }
}
function reset3(){
  console.dir("hio");
  let place=document.querySelector(".place");
  place.value="";
  let all_div=document.querySelectorAll(".day-weather");
  for (let i = 0; i < 4; i++) {
    let obj = all_div[i];
    console.log(obj);
    if (i === 0) {
        obj.children[0].innerText = `TEMP`;
        obj.children[1].innerText = `CONDITION`;
        obj.children[2].innerText = `HUMIDITY`;
    }
    else{
        obj.children[0].innerText = `AVG TEMP`;
        obj.children[1].innerText = `AVG CONDITION`;
        obj.children[2].innerText = `AVG HUMIDITY`;
    }
}
}

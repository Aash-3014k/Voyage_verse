const link =
  "https://api.exchangerate-api.com/v4/latest/USD";

const dropdowns = document.querySelectorAll(".opt");
const btn2 = document.querySelector("#exchange");
const fromCurr = document.querySelector(".from");
const toCurr = document.querySelector(".to");
const msg = document.querySelector("#result");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    evt.preventDefault();
    updateFlag(evt.target);
  });
}
let data2;
let amount;
const updateExchangeRate = async () => {
  amount = document.querySelector(".amount");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  let response2 = await fetch(link);
  data2 = await response2.json();
  let conver1=toCurr.value;
  let conver2=fromCurr.value;
  let rate;
  if(conver1=="USD") rate=1;
  else rate=data2.rates[conver1];
  let rate2 ;
  if(conver1=="USD") rate2=1;
  else rate2=data2.rates[conver2];
  let finalAmount = amtVal * (rate/rate2);
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn2.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});


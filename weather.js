let api_key = "c5311085998f4255bb09f63cdddd3b1f";

let base_url = "https://api.opencagedata.com/geocode/v1/json?q=Agra,Uttar%20Pradesh&key=c5311085998f4255bb09f63cdddd3b1f";

async function weather(coordinate) {
    let base_url_dyna = `https://api.weatherapi.com/v1/forecast.json?key=0011b2c0102f4317a0d83809241512&q=${coordinate}&days=5`;
    let forecast = await fetch(base_url_dyna);
    let q = await forecast.json();
    console.log(q);

    let all_div = document.querySelectorAll(".day-weather");

    for (let i = 0; i < 4; i++) {
        let obj = all_div[i];
        console.log(obj);
        if (i === 0) {
            obj.children[0].innerText = `TEMP: ${q.current.temp_c}°C`;
            obj.children[1].innerText = `CONDITION: ${q.current.condition.text}`;
            obj.children[2].innerText = `HUMIDITY: ${q.current.humidity}%`;
        }
        else{
            obj.children[0].innerText = `TEMP: ${q.forecast.forecastday[i-1].day.avgtemp_c}°C`;
            obj.children[1].innerText = `CONDITION: ${q.forecast.forecastday[i-1].day.condition.text}`;
            obj.children[2].innerText = `HUMIDITY: ${q.forecast.forecastday[i-1].day.avghumidity}%`;
        }
    }
}

async function get_coordinate(place) {
    let base_url = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=c5311085998f4255bb09f63cdddd3b1f`;
    let respond = await fetch(base_url);
    let q = await respond.json();
    let coordinate_str = `${q.results[0].geometry.lat},${q.results[0].geometry.lng}`;
    weather(coordinate_str);
}

document.querySelector(".buttonW").addEventListener("click", () => {
    let place_input = document.querySelector(".place");
    let str = place_input.value;
    str = str.replace(/ /g, "%20");
    get_coordinate(str);
});

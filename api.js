const apiKey = "dc3ef453ab3d9fcae3c05cb7809a765b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search i")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    // console.log(data);




document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = "Temp: " + Math.round(data.main.temp) + "°F";
document.querySelector(".temp_high").innerHTML = "High: " + Math.round(data.main.temp_max) + "°F";
document.querySelector(".temp_low").innerHTML = "Low: " + Math.round(data.main.temp_min) + "°F";

// How do I make this not load until someone has searched for something?--- Returning undefined because nothing has been searched yet(no city to input )
document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

checkWeather();

// -------------------
const clearInput = () => {
    const input = document.getElementsByClassName("button1")[0];
    input.value = "";
  }
  
//   const clearBtn = document.getElementById("clear-btn");
//   clearBtn.addEventListener("click", clearInput);
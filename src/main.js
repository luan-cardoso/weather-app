//Consts
const apiKey = "bcd662e5b10294de1c174173c9c1261f";
const countryFlag = "https://flagsapi.com/BR/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search");


const cityElement = document.querySelector("#city-name");
const tempElement = document.querySelector("#temperature span");
const timeElement = document.querySelector("#time");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryIconElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const info = document.querySelector("#info");



//Func
const getData = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

        const res = await fetch(apiUrl);
        const data = await res.json();

        return data;
    };

const showData = async (city) => {
    const data = await getData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryIconElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerHTML = `${data.wind.speed}km/h`

    info.classList.remove("hide")
    
    };




//Events
searchButton.addEventListener("click", (e) => {
    e.preventDefault()

    const city = cityInput.value;

    showData(city);
});




//Pesquisar com Enter
cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value

        showData(city);
    }

})

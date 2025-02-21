const inputBox= document.querySelector('.input-box')
const searchBtn= document.querySelector('#searchBtn')
const weatherImg= document.querySelector('.weather-image')
const temperature= document.querySelector('.temperature')
const description= document.querySelector('.description')
const humidity= document.querySelector('#humidity')
const windSpeed= document.querySelector('#wind-speed')
const locationNotFound= document.querySelector('.location-not-found')
const weatherBody= document.querySelector('.weather-body')


async function checkWeather(city){
    const apiKey= "d9ec4bae2de278cebe73452fbd26a88d";
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const weatherData= await fetch(`${url}`)
    .then(response=> response.json())
    .catch(error=> console.error('Error:', error));
    

    if(weatherData.cod===`404`){
        locationNotFound.style.display='flex';
        weatherBody.style.display='none';
        return;
    }else{
        locationNotFound.style.display='none';
        weatherBody.style.display='flex';
    }
    
    temperature.innerHTML= `${Math.round(weatherData.main.temp-273.15)}°C`;
    description.innerHTML= `${weatherData.weather[0].description}`;
    humidity.innerHTML= `${weatherData.main.humidity}%`;
    windSpeed.innerHTML= `${weatherData.wind.speed}Km/Hr`;


    switch(weatherData.weather[0].main){
        case 'Clouds':
            weatherImg.src= "./assets/cloud.png";
            break;
        case 'Clear':
            weatherImg.src= "./assets/clear.png";
            break;
        case 'Mist':
            weatherImg.src= "./assets/mist.png";
            break;
        case 'Rain':
            weatherImg.src= "./assets/rain.png";
            break;
        case 'Snow':
            weatherImg.src= "./assets/snow.png";
    }
    
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})


const API_key = `f7089fed3c5756f75f111c2ab01278a3`
const form = document.querySelector('form')
const weather = document.querySelector('#weather')
const search = document.querySelector('#search')
const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    weather.innerHTML = `<h1> Loading.... </h1>`
    const response =  await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}
const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = alert("City not found!")
        return;
    }
    weather.innerHTML = `
    <div>
        <img src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="loading">
    </div>
    <div> 
        <h2>${data.main.temp}  °C</h2>
        <h4>${data.weather[0].main}</h4>
    </div>`
}
form.addEventListener("submit",function(event){
    getWeather(search.value)
    event.preventDefault();
})
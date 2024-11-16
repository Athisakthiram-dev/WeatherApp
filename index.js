const apikey="4a3beacd7d67e8c3d819b98189262de4"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const city=document.querySelector(".searchInput");
const searchBtn=document.querySelector(".searchBtn");
const weatherIcon=document.querySelector(".weatherImg");
async function checkWeather(city){
const response=await fetch(apiurl+city+`&appid=${apikey}`);
if(response.status==404){
document.querySelector(".error").style.display="block";
document.querySelector(".det").style.display="none";
}
const data=await response.json();
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+" km/hr";
if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png";
}else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png";
}else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png";
}else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png";
}else if(data.weather[0].main=="Humidity"){
    weatherIcon.src="images/humidity.png";
}else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png";
}else if(data.weather[0].main=="Snow"){
    weatherIcon.src="images/snow.png";
}
document.querySelector(".det").style.display="block";
document.querySelector(".error").style.display="none";

}
searchBtn.addEventListener("click",()=>{
    checkWeather(city.value);
})

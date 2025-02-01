
let convert;
let input = document.getElementsByTagName("input")[0];
let search = document.getElementsByTagName("button")[0];
search.addEventListener("click",function (){
apitrial();

})

async function apitrial(){
   try{
        let cityname = input.value;
        let api = `https://api.weatherapi.com/v1/current.json?key=577b77d6a9f94e2c90485207251001&q=${cityname}&aqi=yes`
        let another = await fetch(api);
        convert  = await another.json()
        console.log(convert);
    
        let temperature = document.getElementsByClassName("temperatureinfo")[0];
        let humidity = document.getElementsByClassName("humidityinfo")[0];
        let windinfo = document.getElementsByClassName("windinfo")[0];
        let realtemperature = document.getElementsByClassName("realtemperature")[0];
        let realhumidity = document.getElementsByClassName("realhumidity")[0];
        let realwind = document.getElementsByClassName("realwind")[0];
    temperature.innerHTML=` 
       <p id="gap">Temperature is ${convert.current.temp_c}°C</p>
        <p id="gap">Temperature in F ${convert.current.temp_f}°F</p>
        <p id="gap">Feels Like ${convert.current.feelslike_c}°C</p>
    `
    humidity.innerHTML = 
    `        <p id="gap">Humidity is ${convert.current.humidity}%</p>
            <p id="gap">Precipitation is ${convert.current.precip_mm}mm</p>
            <p id="gap">Pressure is ${convert.current.pressure_mb}mb</p>`;
    
    windinfo.innerHTML = 
    `       <p id="gap">Wind is ${convert.current.wind_kph} kph </p>
            <p id="gap">Heat index is ${convert.current.heatindex_c}°C </p>
            <p id="gap">Air Quality Index is${convert.current.air_quality.pm10}</p>`
    
    realtemperature.innerHTML = ` <img src="${convert.current.condition.icon}"  class = "image" alt=""> <h3 class = "tempdecor">  ${convert.current.temp_c}°C </h3>`
    realhumidity.innerHTML = `<img src="5664993.png"  class = "humidityimage" alt=""> <h3 class = "humidecor">  ${convert.current.humidity}% </h3>`
    realwind.innerHTML = `<img src="18719304.png"  class = "windimage" alt="">  <h3 class = "windecor">  ${convert.current.wind_kph}% </h3> `
    
   } catch(error){
        alert("Enter the valid location");
   }
}

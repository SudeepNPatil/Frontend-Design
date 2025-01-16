const root = document.getElementById("root");
const subroot = document.getElementById("subroot");

const getlocation = document.getElementById("getlocation")
const getweather = document.getElementById("getweather")

let latitude;
let longitude;

getlocation.addEventListener("click", () => {
    const position = navigator.geolocation.getCurrentPosition(

        function (position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            root.innerHTML = `<p>latitude : ${latitude} </p>
                       <p>longitude : ${longitude} </p>`

        }
    )
});


getweather.addEventListener("click", () => {

    if (latitude === undefined || longitude === undefined) {
        alert("Please click 'Get Location' first to fetch your location.");
        return;
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,wind_speed_10m,precipitation,cloudcover`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log('Weather Data:', data);
            console.log(data)
            /*  console.log(`temperature : ${data.hourly.temperature_2m[0]} °C`);
             console.log(`time : ${data.hourly.time[0]}`);
             console.log(`WindSpeed : ${data.hourly.wind_speed_10m[0]} km/h`);
             console.log(`cloudcover : ${data.hourly.cloudcover[0]} %`);
             console.log(`precipitation : ${data.hourly.precipitation[0]} mm`); */

            let temperature = data.hourly.temperature_2m[0];
            let time = data.hourly.time[0];
            let WindSpeed = data.hourly.wind_speed_10m[0];
            let cloudcover = data.hourly.cloudcover[0];
            let precipitation = data.hourly.precipitation[0];

            subroot.innerHTML = `<p>temperature : ${temperature} C</p>
                              <p>time : ${time} </p>
                              <p>WindSpeed : ${WindSpeed} km/h</p>
                              <p>cloudcover : ${cloudcover} %</p>
                              <p>precipitation : ${precipitation} mm</p>`

        })

});

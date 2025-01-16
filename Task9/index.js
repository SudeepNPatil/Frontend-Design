const output = document.getElementById("output")
const getmylocation = document.getElementById("getmylocation")

getmylocation.addEventListener("click", () => {

    const position = navigator.geolocation.getCurrentPosition(function (position) {

        console.log(position);
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude

        output.innerHTML = `<p> latitude : ${latitude} </p>
                              <p> longitude : ${longitude} </p> `

    })

});








//const { latitude, longitude } = position.coords;   

/* navigator.geolocation.getCurrentPosition( function (position) {
    let latitude= position.coords.latitude
    console.log("latitude",latitude)}) */


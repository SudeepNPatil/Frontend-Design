console.log("hello from script")

let getform = document.getElementById("form")
let inputvalue = document.getElementById("input");
let list = document.getElementById("list");

getform.addEventListener("submit", function (event) {

    event.preventDefault();
    let myvalue = inputvalue.value.trim()

    console.log(myvalue);

    let li = document.createElement("li")
    li.textContent = myvalue;
    list.appendChild(li);
    inputvalue.value = "";

})

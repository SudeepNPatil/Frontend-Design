console.log("hello from script")

const main = document.getElementById("main")
const num = document.getElementById("num")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

/* 
console.log(num.textContent)
console.log(typeof num.textContent)
const test = Number(num.textContent);
console.log(typeof test) */

main.style.textAlign = "center"
btn1.style.fontSize = "20px"
btn2.style.fontSize = "20px"

btn1.style.color = "blue"
btn2.style.color = "red"

num.style.color = "green"

btn1.style.cursor = "pointer"

btn2.style.cursor = "pointer"

btn1.addEventListener("click", () => {

    let numtoprint = Number(num.textContent);
    numtoprint = numtoprint + 1;
    num.textContent = numtoprint;

    console.log(num.textContent)
})

btn2.addEventListener("click", () => {
    num.textContent = 0;
})
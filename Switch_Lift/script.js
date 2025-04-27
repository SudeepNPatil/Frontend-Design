console.log("hello from script")

const input1 = document.getElementById("input1")

const input2 = document.getElementById("input2")

const body = document.getElementById("body")

const main = document.getElementById("main")

const btn = document.getElementById("btn")



let flore;

let lift;

function myfun(parameter) {

    console.log(parameter)
    console.log("up btn cllicked")

    setInterval(function () {

        console.log("interval started")

        const lif = document.getElementById("lift1")


        lif.style.top = lif.offsetTop - 40 + "px";

        console.log(lif.offsetTop)

    }, 1000)

}


btn.addEventListener("click", (event) => {

    console.log(event)

    if (input1.value == '' || input2.value == '') return alert("Plese enter valid input !")

    flore = Number(input1.value)
    lift = Number(input2.value)

    console.log(flore, lift)

    console.log(main)

    main.remove()

    console.log(body)

    let count = flore;

    for (i = 1; i <= flore; i++) {

        let div = document.createElement("div")

        let childdiv = document.createElement("div")

        childdiv.setAttribute('class', 'childdiv')

        let button1 = document.createElement("button")

        button1.textContent = "Up"

        let p = document.createElement("p")

        p.textContent = `${count} flore`

        let button2 = document.createElement("button")

        button2.textContent = "down"

        button1.setAttribute('class', 'upbtn')

        button2.setAttribute('class', 'downbtn')

        button1.setAttribute('id', `btnup${count}`)

        div.setAttribute('class', 'flors')

        console.log(div)

        body.appendChild(div)

        div.appendChild(childdiv)

        childdiv.appendChild(button1)

        childdiv.appendChild(p)

        childdiv.appendChild(button2)


        const mybtn = document.getElementById(`btnup${count}`)

        mybtn.addEventListener('click', (mybtn) => {

            console.log(mybtn)

            const intervalid = setInterval(function () {

                console.log("interval started")

                let btnlocation = mybtn.target.offsetTop;

                console.log(btnlocation)

                const lif = document.getElementById("lift1")

                let liftlocation = Math.abs(lif.offsetTop)

                console.log(liftlocation)

                if (btnlocation <= liftlocation) {

                    clearInterval(intervalid)
                }

                lif.style.top = lif.offsetTop - 40 + "px";

            }, 1000)





        });

        count--

    }

    let lifts_tub = document.createElement("div")

    lifts_tub.setAttribute('class', 'lifts-contenar')

    body.appendChild(lifts_tub)

    for (i = 1; i <= lift; i++) {

        let lifts = document.createElement("div")

        lifts.setAttribute('class', 'lifts')

        lifts.setAttribute('id', `lift${i}`)

        console.log(lifts)

        lifts_tub.appendChild(lifts)
    }


})









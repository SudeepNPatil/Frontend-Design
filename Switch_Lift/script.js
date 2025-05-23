
console.log("hello from script")

let flag = false;

const input1 = document.getElementById("input1")

const input2 = document.getElementById("input2")

const body = document.getElementById("body")

const main = document.getElementById("main")

const btn = document.getElementById("btn")

let floor;

let lift;

let queue1 = [];
let queue2 = [];

btn.addEventListener("click", (event) => {

    console.log(event)

    if (input1.value == '' || input2.value == '') return alert("Plese enter valid input !")

    floor = Number(input1.value)
    lift = Number(input2.value)

    console.log(floor, lift)

    console.log(main)

    main.remove()

    console.log(body)

    let count = floor;

    for (i = 1; i <= floor; i++) {

        let div = document.createElement("div")

        let childdiv = document.createElement("div")

        childdiv.setAttribute('class', 'childdiv')

        let button1 = document.createElement("button")

        button1.textContent = "Up"

        let p = document.createElement("p")
        p.setAttribute('id', `floorcount${count}`)

        p.textContent = `${count} floor`

        let button2 = document.createElement("button")

        button2.textContent = "down"

        button1.setAttribute('class', 'upbtn')

        button2.setAttribute('class', 'downbtn')

        button1.setAttribute('id', `btnup${count}`)

        button2.setAttribute('id', `btndown${count}`)

        div.setAttribute('class', 'flors')

        console.log(div)

        body.appendChild(div)

        div.appendChild(childdiv)

        childdiv.appendChild(button1)

        childdiv.appendChild(p)

        childdiv.appendChild(button2)


        const mybtn = document.getElementById(`btnup${count}`)


        mybtn.addEventListener('click', (mybtn) => {

            /*  console.log(mybtn) */

            let so = mybtn.target.id[5]

            const floorcount = document.getElementById(`floorcount${so}`);

            const flrcount = floorcount.textContent[0];

            console.log(flrcount)

            let val = flrcount;

            let va = Number(val)

            let floorlocation = (va - 1) * 123;

            let funforlifyid = getliftid(queue1, queue2, va)

            console.log(funforlifyid)

            const lif = document.getElementById(funforlifyid)

            if (lif == null) {

                let dd;

                for (let l = 0; l < queue1.length; l++) {

                    let lol = document.getElementById(`lift${l}`)
                    let lol2 = lol.getAttribute('setposition')
                    let lol3 = Number(lol2)
                    dd = lol3
                    if (lol3 == va) {

                        let leftdoor = document.getElementById(`leftdoor${l}`)
                        let rightdoor = document.getElementById(`rightdoor${l}`)

                        let per = 90;
                        let doorbg = setInterval(function () {

                            console.log("lift interval started")
                            per = per - 1;

                            if (per <= 5) {
                                clearInterval(doorbg)
                                setTimeout(() => {
                                    leftdoor.style.background = ''
                                    rightdoor.style.background = ''
                                    rightdoor.style.borderLeft = '1px solid black'
                                }, 1500)

                            }

                            leftdoor.style.background = `linear-gradient(to right, rgb(78, 255, 225) ${per}%, white ${per}%)`;
                            rightdoor.style.background = `linear-gradient(to left, rgb(78, 255, 225) ${per}%, white ${per}%)`;
                            rightdoor.style.borderLeft = '0px'
                        }, 30)

                        return 0;





                        /*  const alert = document.createElement('div')
                         alert.setAttribute('class', 'alert')
                         alert.style.backgroundColor = 'rgb(225 225 0)'
                         alert.textContent = `lift is already there in ${va} flore`
                         document.body.appendChild(alert)
                         setTimeout(() => {
 
                             document.body.removeChild(alert)
 
                         }, 3000)
 
                         return 0; */
                    }

                }

                if (va < dd) {
                    const alert = document.createElement('div')
                    alert.setAttribute('class', 'alert')
                    alert.style.backgroundColor = 'rgb(0 150 0)'
                    alert.textContent = `Please click Down button to get lift!`
                    document.body.appendChild(alert)
                    setTimeout(() => {

                        document.body.removeChild(alert)

                    }, 3000)

                    return 0;
                }


                const alert = document.createElement('div')
                alert.setAttribute('class', 'alert')
                alert.textContent = 'lifts are busy! Please wait for mument'
                document.body.appendChild(alert)
                setTimeout(() => {

                    document.body.removeChild(alert)

                }, 3000)


            }

            let liftcurrpo = lif.getAttribute("setposition")
            /*  console.log(typeof liftcurrpo) */
            let nu = Number(liftcurrpo)


            if (nu < va) {

                const intervalid = setInterval(function () {


                    console.log("interval started")

                    const lif = document.getElementById(funforlifyid)


                    let index1 = lif.getAttribute('id')

                    /*  console.log(index1)
                     console.log(typeof index1) */

                    let index = Number(index1[4])

                    /* console.log(typeof index) */

                    let liftlocation = Math.abs(lif.offsetTop)

                    /*  console.log(liftlocation) */
                    queue2[index] = 'true'

                    if (floorlocation === liftlocation) {

                        clearInterval(intervalid)
                        lif.setAttribute("setposition", `${va}`)

                        let leftdoor = document.getElementById(`leftdoor${index}`)
                        let rightdoor = document.getElementById(`rightdoor${index}`)

                        let per = 90;
                        let doorbg = setInterval(function () {

                            console.log("lift interval started")
                            per = per - 1;


                            if (per <= 5) {
                                clearInterval(doorbg)
                                queue2[index] = 'false'
                                setTimeout(() => {
                                    leftdoor.style.background = ''
                                    rightdoor.style.background = ''
                                    rightdoor.style.borderLeft = '1px solid black'
                                }, 1500)
                            }

                            leftdoor.style.background = `linear-gradient(to right, rgb(78, 255, 225) ${per}%, white ${per}%)`;
                            rightdoor.style.background = `linear-gradient(to left, rgb(78, 255, 225) ${per}%, white ${per}%)`;
                            rightdoor.style.borderLeft = '0px'
                        }, 30)


                    }


                    lif.style.top = lif.offsetTop - 1 + "px";

                }, 20)

            }


        });


        const mydownbtn = document.getElementById(`btndown${count}`)

        mydownbtn.addEventListener('click', (mydownbtn) => {

            let so = mydownbtn.target.id[7]

            const floorcount = document.getElementById(`floorcount${so}`);

            const flrcount = floorcount.textContent[0];

            console.log(flrcount)

            let val = flrcount;

            let va = Number(val)

            let floorlocation = (va - 1) * 123;

            let funforlifyid = getliftid_downbtn(queue1, queue2, va)

            console.log(funforlifyid)

            const lif = document.getElementById(funforlifyid)

            console.log(lif)



            if (lif == null) {


                for (let l = 0; l < queue1.length; l++) {

                    let lol = document.getElementById(`lift${l}`)
                    let lol2 = lol.getAttribute('setposition')
                    let lol3 = Number(lol2)
                    if (lol3 == va) {

                        let leftdoor = document.getElementById(`leftdoor${l}`)
                        let rightdoor = document.getElementById(`rightdoor${l}`)

                        let per = 90;
                        let doorbg = setInterval(function () {

                            console.log("lift interval started")
                            per = per - 1;

                            if (per <= 5) {
                                clearInterval(doorbg)
                                setTimeout(() => {
                                    leftdoor.style.background = ''
                                    rightdoor.style.background = ''
                                    rightdoor.style.borderLeft = '1px solid black'
                                }, 1500)

                            }

                            leftdoor.style.background = `linear-gradient(to right, rgb(78, 255, 225) ${per}%, white ${per}%)`;
                            rightdoor.style.background = `linear-gradient(to left, rgb(78, 255, 225) ${per}%, white ${per}%)`;
                            rightdoor.style.borderLeft = '0px'
                        }, 30)

                        return 0;

                        /*  const alert = document.createElement('div')
                         alert.setAttribute('class', 'alert')
                         alert.style.backgroundColor = 'rgb(225 225 0)'
                         alert.textContent = `lift is already there in ${va} flore`
                         document.body.appendChild(alert)
                         setTimeout(() => {
 
                             document.body.removeChild(alert)
 
                         }, 3000) */


                    }

                    if (va > lol3) {
                        const alert = document.createElement('div')
                        alert.setAttribute('class', 'alert')
                        alert.style.backgroundColor = 'rgb(0 150 0)'
                        alert.textContent = 'Please click the up button to get lift'
                        document.body.appendChild(alert)
                        setTimeout(() => {

                            document.body.removeChild(alert)

                        }, 3000)

                        return 0;
                    }


                }

                const alert = document.createElement('div')
                alert.setAttribute('class', 'alert')
                alert.textContent = 'lifts are busy! Please wait for mument'
                document.body.appendChild(alert)
                setTimeout(() => {

                    document.body.removeChild(alert)

                }, 3000)


            }



            let liftcurrpo = lif.getAttribute("setposition")
            console.log(typeof liftcurrpo)
            let nu = Number(liftcurrpo)
            if (nu > va) {


                const intervalid = setInterval(function () {


                    console.log("interval started")

                    const lif = document.getElementById(funforlifyid)

                    let index1 = lif.getAttribute('id')

                    let index = Number(index1[4])

                    queue2[index] = 'true'

                    let liftlocation = Math.abs(lif.offsetTop)

                    console.log(liftlocation)

                    if (floorlocation === liftlocation) {

                        clearInterval(intervalid)
                        lif.setAttribute("setposition", `${va}`)
                        /*  queue2[index] = 'false' */

                        let leftdoor = document.getElementById(`leftdoor${index}`)
                        let rightdoor = document.getElementById(`rightdoor${index}`)

                        let per = 90;
                        let doorbg = setInterval(function () {

                            console.log("lift interval started")
                            per = per - 1;


                            if (per <= 5) {
                                clearInterval(doorbg)
                                queue2[index] = 'false'
                                setTimeout(() => {
                                    leftdoor.style.background = ''
                                    rightdoor.style.background = ''
                                    rightdoor.style.borderLeft = '1px solid black'
                                }, 1500)

                            }

                            leftdoor.style.background = `linear-gradient(to right, rgb(78, 255, 225) ${per}%, white ${per}%)`;
                            rightdoor.style.background = `linear-gradient(to left, rgb(78, 255, 225) ${per}%, white ${per}%)`;
                            rightdoor.style.borderLeft = '0px'
                        }, 30)

                    }

                    lif.style.top = lif.offsetTop + 1 + "px";

                }, 20)

            }


        })




        count--
    }


    lft()

})


function lft() {

    let lifts_tub = document.createElement("div")

    lifts_tub.setAttribute('class', 'lifts-contenar')

    body.appendChild(lifts_tub)

    for (i = 0; i < lift; i++) {

        let lifts = document.createElement("div")

        let leftdoor = document.createElement('div')
        leftdoor.setAttribute('class', 'leftdoor')
        leftdoor.setAttribute('id', `leftdoor${i}`)
        lifts.appendChild(leftdoor)

        let rightdoor = document.createElement('div')
        rightdoor.setAttribute('class', 'rightdoor')
        rightdoor.setAttribute('id', `rightdoor${i}`)
        lifts.appendChild(rightdoor)

        lifts.setAttribute('class', 'lifts')

        lifts.setAttribute('setposition', '0')

        lifts.setAttribute('boolean', 'false')

        lifts.setAttribute('id', `lift${i}`)

        queue1.push(`lift${i}`)

        queue2.push('false')

        console.log(lifts)

        lifts_tub.appendChild(lifts)
    }

}

function getliftid(q1, q2, loc_btn) {
    let near = -1;
    let liftid;
    for (let k = 0; k < q2.length; k++) {

        let getlitf = document.getElementById(`lift${k}`)
        let getposition = getlitf.getAttribute('setposition')
        let current_lift_location = Number(getposition)
        console.log(current_lift_location)

        if (current_lift_location < loc_btn && q2[k] === 'false' && near < current_lift_location) {

            near = current_lift_location;
            liftid = q1[k];
        }

    }

    return liftid;

}

function getliftid_downbtn(q1, q2, loc_btn) {

    let near = floor + 1;
    let liftid;
    for (let k = 0; k < q2.length; k++) {

        let getlitf = document.getElementById(`lift${k}`)
        let getposition = getlitf.getAttribute('setposition')
        let current_lift_location = Number(getposition)
        console.log(current_lift_location)

        if (current_lift_location > loc_btn && q2[k] === 'false' && near > current_lift_location) {

            near = current_lift_location;
            liftid = q1[k];
        }

    }
    return liftid;
}











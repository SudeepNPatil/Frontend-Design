const btn = document.getElementById("btn")

btn.addEventListener('click', () => {

    setInterval(() => {

        const div = document.getElementById("child1")

        div.style.top = div.offsetTop - 80 + "px";
        console.log(div.offsetTop)

    }, 1000);
})
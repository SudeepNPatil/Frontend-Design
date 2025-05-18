const getusername = document.getElementById("username")

let username;
getusername.addEventListener("change", (e) => {

    username = e.target.value

    console.log(username)

    let Persondetails = Promise.all([fetch(`https://api.github.com/users/${username}`), fetch(`https://api.github.com/users/${username}/repos`)])

    Persondetails
        .then(async ([resuser, resrepo]) => {
            let respuser = await resuser.json()
            let resprepo = await resrepo.json()

            display(respuser, resprepo)

        })
        .catch((err) => {
            console.log(err)
        })

})

function display(respuser, resprepo) {

    console.log(respuser)
    console.log(resprepo)

    const div1 = document.createElement("div")
    div1.setAttribute('class', 'Profile')
    const image = document.createElement("img")
    /*  image.setAttribute('src', `${respuser.avatar_url}`)
     image.setAttribute('alt', 'Profileimage') */
    image.src = respuser.avatar_url
    image.alt = 'Profileimage'
    document.body.appendChild(div1)
    div1.appendChild(image)

    const infodiv = document.createElement("div")
    infodiv.setAttribute('class', 'info')
    div1.appendChild(infodiv)

    const user = document.createElement("h2")
    user.textContent = respuser.name
    user.style.color = 'blue'
    infodiv.appendChild(user)

    const bio = document.createElement("p")
    bio.textContent = respuser.bio
    infodiv.appendChild(bio)

    const location = document.createElement("p")
    location.textContent = respuser.location
    infodiv.appendChild(location)

    const followdiv = document.createElement("div")

    followdiv.setAttribute('class', 'follow')

    document.body.appendChild(followdiv)


    const followerbtn = document.createElement("button")
    followerbtn.textContent = 'Followers'
    followdiv.appendChild(followerbtn)

    const followingbtn = document.createElement("button")
    followingbtn.textContent = 'Following'
    followdiv.appendChild(followingbtn)

    const repositorybtn = document.createElement("button")
    repositorybtn.textContent = 'Repos'
    followdiv.appendChild(repositorybtn)

    const numfollw = document.createElement("div")
    numfollw.setAttribute('class', 'follownum')
    document.body.appendChild(numfollw)

    const follwernum = document.createElement('p')
    follwernum.textContent = respuser.followers
    numfollw.appendChild(follwernum)

    const follwingrnum = document.createElement('p')
    follwingrnum.textContent = respuser.following
    numfollw.appendChild(follwingrnum)

    const repornum = document.createElement('p')
    repornum.textContent = respuser.public_repos
    numfollw.appendChild(repornum)

    const repotitle = document.createElement('h2')
    repotitle.setAttribute('class', 'repotitle')
    repotitle.textContent = "Repositories"
    document.body.appendChild(repotitle)

    const contenardiv = document.createElement('div')
    contenardiv.setAttribute('class', 'contenardiv')
    document.body.appendChild(contenardiv)

    for (let j = 0; j < resprepo.length; j++) {

        let repodiv = document.createElement("div")
        repodiv.setAttribute('class', 'repodiv')
        contenardiv.appendChild(repodiv)

        let reponame = document.createElement('h4')
        reponame.textContent = resprepo[j].name
        repodiv.appendChild(reponame)

        let containstarandfork = document.createElement('div')
        containstarandfork.setAttribute('class', 'containstarandfork')
        repodiv.appendChild(containstarandfork)

        let star = document.createElement('p')
        star.textContent = 'Star'
        containstarandfork.appendChild(star)

        let fork = document.createElement('p')
        fork.textContent = 'Fork'
        containstarandfork.appendChild(fork)

        let containstarandfork1 = document.createElement('div')
        containstarandfork1.setAttribute('class', 'containstarandfork')
        repodiv.appendChild(containstarandfork1)

        let starcount = document.createElement('p')
        starcount.textContent = resprepo[j].stargazers_count
        containstarandfork1.appendChild(starcount)

        let forkcount = document.createElement('p')
        forkcount.textContent = resprepo[j].fork
        containstarandfork1.appendChild(forkcount)

        let description = document.createElement('p')
        description.setAttribute('class', 'description')
        description.textContent = resprepo[j].description
        repodiv.appendChild(description)


    }

}

















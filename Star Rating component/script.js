
const sub = document.getElementById('sub-div')

sub.addEventListener('mouseover', function (e) {
    console.log(e.target.id)
    for (let i = 1; i <= e.target.id; i++) {
        const star = document.getElementById(`${i}`)
        star.style.color = 'yellow'
    }
})

function handleout(e) {

    console.log(e.target.id)
    for (let i = 1; i <= e.target.id; i++) {
        const star = document.getElementById(`${i}`)
        star.style.color = ''
    }
}

sub.addEventListener('mouseout', handleout)

sub.addEventListener('click', function (e) {

    sub.removeEventListener('mouseout', handleout)
    let count_track = 0;
    for (let i = 1; i <= e.target.id; i++) {
        const star = document.getElementById(`${i}`)
        star.style.color = 'yellow'
        count_track++;
    }

    const Count = document.getElementById('Count')

    Count.textContent = count_track;
})








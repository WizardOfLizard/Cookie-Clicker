let clickCount = 0
let countEL = document.getElementById("count")
console.log("Code running")

function doThing() {
    console.log("Doing the thing")
}


function sayHi(name) {
    console.log("Hello "+name)
}

function clicked() {
    clickCount ++
    if (doubled === true) {
        clickCount ++
    }
    let count = clickCount
    console.log(`Button clicked ${clickCount} times`)
    if (count >= 1000) {
        countEL.innerHTML = `You have a lot of time on your hands, there is no way you need ${count} cookies`
    } else if (count >= 500) {
        countEL.innerHTML = `If you had as many friends as cookies, you would have ${count} friends`
        if (peanutted === false) {
            peanutEl.classList.remove("removeA")
        }
    }else if (count >= 150) {
        countEL.innerHTML = `Seriously, you won, it's over, you have ${count} cookies`
        if (doubled === false) {
            doubleEl.classList.remove("removeA")
        }
    }else if (count >= 100) {
        countEL.innerHTML = `Congrats! You have won with ${count} cookies`
    }else if (count >= 50) {
        countEL.innerHTML = `Keep going!  You have ${count} cookies`
    }else {
        countEL.innerHTML = `There are ${count} cookies`
    }
}

let doubled = false
let peanutted = false

let startButtonEl = document.getElementById('start')
let allEl = document.getElementById('all')

let removeEl = document.getElementById('removeA')
let returnEl = document.getElementById('return')
let hideEl = document.getElementById('hide')
let showEl = document.getElementById('show')

let doubleEl = document.getElementById('double')

let peanutEl = document.getElementById('peanut')

function doubleIt() {
    doubled = true
    doubleEl.classList.add("removeA")
    clickCount -= 150
}

function peanutIt() {
    peanutted = true
    peanutEl.classList.add("removeA")
    clickCount -= 500
    console.log("cookie changed")
    document.getElementById("start").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1gOPMOsAUnlb7g8pIwjRpZdrMnDPVsS3IrQ&usqp=CAU"
}

function shrink() {
    startButtonEl.classList.add('shrink')
    allEl.classList.add('flash')
    console.log("Shrink")
}
function grow() {
    startButtonEl.classList.remove('shrink')
    allEl.classList.remove('flash')
    console.log("Grow")
}
function remove() {
    startButtonEl.classList.add("removeA")
    console.log("remove")
}
function hideA() {
    startButtonEl.classList.add("hide")
}
function returnA() {
    startButtonEl.classList.remove("removeA")
}
function show() {
    startButtonEl.classList.remove("hide")
}

startButtonEl.addEventListener('click', clicked)
startButtonEl.addEventListener('mousedown', shrink)
startButtonEl.addEventListener('mouseup', grow)


removeEl.addEventListener('click', remove)
returnEl.addEventListener('click', returnA)
hideEl.addEventListener('click', hideA)
showEl.addEventListener('click', show)

doubleEl.addEventListener('click', doubleIt)
peanutEl.addEventListener('click', peanutIt)

//sayHi('Bob')
console.log("End of code")
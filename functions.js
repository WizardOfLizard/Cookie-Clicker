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
    let count = clickCount
    console.log(`Button clicked ${clickCount} times`)
    countEL.innerHTML = `There are ${count} cookies`
}
let startButtonEl = document.getElementById('start')

startButtonEl.addEventListener('click', clicked)

//sayHi('Bob')
console.log("End of code")
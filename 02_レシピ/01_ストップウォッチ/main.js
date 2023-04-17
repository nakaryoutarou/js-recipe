const display = document.getElementById("display")
const startButton = document.getElementById("startbutton")


let count = 0

const countUp = function(){
    count += 1
    display.textContent = count/100
}

let id = null

startbutton.onclick = function() {
  if (id === null) {
    // start
    id = setInterval(countUp, 10)
    startbutton.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    id = null
    startbutton.textContent = "start"
  }
}
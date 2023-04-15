const button = document.getElementById("button")

const alertMessage = function() {
    alert("クリックしたね")
  }
  
  button.onclick = alertMessage

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

const inputkey = document.getElementById("input-key")
const inputkeydate = document.getElementById("input-keydate")
document.onkeydown = function(e) {
    console.log(e.key)
}

inputkey.oninput = onkeydown
inputkeydate.oninput = onkeydown
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const buttonhatena= document.getElementById("buttonhatena")
const imageselect = document.getElementById("imageseect")

button1.onclick = function(){
    button1.textContent = "はずれ"
}
button2.onclick = function(){
    button2.textContent = "正解！！"
}
button3.onclick = function(){
    button3.textContent = "はずれ"
}
button4.onclick = function(){
    button4.textContent = "はずれ"
}

buttonhatena.onclick = function(){
    const imaglist: Array, (
        "https://a.cdn-hotels.com/gdcs/production74/d1449/5695b321-d12f-425d-86db-fd6cc68eff36.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        "https://a.cdn-hotels.com/gdcs/production166/d135/a06c88d0-2446-4d2f-96d9-7afc2d01e8fb.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
        "https://a.cdn-hotels.com/gdcs/production150/d1979/7f6b3cf0-f585-11e8-a5a3-0242ac110006.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
        "https://a.cdn-hotels.com/gdcs/production187/d1061/0f415982-6251-40e9-be5f-7bdeff4b5cf6.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    )
    const select = Math.floor(Math.random() * imagelist.length);
    const output = "<img src=" + imagelist[select] + ">";
}
const cardscontainer = document.getElementById("cards-container")
const inputElement = document.getElementById("input-todo")
const addbutton = document.getElementById("add-button")

addbutton.onclick = function(){
    //入力欄をとりだしてテxtにいれる
    const text = inputElement.value

    //card作成
    const card = document.createElement("div")
    card.className = "card"

    //todo作成
    const todo = document.createElement("todo")
    todo.className = "todo"
    todo.textContent = text

    //todo をcardの中に追加する
    card.append(todo)

    //cardをcontainerのなかについかする
    cardscontainer.append(card)

    inputElement.value = ""
}
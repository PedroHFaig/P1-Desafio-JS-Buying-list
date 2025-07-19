// Obtendo os elementos da página
const form = document.querySelector("form")
const newItem = document.getElementById("new-item")
const buyingList = document.getElementById("buying-list")
const itemList = document.querySelector(".item-list")



//capturando o submit
form.onsubmit = (event) => {
    event.preventDefault()
    
    createNewItem(newItem.value)
}

//criando o novo item com o submit
function createNewItem(newItem) {
    let newDiv = itemList.cloneNode(true)

    buyingList.appendChild(newDiv)

    let textItem = newDiv.querySelector("p")

    textItem.textContent = `${newItem}`    
}
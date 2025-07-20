// Obtendo os elementos da página
const form = document.querySelector("form")
const newItem = document.getElementById("new-item")
const buyingList = document.getElementById("buying-list")
const itemList = document.querySelector(".item-list")
const alert = document.querySelector("footer")
const removeAlert = document.getElementById("remove-alert")

//capturando o submit
form.onsubmit = (event) => {
    event.preventDefault()
    
    createNewItem(newItem.value)
}

//deletando itens já presentes na lista
buyingList.querySelectorAll('.deleting').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement
        item.remove()
        alert.classList.remove("hide-alert")
    })
})

//criando o novo item com o submit
function createNewItem(newItem) {
    let newDiv = itemList.cloneNode(true)
    
    let textItem = newDiv.querySelector("p")
    
    textItem.textContent = `${newItem}`

    newDiv.querySelector('.deleting').addEventListener('click', () => {
        newDiv.remove()
        alert.classList.remove("hide-alert")
    })
    
    buyingList.appendChild(newDiv)
}

removeAlert.addEventListener('click', () => {
    alert.classList.add("hide-alert")
})
let items = []
let input = document.querySelector('.input input')
let listsOfItems = document.querySelector('.lists')
const storageKey = "Items"

let checkingItems = () => {
    listsOfItems.innerHTML = null

    items.forEach((item,index) =>{
        const box = document.createElement('div')
        box.style.display = 'flex'
        box.style.gap = '10px'
        box.style.alignItems = 'center'

        const shoppingCart = document.createElement('div')
        shoppingCart.textContent = item
        shoppingCart.style.marginRight = '15px'

        const button = document.createElement('button')
        button.textContent = 'Remove from the Cart'
        button.onclick = () => deletingEvent(index)

        box.appendChild(shoppingCart)
        box.appendChild(button)
        listsOfItems.appendChild(box)

    })
}

let addingEvent = () => {
    const inputItem = input.value
    if (!inputItem) {
        alert ('Please Enter your Item')
        return
    }
    items.push(inputItem)
    input.value = ""
    checkingItems()
    savingEvent()
}

let deletingEvent = (IDX) => {
    items.splice(IDX,1)
    checkingItems()
    savingEvent()
}

let savingEvent = () => {
    let updatedItems = JSON.stringify(items)
    localStorage.setItem(storageKey,updatedItems)
}

let laodingEvent = () => {
    let oldItems = localStorage.getItem(storageKey)
     oldItems ? items = JSON.parse(oldItems) : ""
     checkingItems()
}

document.addEventListener('DOMContentLoaded' , laodingEvent )

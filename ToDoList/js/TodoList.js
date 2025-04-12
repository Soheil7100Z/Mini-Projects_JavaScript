let items = []
let input = document.querySelector('.input input')
let listsOfItems = document.querySelector('.rightSide')
const storageKey = "Items"

let checkingItems = () => {
    listsOfItems.innerHTML = null

    items.forEach((item,index) => {
        const box = document.createElement('div')
        box.style.display = 'flex'
        box.style.gap = '10px'
        box.style.alignItems = 'center'

        const shoppingCart = document.createElement('div')
        shoppingCart.textContent = item
        shoppingCart.style.marginRight = '5rem'

        const button = document.createElement('button')
        button.textContent = 'Remove from the Cart'
        button.onclick = () => deletingEvent(index)
        button.style.padding = '.5rem 2rem'
        button.style.border = 'none'
        button.style.borderRadius = '.5rem'
        button.style.backgroundColor = '#EA2027'
        button.addEventListener('mouseover' , () => {
            button.style.opacity = '0.7'
        })
        button.addEventListener('mouseout' , () => {
            button.style.opacity = '1'
        })

        box.appendChild(shoppingCart)
        box.appendChild(button)
        listsOfItems.appendChild(box)
    })
}

let addingEvent = () => {
    let counter = 0
    const inputItem = input.value
    inputItem.split("").forEach((item) => counter++)



    if (!inputItem) {
        alert ('Please Enter your Item')
        return
    }else if (counter>10) {
        alert ('Your Items must have at most 10 letters')
        input.value = ""
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

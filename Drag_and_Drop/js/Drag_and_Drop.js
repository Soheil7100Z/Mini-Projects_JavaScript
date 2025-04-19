let draggableList = document.querySelector('#dragList')
let button = document.querySelector('.checking')
let buttonRefresh = document.querySelector('.refresh')

let Items = []
let startIndex ;
let endIndex;

const PhysicistsName = [
    "Galileo Galilei",
    "Isaac Newton",
    "Marie Curie",
    "Albert Einstein",
    "Niels Bohr",
    "Chien-Shiung Wu",
    "Katherine Johnson",
    "Rosalind Franklin"
]

listCreating()
buttonRefresh.classList.add('hidden')

function listCreating() {

        [...PhysicistsName]
        .map(person => ({name: person , ID: Math.random()}))
        .sort((a,b) =>(a.ID - b.ID))
        .map(person => person.name)
        .forEach((person , index) => {
        const listTag = document.createElement('li')
        listTag.setAttribute('NameID' , index)
        listTag.innerHTML = `
        <div class="draggingBox" draggable="true">
            <div class="number">+</div>
                <div class="dragBox">
                    <p class="name">${person}</p>
                </div>
        </div>
        `
        Items.push(listTag)
        draggableList.appendChild(listTag)
    })

    DragAndDropEvents()
}


function DragAndDropEvents() {

    let draggingItems = draggableList.querySelectorAll('.draggingBox')

    draggingItems.forEach(div =>{
        div.addEventListener('dragstart' , dragStartFunction)
        div.addEventListener('dragenter' , dragEnterFuncktion)
        div.addEventListener('dragleave' , dragLeaveFuncktion)
        div.addEventListener('dragover' , dragOverFuncktion)
        div.addEventListener('drop' , dragDropFuncktion)
    })
}

function dragStartFunction() {
    startIndex = +this.closest('li').getAttribute('NameID')
}

function dragEnterFuncktion() {
    this.classList.add('over')
}

function dragLeaveFuncktion() {
    this.classList.remove('over')
}

function dragOverFuncktion(e) {
    this.classList.add('over')
    e.preventDefault()
}

function dragDropFuncktion() {
    this.classList.remove('over')
    endIndex = +this.closest('li').getAttribute('NameID')
    DragExchange(startIndex,endIndex)
}

function DragExchange (S , E) {

    draggedItem = Items[S].querySelector('.draggingBox')
    droppedItem = Items[E].querySelector('.draggingBox')

    Items[S].appendChild(droppedItem)
    Items[E].appendChild(draggedItem)
}

function checkingOrder() {

    Items.forEach((el,index) =>{
        const nameOfPerson = el.querySelector('.name').innerText.trim()
        if (nameOfPerson !== PhysicistsName[index]) {
            el.classList.add('notOrdered')
            el.classList.add('wrongActive')
               } else {
            el.classList.remove('notOrdered')
            el.classList.add('ordered')
               let check = el.querySelector('.draggingBox').draggable = false
            if(!check) {
                el.classList.remove('wrongActive')
                el.classList.add('deactive')
            }
        }
    })
 }

 function originalShowing() {

    draggableList.innerHTML = ''
    PhysicistsName.forEach((personName , index) =>{
        Items.forEach((listTag) =>{
            let checkingName = listTag.querySelector('.name').innerText.trim()
            if(checkingName === personName) {
                listTag.querySelector('.name').innerText = personName
                listTag.querySelector('.name').style.color = '#1B1464'
                listTag.querySelector('.number').innerText = index+1
                listTag.querySelector('.draggingBox').draggable = false
                orderedList(listTag)
            }
            return
        })
    })
 }

function orderedList (listT){

    listT.classList.remove('deactive')
    listT.classList.remove('wrongActive')
    draggableList.appendChild(listT)
    buttonRefresh.classList.remove('hidden')
    button.classList.add('hidden')
}

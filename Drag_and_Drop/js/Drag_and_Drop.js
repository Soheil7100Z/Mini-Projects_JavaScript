let draggableList = document.querySelector('#dragList')

let Items = []
let startIndex ;
let endIndex;


const PhysicistsName = [
    "Galileo Galilei",
    "Isaac Newton",
    "Marie Curie",
    "Albert Einstein",
    "Niels Bohr",
    "Alan L Hart",
    "Chien-Shiung Wu",
    "Katherine Johnson",
    "Rosalind Franklin"
]

listCreating()

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
    e.preventDefault()
    this.classList.add('over')
}

function dragDropFuncktion() {
    this.classList.remove('over')
    endIndex = +this.closest('li').getAttribute('NameID')
    dragTrasnfering(startIndex,endIndex)
}

function dragTrasnfering (S , E) {
    draggedItem = Items[S].querySelector('.draggingBox')
    droppedItem = Items[E].querySelector('.draggingBox')

    Items[S].appendChild(droppedItem)
    Items[E].appendChild(draggedItem)
}

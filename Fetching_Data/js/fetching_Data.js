let nameList = document.querySelector('.listNames')
let inputName = document.querySelector('input')
let ListOfName = []

async function gettingData() {

    const response = await fetch('https://randomuser.me/api?results=20')
    const data = await response.json()
    const {results} = data
    return results
}

gettingData().then((personsData) =>{
    CreatingList(personsData)
})

let CreatingList = (data) => {

    data.forEach(Person => {
        const listTag = document.createElement('li')
        listTag.innerText = `${Person.name.first} ${Person.name.last}`
        ListOfName.push(listTag)
        nameList.appendChild(listTag)
    })
}

inputName.addEventListener('keyup', (e) =>{

            let nameArrays = []
            deletingRedColor(ListOfName)
            const searchName = e.target.value
            ListOfName.forEach((name) => {
                if (name.innerText.toLowerCase().includes(searchName.toLowerCase())) {
                    name.classList.remove('hidden')

                        nameArrays.push(name)

                    if (e.key === 'Enter') {
                        inputName.value = ""
                        addingRedColor(nameArrays)
                     }
                }else {
                    name.classList.add('hidden')
                }
            })
})

let addingRedColor = (selectedRedList) => {

    selectedRedList.forEach(el =>{
        el.style.backgroundColor = '#EA2027'
    })
}

let deletingRedColor = (elements) =>{

    elements.forEach(el =>{
        el.style.backgroundColor = '#6F1E51'
    })
}

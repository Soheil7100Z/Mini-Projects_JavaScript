let contentColor = document.querySelector('.contentBox')

let changingIconsColor = (color) => {
    contentColor.style.backgroundColor = color
}
let randomColor = () => {
    const red = Math.round(Math.random() *225)
    const green = Math.round(Math.random() *225)
    const blue = Math.round(Math.random() *225)

    contentColor.style.backgroundColor = `rgb(${red} , ${green} , ${blue})`
}


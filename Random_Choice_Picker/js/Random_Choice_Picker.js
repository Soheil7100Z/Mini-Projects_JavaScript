let enteredChoices = document.querySelector('#choiceContainer')
let choicesDiv = document.querySelector('.tags')

let result = document.createElement('div')

textAreaInput = enteredChoices.value
enteredChoices.addEventListener ('keyup' , (e) => {

        textAreaInput = enteredChoices.value
        const Arraytext = textAreaInput.split(',').filter(item => item.trim() !== '').map(item =>item.trim())

        choicesDiv.innerHTML = ''
        result.innerText = ""

        Arraytext.forEach(item =>{

            const choicesSpan = document.createElement('span')
            choicesSpan.classList.add ('choice')
            choicesSpan.innerText = item
            choicesDiv.appendChild(choicesSpan)
        })

        if (e.key === 'Enter' ){

            enteredChoices.value = ""
            const IntervalID = setInterval(() => {
                const randomChoice = makingRandom()
                randomChoice.classList.add('highlighted')
                setTimeout(() => {
                randomChoice.classList.remove('highlighted')
                }, 100);
            }, 200);

        setTimeout(() => {

            clearInterval(IntervalID)
            const randomChoicelast = makingRandom()
            randomChoicelast.classList.add('selected')
            reultGiving()
            blinking(selectedChoice)
        }, 10000);
        }
    })

function makingRandom () {

    const choiceSpans = document.querySelectorAll('.choice')
    return choiceSpans[Math.floor(Math.random()*choiceSpans.length)]
}

let reultGiving = () => {

            result.innerText = 'The red one is your random choice!'
            result.style.color = '#EA2027'
            result.style.fontSize = '2rem'
            result.style.fontWeight = 'bold'
            return selectedChoice = choicesDiv.insertAdjacentElement('beforebegin' , result )
}

let blinking = (div) => {

     setInterval(() => {
        div.style.opacity = '0'
        setTimeout(() => {
            div.style.opacity = '1'
        }, 500);
    }, 1000);
}

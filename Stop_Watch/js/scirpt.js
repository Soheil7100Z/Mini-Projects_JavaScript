let time = document.querySelector('#container .time')
let intervalID
let counter = 0

function timeLooking(num) {
    return String(num).padStart(2, "0")
}

let startEvent = () => {
    if (intervalID) stopEvent()
    intervalID = setInterval(() => {
                counter +=1
                const minutes = Math.floor(counter/60)
                const seconds = counter % 60
                time.innerHTML = `${timeLooking(minutes)}:${timeLooking(seconds)}`
            }, 1000);
}

let stopEvent = () => {
       clearInterval(intervalID)
}

let resetEvent = () => {
    stopEvent()
    counter = 0
    time.innerHTML = '00:00'
}

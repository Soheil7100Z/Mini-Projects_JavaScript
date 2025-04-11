let input = document.querySelector('#input')
let output = document.querySelector('.result')

function wordChecking (word) {
     return word.split("").reverse().join("")
}

function wordCheckAfterClick() {
   if (isNaN(input.value) && !/\d/.test(input.value)) {
    let splittedWord = input.value.split("")
    let spaces = splittedWord.map((item, index) => item.trim() === "" ? index : -1).filter(index => index !== -1)

            if (spaces.length >= 1) {
            output.innerHTML = "Please enter the word without spaces"
            output.style.color = '#EA2027'
            } else if (splittedWord.length<=2 && splittedWord.length >= 1) {
            output.innerHTML = "The word must have at least 3 letters!! <br> Please enter the correct type of word"
            output.style.color = '#EA2027'
            } else {
                let afterCheck = wordChecking(input.value)
                if (afterCheck === input.value && input.value !== "") {
                output.innerHTML = "The word is palindromic"
                output.style.color = '#009432'
                } else if (afterCheck !== input.value) {
                output.innerHTML = "Not palindromic!!"
                output.style.color = '#F79F1F'
                }
            }

   } else if (input.value === "") {
    output.innerHTML = "There is no word to check!! <br> Please enter your word before pressing the button!!"
    output.style.color = '#EA2027'
   } else {
    output.innerHTML = "The entered word is invalid!! <br> Please enter the correct one "
    output.style.color = '#EA2027'
   }
    input.value = ""
}

let textContainer = [
    {
        subtitle : 'JavaScript',
        text : `JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. Ninety-nine percent of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.`,
        link : 'https://en.wikipedia.org/wiki/JavaScript'
    },
    {
        subtitle : 'TypeScript',
        text : `TypeScript (abbreviated as TS) is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js, Deno or Bun). Multiple options are available for transpilation.`,
        link : 'https://en.wikipedia.org/wiki/TypeScript'
    },
    {
        subtitle : 'PHP',
        text : `PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group. PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive acronym PHP: Hypertext Preprocessor. Below is a "Hello, World!" program in PHP.`,
        link : 'https://en.wikipedia.org/wiki/PHP'
    },
    {
        subtitle : 'Python',
        text : `Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically type-checked and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.`,
        link : 'https://en.wikipedia.org/wiki/Python_(programming_language)'
    },
    {
        subtitle : 'C sharp',
        text : `Microsoft first used the name C# in 1988 for a variant of the C language designed for incremental compilation. C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. As of January 2025, the most recent stable version of the language is C# 13.0.`,
        link : 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'
    },
    {},
]

let titlesTag = document.querySelectorAll('.titles a')
let subtitleContainerTag = document.getElementById('mainExplanation')
let buttonEdit = document.querySelector('.edit')
let gettingTextInput = document.querySelector('.textedition')
let buttonForSubmit = document.querySelector('.AfterEdit')
let reloadButton = document.querySelector('.reload')

let currentIcon = 0
let submittingTitle
let subtitleArray = []
let paraTagTitle;
let paragraphArray = []

subtitleCreater()

function subtitleCreater() {

    textContainer.forEach((item , index) =>{
        const subtileDiv = document.createElement('div')
        subtileDiv.classList.add('explanation')
        subtileDiv.setAttribute('subtitleIndex' ,index)

        const h1TagTitle = document.createElement('h1')
        h1TagTitle.classList.add('subtitle')
        h1TagTitle.innerText = `${item.subtitle}`
        subtileDiv.appendChild(h1TagTitle)

        paraTagTitle = document.createElement('p')
        paraTagTitle.classList.add('paragraph')
        paraTagTitle.innerText = `${item.text}`
        paragraphArray.push(paraTagTitle)
        subtileDiv.appendChild(paraTagTitle)

        const aTagTitle = document.createElement('a')
        aTagTitle.classList.add('link')
        aTagTitle.target = '_blank'
        aTagTitle.href = `${item.link}`
        aTagTitle.innerText = `Click here to get more information about ${item.subtitle}`
        subtileDiv.appendChild(aTagTitle)

        subtitleArray.push(subtileDiv)
        subtitleContainerTag.appendChild(subtitleArray[0])
    })
}

titlesTag.forEach(tag => tag.addEventListener('click',exchanging))

function exchanging() {

    titlesTag.forEach(icon => icon.classList.remove('selected'))

    const titleId = this.getAttribute('data-Id')
     subtitleArray.forEach(div =>{
       const subtileID = div.getAttribute('subtitleIndex')
            if(subtileID === titleId) {
                subtitleContainerTag.innerHTML = ""
                subtitleContainerTag.appendChild(div)
                this.classList.add('selected')
                currentIcon = parseInt(titleId)
                // console.log(currentIcon)
            }
     })
}


buttonEdit.addEventListener('click' , editionText)
buttonForSubmit.addEventListener('click' , submitText)

function editionText() {
    buttonForSubmit.classList.remove('hidden')
    gettingTextInput.classList.remove('hidden')
    reloadButton.classList.remove('hidden')
    gettingTextInput.value = `${textContainer[currentIcon].text}`
    submittingTitle = currentIcon
//     console.log(typeof(currentIcon))
//     console.log(typeof(submittingTitle))
}

function submitText(){

    const editedTextByUser = gettingTextInput.value
    gettingTextInput.value = ""
    paraTagTitle.innerHTML = ""
    paragraphArray[submittingTitle].innerText = String(editedTextByUser)
    paraTagTitle.innerText = paragraphArray[submittingTitle]

}

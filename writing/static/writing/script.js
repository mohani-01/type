// const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'


if (!localStorage.getItem("timer")) {
    localStorage.setItem("timer", 60);

}

const returnToFocus = document.querySelector(".focus")


const restart = document.getElementById('restart')
const textDisplay = document.getElementById('text')

const gameContainer = document.querySelector('.game-container');

const cursor = document.getElementById('cursor')
const timer = document.getElementById('timer')
const textContainer = document.querySelector(".text-container")

const timeSelector = localStorage.getItem("timer")
const chooseTime = document.getElementById('time')



for (let i = 0, N = chooseTime.children.length; i < N ; i++ ) {
    if (chooseTime.children[i].innerHTML === timeSelector) {
        addClass( chooseTime.children[i], "current-time")
    } else {
        removeClassAll(chooseTime.children[i])
    }
}

gameContainer.style.opacity = 0;

window.time = null;

chooseTime.addEventListener("click", (event) => {
    const getTime = event.target;

    const timeAvailable = ["120", "60", "30", "15"]
    if (getTime.dataset.timelength && timeAvailable.includes(getTime.dataset.timelength)) {
        console.log(typeof(getTime.dataset.timelength))
        localStorage.setItem("timer", getTime.dataset.timelength)

        location.reload()
        
    } 

    
})

restart.addEventListener("click",() => {

    location.reload()
} )

textDisplay.addEventListener('focusout', () => {
    cursor.style.display = 'none';
    textContainer.style.position = "relative";
    returnToFocus.style.display = 'block';


})

document.addEventListener("change", () => {

    if (!document.hasFocus()) {
        cursor.style.display = 'none';
        textContainer.style.position = "relative";
        returnToFocus.style.display = 'block';
    }
})



function startTyping() {


    gameContainer.style.opacity = 1;
    let gameStart = true;
    gameEnd = true;
    let parentWord = textDisplay.firstChild
    console.log("parentWord", parentWord)
    console.log("Does it have a sibling", parentWord.nextSibling, parentWord.nextSibling.nextSibling)
    const heightTop = parentWord.getBoundingClientRect().top
    // console.log(parentWord.getBoundingClientRect())
    console.log("height Top", heightTop)

    addClass(parentWord, 'current')

    let newLetter = parentWord.firstChild
    console.log("newLetter > parentElement then does it have an error ", newLetter.parentElement,   newLetter.parentElement.nextElementSibling )
    addClass(newLetter,"current")

   
    textDisplay.focus()

    cursor.style.top = parentWord.getBoundingClientRect().top + 'px';
    cursor.style.left = newLetter.getBoundingClientRect().left  - 6 +   'px';
    cursor.style.display = 'block';


    textDisplay.addEventListener('focus', () => {
        if (gameStart) {
            cursor.style.top = parentWord.getBoundingClientRect().top   + 'px';
            cursor.style.left = newLetter.getBoundingClientRect().left - 6 + 'px';
        } 
        cursor.style.top = parentWord.getBoundingClientRect().top + 'px';
        cursor.style.left = newLetter.getBoundingClientRect().left  - 6 +   'px';
        cursor.style.display = 'block';
        textContainer.style.position = "static";
        returnToFocus.style.display = 'none';
    
    
    
    })  

    

    // returnToFocus.style.opacity = 0;
    // add event listener
    textDisplay.addEventListener('keyup', (event) => {


        // key not to responed to
        const notKey = ["Shift", "Meta", "Enter", "Alt", "Control", "CapsLock"]
        const char = event.key
        // console.log(char)

        if (notKey.includes(char)) {
            console.log("Got it")
            return
        }

       
        
        


        // if (!(char === newLetter.innerHTML )) {
        //     return

        // }
        // } else gameStart = true;
        
        if (!newLetter.nextSibling && !parentWord.nextSibling) {
            console.log("no parent no sibling")
            console.log("newLetter", newLetter, "newLetter nextSibling", newLetter.nextSibling, "Parent", parentWord, "nextNode", parentWord.nextSibling )
            alert("NO")
            endGame(textDisplay);
             return
        }
        console.log(parentWord, parentWord.nextSibling)

        // if the user get the letter correctly 
        if ( char === newLetter.innerHTML ) {
           
            // remove the current className from the previous letter and word
             (newLetter)
            
            addClass(newLetter, "correct")

            removeClass(parentWord, "current")

            // if there is no next sibling
            // pass to the next parentWord
            if (!newLetter.nextSibling) {

                // if there is incorrect element in the Word
                if (parentWord.querySelector(".incorrect, .previous-current, .error")) {
                    addClass(parentWord, "incorrect-word")
                    addClass(newLetter, "previous-current")
                    // addClass(newLetter)
                }

                parentWord = parentWord.nextSibling
                newLetter = parentWord.firstChild;


            // pass it to the next Sibling
            } else {
                newLetter = newLetter.nextSibling;
            }

            addClass(newLetter, "current")
            addClass(parentWord, "current")
        
        // incorrect
        } else {
            // first if it is backspace
            if (char === 'Backspace') {

                // check if there is previous sibling
                if (newLetter.previousSibling) {
                    removeClassAll(newLetter)
                    newLetter = newLetter.previousSibling

                    if (newLetter.classList.contains("error")) {
                        let nextLetter = newLetter.nextSibling;
                        newLetter.remove()
                        newLetter = nextLetter
                    }
                    removeClassAll(newLetter)
                    addClass(newLetter, "current")
                    

                } else {
                    // check if there is previous Word an it contain an inccorect element
                    
                    if (parentWord.previousSibling && parentWord.previousSibling.querySelector('.previous-current, .error')) {
                        console.log("Got it")
                        removeClass(parentWord, 'current')
                        removeClassAll(newLetter)
                        parentWord = parentWord.previousSibling
                        newLetter = parentWord.querySelector('.previous-current')
                        removeClassAll(newLetter)
                        addClass(newLetter, 'current')
                        removeClass(parentWord, "incorrect-word")

                    } else if (parentWord.previousSibling && parentWord.previousSibling.querySelector('.incorrect'))   {
                        removeClass(parentWord, 'current')
                        
                        removeClassAll(newLetter)
                        parentWord = parentWord.previousSibling
                        removeClass(parentWord, "incorrect-word")
                        newLetter = parentWord.lastChild
                    }  
                
                    // console.log("Check if the previous word exist and there is at least one error in it ")
                }
                // if there is one remove everthing from this element and pervious element 
                    // then make newLetter = newLetter.previousSibling

                // else => nothing atleast for now


            // if wrong text is typed 
            } else if (char !== newLetter.innerHTML ) {

                // check if there is a nextSibling
                if (char === ' ') {

                    console.log("char" + char + "char" , "Space", newLetter.innerHTML === char, newLetter)
                    if (!parentWord.nextSibling ) {
                        console.log(!parentWord.nextSibling, parentWord.nextSibling, "parentWord.nextSibling")
                        console.log(parentWord)
                        console.log("how this is even possible")
                        console.log("parent", parentWord.parentElement)
                        console.log("to compare", newLetter.parentElement)
                        alert("WY")
                        endGame(textDisplay);
                        return;
                    // if user click space in the first letter of a word
                    } else if (newLetter === parentWord.firstChild) {
                        return 

                    } else { 
                            removeClass(parentWord, "current")
                            removeClassAll(newLetter)
                            
                            if (parentWord.querySelector(".incorrect, .error") || newLetter.nextSibling) {
                                addClass(newLetter, "previous-current")
                                addClass(parentWord, "incorrect-word")
                                console.log("HI char === '' ")
                                changetoPassed(newLetter)
                            }

                            parentWord = parentWord.nextSibling;
                            console.log(parentWord, "HERE")
                            newLetter = parentWord.firstChild;
                            console.log(newLetter, "HERE")
                            addClass(parentWord, "current");    
                            addClass(newLetter, "current");

                    }

                } else if (newLetter.nextSibling) {
                    removeClass(newLetter, 'current')
                    addClass(newLetter, 'incorrect')
                    newLetter = newLetter.nextSibling
                    addClass(newLetter, "current")

                } else {
                    const error = document.createElement('span')
                    // addClass(error, "incorrect")
                    addClass(error, "error")
                    error.innerHTML = char;
                    parentWord.insertBefore(error, newLetter)

                }
            }
        }

        if (!window.time) {
            let newTime
            window.time = setInterval(() => {
                if (!newTime ) {
                    window.time = true;
                    newTime = new Date();
                }

                const currentTime = new Date(); 
                const timepassed = parseInt((currentTime - newTime) / 1000)
                if (timepassed >= timeSelector ) {
                    endGame(textDisplay);
                }
                timer.innerHTML = `${timeSelector - timepassed}` ;
            }, 500)
        }
        // if the element move downwar
        // console.log(newLetter.getBoundingClientRect().top - heightTop)
        if (newLetter.getBoundingClientRect().top - heightTop > 70) {
            const topMargin = parseInt(textDisplay.style.marginTop || '0px')
            textDisplay.style.marginTop =  topMargin  - 35 + 'px';
            addNewText();
        }
    
        cursor.style.top = parentWord.getBoundingClientRect().top  + 'px';
        cursor.style.left = newLetter.getBoundingClientRect().left - 6 + 'px';
        
    })

}



function getText() {
  
    
    return fetch('https://random-word-api.vercel.app/api?words=70')
    .then(response => response.json())
    .then(data => data)
}


async function renderText() {

    const text = await getText();


    textDisplay.innerHTML = "";

    renderLetter(text);
    


    

    startTyping()
}




function addClass(element, name) {
    element.classList.add(name)
}

function removeClass(element, name) {
    element.classList.remove(name)
}

function removeClassAll(newLetter) {
    newLetter.className = "";
}


function endGame(text) {
    clearInterval(window.time)
    // timer.innerHTML = "";
    const correct = text.querySelectorAll('.correct').length;
    const incorrect = text.querySelectorAll('.incorrect').length;
    const additional = text.querySelectorAll('.error').length;
    const passed = text.querySelectorAll(".passed").length;
    console.log("All element", text)    
    textDisplay.innerHTML = "";
    gameContainer.style.display = 'none';
    document.querySelector('#result').innerHTML = `Correct: ${ correct } Incorrect: ${ incorrect } Extra: ${ additional } Passed: ${ passed }`

}


function changetoPassed(element) {
    while (element) {
        addClass(element, "passed")
        
        element = element.nextSibling
        
    }
}



async function addNewText() {
    const text = await getText();
    renderLetter(text)
    // window.time = null;


}

function renderLetter(letter) {
    for (let i = 0, N = letter.length; i < N; i++) {
            const letterdiv = document.createElement('div');
            addClass(letterdiv, "letter")
            letter[i].split('').forEach(char => {
                const charSpan = document.createElement('span')
                charSpan.innerHTML = char;
                letterdiv.appendChild(charSpan)
        })

        if (i !== N - 1) {
            const space = document.createElement('span')
            space.innerHTML = ' ';
            addClass(space, "space")
            letterdiv.appendChild(space)
        }

        textDisplay.appendChild(letterdiv)  
    }

   

}


renderText()

const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'

const textDisplay = document.getElementById('text')

const cursor = document.getElementById('cursor')
const timer = document.getElementById('timer')


function startTyping() {
    gameStart = false;
    gameEnd = true;
    let parentWord = textDisplay.firstChild
    console.log(parentWord.getBoundingClientRect())
    cursor.style.top = parentWord.getBoundingClientRect().y  + 'px';
    cursor.style.left = parentWord.getBoundingClientRect().x  - 3  +   'px';
    addClass(parentWord, 'current')

    let newLetter = parentWord.firstChild
    newLetter.classList.add("current")


    textDisplay.addEventListener('focusout', () => {
        console.log("hello")
    })
    // add event listener
    document.addEventListener('keydown', (event) => {

        // key not to responed to
        const notKey = ["Shift", "Meta", "Enter", "Alt", "Control"]
        const char = event.key

        if (notKey.includes(char)) {
            console.log("Got it")
            return
        }

        
        


        if (!(char === newLetter.innerHTML || gameStart)) {
            return


        } else gameStart = true;

        // game end
        if (!newLetter.nextSibling && !parentWord.nextSibling) {

             textDisplay.innerHTML = "Done";
        }

        // if the user get the letter correctly 
        if ( char === newLetter.innerHTML ) {
           
            addClass(newLetter, "correct")
            removeClass(newLetter, "incorrect")

            // remove the current className from the previous letter and word
            removeClass(newLetter, "current")
            removeClass(parentWord, "current")

            // if there is no next sibling
            // pass to the next parentWord
            if (!newLetter.nextSibling) {

                
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
                    
                    if (parentWord.previousSibling && parentWord.previousSibling.querySelector('.incorrect'))   {
                        removeClass(parentWord, 'current')
                        removeClassAll(newLetter)
                        parentWord = parentWord.previousSibling
                        newLetter = parentWord.lastChild
                    }
                
                    console.log("Check if the previous word exist and there is at least one error in it ")
                }
                // if there is one remove everthing from this element and pervious element 
                    // then make newLetter = newLetter.previousSibling

                // else => nothing atleast for now


            // if wrong text is typed 
            } else if (char !== newLetter.innerText ) {
                console.log(char, newLetter.innerHTML )
                // check if there is a nextSibling
                if (newLetter.nextSibling) {
                    removeClass(newLetter, 'current')
                    addClass(newLetter, 'incorrect')
                    newLetter = newLetter.nextSibling
                    addClass(newLetter, "current")
                } else {
                    const error = document.createElement('span')
                    addClass(error, "incorrect")
                    addClass(error, "error")
                    error.innerText = char;
                    parentWord.insertBefore(error, newLetter)
                    

                }
               
                
                
            // if their is an error  anc className is space
                // if they click Space make them pass to then next node

                // else add extra elements (nothing for now)

             

               
            } 
            
    }
    
    // if (newLetter.innerHTML =)




        cursor.style.top = newLetter.getBoundingClientRect().y  + 'px';
        cursor.style.left = newLetter.getBoundingClientRect().x -2  + 'px';
    
    })
  

   
}



function getText() {

    return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}


async function renderText() {


    const text = await getText();
    console.log(text)
    const letter = text.split(' ');
    for (let i = 0, N = letter.length; i < N; i++) {

        const letterdiv = document.createElement('div');
        addClass(letterdiv, "letter")
        letter[i].split('').forEach(char => {
            const charSpan = document.createElement('span')
            charSpan.innerText = char;
            letterdiv.appendChild(charSpan)
        })

        if (i !== N - 1) {
            const space = document.createElement('span')
            space.innerText = ' ';
            addClass(space, "space")
            letterdiv.appendChild(space)
        }

        textDisplay.appendChild(letterdiv)
        
    }



        

      
        
        


   
    

    startTyping()
}


renderText()


function addClass(element, name) {
    element.classList.add(name)
}

function removeClass(element, name) {
    element.classList.remove(name)
}

function removeClassAll(newLetter) {
    newLetter.className = " "
}
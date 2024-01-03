// getting/ setting all the neccessary information to start the game
if (!localStorage.getItem("choose")) {
    localStorage.setItem("choose", "time")
}

if (!localStorage.getItem("time")) {
    localStorage.setItem("time", 60);
}

if (!localStorage.getItem("word")) {
    localStorage.setItem("word", 25)
}

const textToRender = ['the', 'of', 'to', 'and', 'a', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 'are', 'with', 'as', 'his', 'they', 'be', 'at', 'one', 'have', 'this', 'from', 'or', 'had', 'by', 'not', 'word', 'but', 'what', 'some', 'we', 'can', 'out', 'other', 'were', 'all', 'there', 'when', 'up', 'use', 'your', 'how', 'said', 'an', 'each', 'she', 'which', 'do', 'their', 'time', 'if', 'will', 'way', 'about', 'many', 
                    'then', 'them', 'write', 'would', 'like', 'so', 'these', 'her', 'long', 'make', 'thing', 'see', 'him', 'two', 'has', 'look', 'more', 'day', 'could', 'go', 'come', 'did', 'number','sound', 'no', 'most', 'people', 'my', 'over', 'know', 'water', 'than', 'call', 'first', 'who', 'may', 'down', 'side', 'been', 'now', 'find', 'any', 'new', 'work', 'part', 'take', 'get', 'place', 'made', 'live', 'where', 'after', 'back', 'little', 
                    'only', 'round', 'man', 'year', 'came', 'show', 'every', 'good', 'me', 'give', 'our', 'under', 'name', 'very', 'through', 'just', 'form', 'sentence', 'great', 'think', 'say', 'help', 'low', 'line', 'differ', 'turn', 'cause', 'much', 'mean', 'before', 'move', 'right', 'boy', 'old', 'too', 'same', 'tell', 'does', 'set', 'three', 'want', 'air', 'well', 'also', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 
                    'large', 'spell', 'add', 'even', 'land', 'here', 'must', 'big', 'high', 'such', 'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 'off', 'need', 'house', 'picture', 'try', 'us', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build', 'self', 'earth', 'father', 'head', 'stand', 'own', 'page', 'should', 'country', 'found', 'answer', 'school', 'grow', 'study', 'still', 'learn', 'plant', 'cover', 
                    'food', 'sun', 'four', 'between', 'state', 'keep', 'eye', 'never', 'last', 'let', 'thought', 'city', 'tree', 'cross', 'farm', 'hard', 'start', 'might', 'story', 'saw', 'far', 'sea', 'draw', 'left', 'late', 'run', "don't", 'while', 'press', 'close', 'night', 'real', 'life', 'few', 'north', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got', 'walk', 'example', 'ease', 'paper', 'group', 'always', 'music', 
                    'those', 'both', 'mark', 'often', 'letter', 'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'book', 'carry', 'took', 'science', 'eat', 'room', 'friend', 'began', 'idea', 'fish', 'mountain', 'stop', 'once', 'base', 'hear', 'horse', 'cut', 'sure', 'watch', 'color', 'face', 'wood', 'main', 'enough', 'plain', 'girl', 'usual','young', 'ready', 'above', 'ever', 'red', 'list', 'though','feel', 'talk', 'bird', 'soon', 
                    'body', 'dog', 'family', 'direct', 'pose', 'leave', 'song', 'measure', 'door', 'product', 'black', 'short', 'numeral', 'class', 'wind', 'question', 'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'fire', 'south', 'problem', 'piece', 'told', 'knew', 'pass', 'since', 'top', 'whole', 'king', 'space', 'heard', 'best', 'hour', 'better', 'true', 'during', 'hundred', 'five', 'remember', 'step', 'early', 'hold',
                    'west', 'ground', 'interest', 'reach', 'fast', 'verb', 'sing', 'listen', 'six', 'table', 'travel', 'less', 'morning', 'ten', 'simple', 'several', 'vowel', 'toward', 'war', 'lay', 'against', 'pattern', 'slow', 'center', 'love', 'person', 'money', 'serve', 'appear','road', 'map', 'rain', 'rule', 'govern', 'pull', 'cold', 'notice', 'voice', 'unit', 'power', 'town', 'fine', 'certain', 'fly', 'fall', 'lead', 'cry', 'dark', 
                    'machine', 'note', 'wait', 'plan', 'figure', 'star', 'box', 'noun', 'field', 'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 'stood', 'contain', 'front', 'teach', 'week', 'final', 'gave', 'green', 'oh', 'quick', 'develop', 'ocean', 'warm', 'free', 'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact', 'street', 'inch', 'multiply', 'nothing', 'course', 'stay', 'wheel', 'full',
                    'force', 'blue', 'object', 'decide', 'surface', 'deep', 'moon', 'island', 'foot', 'system', 'busy', 'test', 'record', 'boat', 'common', 'gold', 'possible', 'plane', 'stead', 'dry', 'wonder', 'laugh', 'thousand', 'ago', 'ran', 'check', 'game', 'shape', 'equate', 'hot', 'miss', 'brought', 'heat', 'snow', 'tire', 'bring', 'yes', 'distant', 'fill', 'east', 'paint', 'language', 'among', 'grand', 'ball', 'yet', 'wave', 'drop',
                    'heart', 'am', 'present', 'heavy', 'dance', 'engine', 'position', 'arm', 'wide', 'sail', 'material', 'size', 'vary', 'settle', 'speak', 'weight', 'general', 'ice', 'matter', 'circle', 'pair', 'include', 'divide', 'syllable', 'felt', 'perhaps', 'pick', 'sudden', 'count', 'square', 'reason', 'length', 'represent', 'art', 'subject', 'region', 'energy', 'hunt', 'probable', 'bed', 'brother', 'egg', 'ride', 'cell', 'believe', 
                    'fraction', 'forest', 'sit', 'race', 'window', 'store', 'summer', 'train', 'sleep', 'prove', 'lone', 'leg', 'exercise', 'wall', 'catch', 'mount', 'wish', 'sky', 'board', 'joy', 'winter', 'sat', 'written', 'wild', 'instrument', 'kept', 'glass', 'grass', 'cow', 'job', 'edge', 'sign', 'visit', 'past', 'soft', 'fun', 'bright', 'gas', 'weather', 'month', 'million', 'bear', 'finish', 'happy', 'hope', 'flower', 'clothe', 'strange', 
                    'gone', 'jump', 'baby', 'eight', 'village', 'meet', 'root', 'buy', 'raise', 'solve', 'metal', 'whether', 'push', 'seven', 'paragraph', 'third', 'shall', 'held', 'hair', 'describe', 'cook', 'floor', 'either', 'result', 'burn', 'hill', 'safe', 'cat', 'century', 'consider', 'type', 'law', 'bit', 'coast', 'copy', 'phrase', 'silent', 'tall', 'sand', 'soil', 'roll', 'temperature', 'finger', 'industry', 'value', 'fight', 'lie', 
                    'beat', 'excite', 'natural', 'view', 'sense', 'ear', 'else', 'quite', 'broke', 'case', 'middle', 'kill', 'son', 'lake', 'moment', 'scale', 'loud', 'spring', 'observe', 'child', 'straight', 'consonant', 'nation', 'dictionary', 'milk', 'speed', 'method', 'organ', 'pay', 'age', 'section', 'dress', 'cloud', 'surprise', 'quiet', 'stone', 'tiny', 'climb', 'cool', 'design', 'poor', 'lot', 'experiment', 'bottom', 'key', 'iron', 
                    'single', 'stick', 'flat', 'twenty', 'skin', 'smile', 'crease', 'hole', 'trade', 'melody', 'trip', 'office', 'receive', 'row', 'mouth', 'exact', 'symbol', 'die', 'least', 'trouble', 'shout', 'except', 'wrote', 'seed', 'tone', 'join', 'suggest', 'clean', 'break', 'lady', 'yard', 'rise', 'bad', 'blow', 'oil', 'blood', 'touch', 'grew', 'cent', 'mix', 'team', 'wire', 'cost', 'lost', 'brown', 'wear', 'garden', 'equal', 'sent', 
                    'choose', 'fell', 'fit', 'flow', 'fair', 'bank', 'collect', 'save', 'control', 'decimal', 'gentle', 'woman', 'captain', 'practice', 'separate', 'difficult', 'doctor', 'please', 'protect', 'noon', 'whose', 'locate', 'ring', 'character', 'insect', 'caught', 'period', 'indicate', 'radio', 'spoke', 'atom', 'human', 'history', 'effect', 'electric', 'expect', 'crop', 'modern', 'element', 'hit', 'student', 'corner', 'party', 'supply',
                    'bone', 'rail', 'imagine', 'provide', 'agree', 'thus', 'capital', "won't", 'chair', 'danger', 'fruit', 'rich', 'thick', 'soldier', 'process', 'operate', 'guess', 'necessary', 'sharp', 'wing', 'create', 'neighbor', 'wash', 'bat', 'rather', 'crowd', 'corn', 'compare', 'poem', 'string', 'bell', 'depend', 'meat', 'rub', 'tube', 'famous', 'dollar', 'stream', 'fear', 'sight', 'thin', 'triangle', 'planet', 'hurry', 'chief', 'colony', 
                    'clock', 'mine', 'tie', 'enter', 'major', 'fresh', 'search', 'send', 'yellow', 'gun', 'allow', 'print', 'dead', 'spot', 'desert', 'suit', 'current', 'lift', 'rose', 'continue', 'block', 'chart', 'hat', 'sell', 'success', 'company', 'subtract', 'event', 'particular', 'deal', 'swim', 'term', 'opposite', 'wife', 'shoe', 'shoulder', 'spread', 'arrange', 'camp', 'invent', 'cotton', 'born', 'determine', 'quart', 'nine', 'truck', 'noise',
                    'level', 'chance', 'gather', 'shop', 'stretch', 'throw', 'shine', 'property', 'column', 'molecule', 'select', 'wrong', 'gray', 'repeat', 'require', 'broad', 'prepare', 'salt', 'nose', 'plural', 'anger', 'claim', 'continent', 'oxygen', 'sugar', 'death', 'pretty', 'skill', 'women', 'season', 'solution', 'magnet', 'silver', 'thank', 'branch', 'match', 'suffix', 'especially', 'fig', 'afraid', 'huge', 'sister', 'steel', 'discuss', 'forward', 
                    'similar', 'guide', 'experience', 'score', 'apple', 'bought', 'led', 'pitch', 'coat', 'mass', 'card', 'band', 'rope', 'slip', 'win', 'dream', 'evening', 'condition', 'feed', 'tool', 'total', 'basic', 'smell', 'valley', 'nor', 'double', 'seat', 'arrive', 'master', 'track', 'parent', 'shore', 'division', 'sheet', 'substance', 'favor', 'connect', 'post', 'spend', 'chord', 'fat', 'glad', 'original', 'share', 'station', 'dad', 'bread', 'charge', 
                    'proper', 'bar', 'offer', 'segment', 'slave', 'duck', 'instant', 'market', 'degree', 'populate', 'chick', 'dear', 'enemy', 'reply', 'drink', 'occur', 'support', 'speech', 'nature', 'range', 'steam', 'motion', 'path', 'liquid', 'log', 'meant', 'quotient', 'teeth', 'shell', 'neck']


const audio = new Audio('../static/writing/typing.wav')

document.querySelector('#result').style.display = "none";

const choose = localStorage.getItem("choose")
const timeSelector = localStorage.getItem("time")
const wordSelector  = localStorage.getItem("word")

// option available
const options = document.getElementById('options')
// word and time
const word = document.getElementById("choose-word")
const time = document.getElementById("choose-time")

// word and time containers
const chooseTime = document.getElementById('time')
const chooseWord = document.getElementById('word')

// div which will contain the game element and div which will contain text
const gameContainer = document.querySelector('.game-container');

// element which display time or words based on the typing mode
const timer = document.getElementById('timer')
const wordsDisplay = document.getElementById('display-words')

// which contain the testDisplay, cursor, return to focus
const textContainer = document.querySelector(".text-container")

const textDisplay = document.getElementById('text')
const cursor = document.getElementById('cursor')
const returnToFocus = document.querySelector(".focus")

// to restart the game
const restart = document.getElementById('restart')

// result display area
const resultDisplay = document.getElementById('result')
resultDisplay.style.display = 'none';
gameContainer.style.opacity = 0;

// organizing the game which block of div to display in the option area
setupTheGame()

// time for the game
window.timepassed = null;
window.time = null;




// listen to click on the option
options.addEventListener('click', (event) => {
    const getOption  = event.target;
    if (getOption.getAttribute('id') === "choose-word" && !getOption.className.includes('current')) {
        returnToFocus.style.display = 'none';
        localStorage.setItem("choose", "words")
        location.reload()

    } else if ( getOption.getAttribute("id") === "choose-time" && !getOption.className.includes('current')) {
        returnToFocus.style.display = 'none';
        localStorage.setItem("choose", "time")
        location.reload()
    }
})


textDisplay.addEventListener('focusout', () => {
    cursor.style.display = 'none';
    textContainer.style.position = "relative";
    returnToFocus.style.display = 'block';
})

document.addEventListener('focusout', () => {
    cursor.style.display = 'none';
    textContainer.style.position = "relative";
    returnToFocus.style.display = 'block';

})

let correctLetter = 0
let totalLetter = 0

// listen to restart of the game
function startTyping() {
    

    restart.addEventListener("click", () => {
        returnToFocus.style.display = 'none';
        location.reload()
    })

    // blur the text and add Click here to Focus
    if (!document.hasFocus()) {
        cursor.style.display = 'none';
        textContainer.style.position = "relative";
        returnToFocus.style.display = 'block';

    }

    returnToFocus.style.display = 'none';
    // make the text area visible
    gameContainer.style.opacity = 1;

    // get the first word and first letter
    let parentWord = textDisplay.firstChild
    let newLetter = parentWord.firstChild
    
    addClass(parentWord, "current")
    addClass(newLetter,"current")

    // get the top of the parent element
    let heightTop = parentWord.getBoundingClientRect().top + window.scrollY 
    
    resizeCursor()
    cursor.style.left = newLetter.getBoundingClientRect().left - 2 + 'px'; 
    

    
    function resizeCursor() {
        cursor.style.left = newLetter.getBoundingClientRect().left  + 'px'; 
        cursor.style.top = parentWord.getBoundingClientRect().top + window.scrollY - 2 + 'px';
        heightTop = textDisplay.querySelector('.word:not([style*="display: none;"]').getBoundingClientRect().top 
    }
    
    textDisplay.focus()
    window.addEventListener('resize', () => {
        resizeWord(parentWord)   
        resizeCursor();
    })

    textDisplay.addEventListener('focus', () => {
        cursor.style.display = 'block';
        textContainer.style.position = "static";
        returnToFocus.style.display = 'none';
        resizeCursor()
    })  

 
    // Logic of the game
    textDisplay.addEventListener('keyup', (event) => {

        // return if the game ends
        if (textDisplay.className.includes('end')) {
            return;
        }

        const notKey = ["Shift", "Meta", "Enter", "Alt", "Control", "CapsLock" ]
        const keyCode = event.keyCode;
        const char = event.key
        
        

        // console.log(event.key)
        if (!((keyCode >= 48 && keyCode <= 90) || keyCode === 32 || keyCode === 8  || ( keyCode >= 188 && keyCode < 223) ) ) {
            return;
        }
        // additional logic to it since .keyCode is deprecated. eventhough its highly effective 
        if (notKey.includes(char)) {
            return;
        }
        
        if (!newLetter.nextSibling && !parentWord.nextSibling && char !== 'Backspace') {

            audio.pause()
            audio.currentTime = 0;
            audio.play()
            endGame(textDisplay);
            return;
        }

    
        // return if the user click space at the start of the game
        if (char === " " && newLetter === parentWord.firstChild)    {            
            return;
          } 

        // play some audio
        audio.pause()
        audio.currentTime = 0;
        audio.play()

        // add one to the total letters
        totalLetter++;

        
        // if the user get the letter correctly 
        if ( char === newLetter.innerHTML ) {
            // add one to the correct letters
           correctLetter++;

            // remove the current className from the previous letter and word
             removeClassAll(newLetter)
            
             // add correct to the letter
            addClass(newLetter, "correct")


            // if there is no next sibling
            // pass to the next parentWord
            if (!newLetter.nextSibling) {

                // if there is incorrect element in the Word
                if (parentWord.querySelector(".incorrect, .previous-current, .error")) {
                    addClass(parentWord, "incorrect-word")
                    addClass(newLetter, "previous-current")

                }
                // remove the current className for the word and change there word to next word
        
                removeClass(parentWord, "current")
                parentWord = parentWord.nextSibling
                newLetter = parentWord.firstChild;

                // add current to the new word
                addClass(parentWord, "current")


            // pass it to the next Sibling
            } else {
                newLetter = newLetter.nextSibling;
            }
            // add current to newletter
            addClass(newLetter, "current")
        
        // incorrect
        } else {

            // first if it is backspace
            if (char === 'Backspace') {

                // remove is used in removing elements from textdisplay area  
                // when shrink the size of the window
                removeClass(parentWord, "remove")


                 // check if user clicked Ctrl on their keyboard when clicking Backspace
                if (event.ctrlKey) {

                    // check if the newletter is the first letter in the word
                    if ((newLetter === parentWord.firstChild) && (parentWord.previousSibling) && (!parentWord.previousSibling.classList.contains('noreturn')) && (parentWord.previousSibling.classList.contains('incorrect-word'))) {
                        removeClass(parentWord, "current")
                        removeClassAll(newLetter)

                        parentWord = parentWord.previousSibling
                        newLetter = parentWord.lastChild

                        removeClass(parentWord, "incorrect-word")
                        addClass(newLetter, 'current')
                        addClass(parentWord, 'current')
                    } 

                    if (newLetter.previousSibling) {
                        while (newLetter.previousSibling) {
                            if (newLetter.classList.contains('error')) {
                                let previousLetter = newLetter.previousSibling;
                                newLetter.remove() 
                                newLetter = previousLetter
                                
                            }  else {
                                removeClassAll(newLetter)
                                newLetter = newLetter.previousSibling;
                            }  
                        }
                        removeClassAll(newLetter)

                        addClass(newLetter, "current")
                    }
                    // do nothing so that we shouldn't increase total number to += 1 so let it stay there
                    else {
                        totalLetter--;
                    }
                }
                
                // Normal backspace
                else {
                    // check if there is previous sibling (previous word)
                    if (newLetter.previousSibling) {

                            newLetter = newLetter.previousSibling
        
                            // remove the error letter completely from the display
                            if (newLetter.classList.contains("error")) {
                                let previousLetter = newLetter.nextSibling;
                                newLetter.remove()
                                newLetter = previousLetter
                            }
                            // remove everything from the current letter
                            removeClassAll(newLetter)
                            addClass(newLetter, "current")

                        

                    // check if there is previous Word an it contain an extra letter, passed letter or additional letter in it and it allowed to return back
                    } else if (parentWord.previousSibling && (!parentWord.previousSibling.classList.contains('noreturn')) && parentWord.previousSibling.querySelector('.previous-current, .error')) {

                        removeClass(parentWord, "current")
                        removeClassAll(newLetter)

                        parentWord = parentWord.previousSibling
                        newLetter = parentWord.querySelector('.previous-current')

                        removeClassAll(newLetter)
                        
                        addClass(newLetter, 'current')
                        removeClass(parentWord, "incorrect-word")
                        removeClass(parentWord, "remove")
                        addClass(parentWord, 'current')



                    // check if the previous element contains incorrect letter in it
                    } else if (parentWord.previousSibling && (!parentWord.previousSibling.classList.contains('noreturn')) && parentWord.previousSibling.querySelector('.incorrect'))   {
                        
                        removeClass(parentWord, 'current')
                        removeClassAll(newLetter)

                        parentWord = parentWord.previousSibling
                        newLetter = parentWord.lastChild

                        removeClass(parentWord, "incorrect-word")
                        addClass(parentWord, 'current')
                    
                    // do nothing so that we shouldn't increase total number to += 1 so let it stay there
                    }  else {
                        console.log("hi")
                        totalLetter--;
                    }
                }
                
                

            // if wrong text is typed 
            } else if (char !== newLetter.innerHTML ) {

                // check if there is a nextSibling
                if (char === ' ') {
                    // end game
                     if (!parentWord.nextSibling ) {
                        endGame(textDisplay);
                        return;

                    } else { 
                            removeClass(parentWord, "current")
                            removeClassAll(newLetter)

                            // add incorrect word to the parent and previous current to the letter and change letter(s) after the newLetter to passed letter
                            if (parentWord.querySelector(".incorrect, .error") || newLetter.nextSibling) {
                                addClass(newLetter, "previous-current")
                                addClass(parentWord, "incorrect-word")
                                changetoPassed(newLetter)
                            }

                            // move to the next word and letter
                            parentWord = parentWord.nextSibling;
                            newLetter = parentWord.firstChild;

                            addClass(parentWord, "current");    
                            addClass(newLetter, "current");
                    }

                // incorrect letter
                } else if (newLetter.nextSibling) {

                    removeClass(newLetter, 'current')
                    addClass(newLetter, 'incorrect')
                    newLetter = newLetter.nextSibling
                    addClass(newLetter, "current")

                // additional letter which is an extra (in this case error)
                } else {
                    const error = document.createElement('span')
                    addClass(error, "error")
                    error.innerHTML = char;
                    // insert the Error
                    parentWord.insertBefore(error, newLetter)
                }
            }
        }

        // change the time and words 
        timerCounter();
        updateParent();


        // add remove className if their is a difference between the topheight and new parent is about a one line
        if (parentWord.getBoundingClientRect().top + window.scrollY - heightTop > 39) {
            addClass(parentWord, "remove")
            
            // remove first line if it get above two lines
            if (parentWord.getBoundingClientRect().top + window.scrollY - heightTop > 60) {
                removeText(parentWord)
            }
        }
    
        // change the cursor location
        cursor.style.top = parentWord.getBoundingClientRect().top + window.scrollY + 'px';
        cursor.style.left = newLetter.getBoundingClientRect().left - 2  + 'px';

    })
}

function resizeWord(word) {
    // get the all words which are display are not none. 
    const allWords = [...textDisplay.querySelectorAll('.word:not([style*="display: none;"])')];
    // get the index of the current word
    const lastIndex = allWords.indexOf(word)

    // reverse the element up until to the current word
    const words = allWords.slice(0, lastIndex - 1).reverse()
    
    // get the first word which is the nearest to the current letter and one line above the top
    for(let i = 0, N = words.length; i < N; i++) {

        if (word.getBoundingClientRect().top  - words[i].getBoundingClientRect().top > 40 && words.includes(words[i])) {
           addClass(words[i], "remove")
           break
        }
    }

    removeText(word)



}

function removeText(parentWord) {

    const allWords = [...textDisplay.querySelectorAll('.word')];
    // get element of the word to be removed
    const lastWord = textDisplay.querySelector('.word.remove')

    // get the index of the word to be removed
    const lastIndex = allWords.indexOf(lastWord);

    // get the index of the current word
    const currentIndex = allWords.indexOf(parentWord)

    // if the index is not to be found return
    if (lastIndex === -1) {
        return;
    }

    const typedWords = allWords.slice(0, lastIndex)

    // display: 'none' for every element up to the .word.remove
    typedWords.forEach(element => {
        addClass(element, "noreturn")
        element.style.display = 'none';
        
    });

    // remove className remove from element which are not removed in this round
    allWords.slice(lastIndex, currentIndex ).forEach(element => {
        removeClass(element, "remove")
    })
    

    // add new words to the text if the game type is time and three is only about 30 words left
    if (choose === "time") {
        if (allWords.length - currentIndex < 30 ) {
            addNewText()
        }
    } 
}


// load random 200 words 
function getText(number=200) {
    let words = []
    for(let i = 0, N = textToRender.length; i < number; i++ ) {
       const index = Math.ceil((Math.random() / 4) * 1000)
         words.push(textToRender[index])
     }

   return words
}

// main function which start everything
function renderText() {
    textDisplay.innerHTML = "";

    let text;
    if (choose === "words") {
        text = getText(wordSelector);
    } else {
        text = getText();
    }
    
    renderWords(text);
    startTyping()
}



// add new class
function addClass(element, name) {
    element.classList.add(name)
}

// remove class
function removeClass(element, name) {
    element.classList.remove(name)
}


// remove all class
function removeClassAll(newLetter) {
    newLetter.className = "";
}

// endGame
function endGame(text) {

    let timeSpend;
    let testValue;
    if (choose === 'time') {

        testValue = `${choose} ${timeSelector}`;
        timeSpend = timeSelector;

    } else if (choose === 'words') {
        timeSpend = Math.ceil(window.timepassed);
        testValue = `${choose} ${wordSelector}`;
    }

    // Stop the timer
    clearInterval(window.time)
    // get correct incorrect extra and passed words.
    const correct = text.querySelectorAll('.correct').length;
    const incorrect = text.querySelectorAll('.incorrect').length;
    const additional = text.querySelectorAll('.error').length;
    const passed = text.querySelectorAll(".passed").length;
    const allWords = [...text.querySelectorAll('.word')]

    // get the current word
    const lastWord = text.querySelector('.word.current')

    // get the index of current word
    const lastIndex = allWords.indexOf(lastWord);
    const typedWords = allWords.slice(0, lastIndex)
    // get all incorrrect words
    const incorectWords = [...text.querySelectorAll('.word.incorrect-word')];

    const accuracy  = parseInt((correctLetter / totalLetter) * 100);
    const wpm = Math.floor(((typedWords.length - incorectWords.length)/ timeSpend) * 60)
    const character = `${ correct}/${incorrect}/${additional}/${passed}`
    const raw = Math.ceil(typedWords.length / timeSpend * 60)

    const time = timeSpend
    const result = [wpm, raw, accuracy, time, character]
    // check error
    const check = checkError(accuracy, wpm, raw)

    // if there is an error make the test type to be the error message 
    if (check) {
        testValue = check

    // else send the message
    } else {
        sendResult(result)
    }
    
    document.getElementById('result-wpm').innerHTML =  `${ wpm }<br> WPM`;
    document.getElementById('result-accuracy').innerHTML = `${accuracy}% <br> Accuracy`;
    document.getElementById('result-type').innerHTML = ` ${testValue}`
    document.getElementById('result-raw').innerHTML = `${ raw} RAW Speed`
    document.getElementById('result-character').innerHTML =  `Characters  <br> ${ character } <br> <span class="char-message">Correct/Incorrect/Extra/Passed</span>`;
    document.getElementById('result-time').innerHTML =  `Time: ${ time} Sec`



    textDisplay.innerHTML = "";
    gameContainer.style.display = 'none';

    // display the result div
    resultDisplay.style.display = "block";

    document.getElementById('next-game').addEventListener('click', () => {
        returnToFocus.style.display = 'none';
        location.reload()
    })
}


function updateParent() {
    if (choose === "words") {

        const allWords = [...textDisplay.querySelectorAll('.word')]
        const lastWord = textDisplay.querySelector('.word.current')
        const lastIndex = allWords.indexOf(lastWord);
        wordsDisplay.innerHTML =  `${lastIndex} / ${wordSelector}`;

    } else {
        wordsDisplay.style.display = 'none';
    }

}


function changetoPassed(element) {
    while (element) {
        addClass(element, "passed")
        element = element.nextSibling
    }
}


function addNewText() {
    const text = getText(40);
    renderWords(text)

}


// render the words
function renderWords(words) {

    for (let i = 0, N = words.length; i < N; i++) {

            const wordDiv = document.createElement('div');
            addClass(wordDiv, "word")

            words[i].split('').forEach(char => {
                const charSpan = document.createElement('span')
                charSpan.innerHTML = char;
                wordDiv.appendChild(charSpan)
        })

        if (i !== N - 1) {
            const space = document.createElement('span')
            space.innerHTML = ' ';
            addClass(space, "space")
            wordDiv.appendChild(space)
        }
        textDisplay.appendChild(wordDiv)  
    }
}


function sendResult(result) {
    if (!document.getElementById('user-username')) {
        return;
    }
    const csrf = getCookie("csrftoken")
    if (choose === "time") {
        
        fetch('https://wetype.onrender.com/save/time', {
            method : "POST",
            body : JSON.stringify({
                "wpm": result[0],
                "raw": result[1],
                "accuracy": result[2],
                "time": result[3],
                "char": result[4]
            }),
    
            headers : {
                "X-CSRFToken" : csrf,
                "Content-Type" : "application/json"
            }
        })
    
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error(data.error)
            }
        })

    } else if (choose === "words") {
        //
        fetch('https://wetype.onrender.com/save/word ', {
            method: "POST", 
            body : JSON.stringify({
                "type": wordSelector,
                "wpm": result[0],
                "raw": result[1],
                "accuracy": result[2],
                "time": result[3],
                "char": result[4]
            }), 
            headers : {
                'X-CSRFToken' : csrf,
                'Content-Type' : 'application/json'
            }
        })
        
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.log(data.error)
            }
        })
        .catch(error => console.log(error))

    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }

    return cookieValue;
}


function renderTime(totaltime , passed) {
    const currentTime = totaltime - passed;
    const minute =  (Math.floor(currentTime / 60 )).toString()
    const second = (Math.floor(currentTime % 60))
    let stringSecond;
    if (second > 9) {

         stringSecond = second.toString().padEnd(2, "0")
    } else  stringSecond = second.toString().padStart(2, "0")

    return  `${minute.padStart(2, "0")}:${stringSecond}`

}

 function timerCounter() {

    if (!window.time) {
        let newTime;
        window.time = setInterval(() => {
            if (!newTime ) {
                newTime = new Date();
            }

            const currentTime = new Date(); 
            window.timepassed = (currentTime - newTime) / 1000
            
                if (choose === 'time') {
                    if (timepassed >= timeSelector ) {
                        endGame(textDisplay);
                        addClass(textDisplay, "end");
                        return; 
                    }

                timer.innerHTML = `${renderTime(timeSelector, parseInt(window.timepassed)) }`  ;
                } else if (choose === 'words') {
                timer.innerHTML = ` ${renderTime(window.timepassed, 0) }`  ;

                }

        }, 500)

    }

}





function setupTheGame() {

    if (choose === "time") {
        for (let i = 0, N = chooseTime.children.length; i < N ; i++ ) {
            if (chooseTime.children[i].innerHTML === timeSelector) {
                addClass( chooseTime.children[i], "current")
            } else {
                removeClassAll(chooseTime.children[i])
            }
        }
    
        removeClassAll(word)
        addClass(time, "current")
    
        chooseWord.style.display = "none";
        const avaialbleChooses = ["15", "120", "60", "30"];
        listenToChange(chooseTime, avaialbleChooses, "time");
    
    
    } else if (choose === "words") {
    
        removeClassAll(chooseTime)
    
        for (let i = 0, N = chooseWord.children.length; i < N; i++ ) {
            if (chooseWord.children[i].innerHTML === wordSelector ) {
                addClass( chooseWord.children[i], "current") 
            } else {

                removeClassAll(chooseWord.children[i])
            }
        }
        removeClassAll(time)
        addClass(word, "current")
    
        chooseTime.style.display = "none";
        const avaialbleChooses = ["10", "25", "50", "100"];

        listenToChange(chooseWord, avaialbleChooses, "word");
    }
    
}


// listen if user click on words or time or time option
function listenToChange(element, choose, value ) {

    element.addEventListener('click', event => {
        const getTarget = event.target;

        if (getTarget.dataset.choose && choose.includes(getTarget.dataset.choose)) {
            returnToFocus.style.display = 'none';
            localStorage.setItem(value, getTarget.dataset.choose)
            location.reload()
        }
    })
}

// check error
function checkError(accuracy, wpm , raw ) {
    
    if ((accuracy > 0) && ((accuracy/100) * raw) - 10 > wpm) {
        return "Accuracy Error";
    } else if (accuracy === 0 || wpm === 0) {
        return "Invalid Test ";
    }
}

renderText()
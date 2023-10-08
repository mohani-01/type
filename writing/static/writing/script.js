// const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'
if (!localStorage.getItem("choose")) {
    localStorage.setItem("choose", "time")
}

const choose = localStorage.getItem("choose")

if (!localStorage.getItem("time")) {
    localStorage.setItem("time", 60);
}

if (!localStorage.getItem("word")) {
    localStorage.setItem("word", 25)
}

const textToRender = ['the', 'of', 'to', 'and', 'a', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 'are', 'with', 'as', 'I', 'his', 'they', 'be', 'at', 'one', 'have', 'this', 'from', 'or', 'had', 'by', 'not', 'word', 'but', 'what', 'some', 'we', 'can', 'out', 'other', 'were', 'all', 'there', 'when', 'up', 'use', 'your', 'how', 'said', 'an', 'each', 'she', 'which', 'do', 'their', 'time', 'if', 'will', 'way', 'about', 'many', 
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

const returnToFocus = document.querySelector(".focus")


const restart = document.getElementById('restart')
const textDisplay = document.getElementById('text')

const gameContainer = document.querySelector('.game-container');

const cursor = document.getElementById('cursor')
const timer = document.getElementById('timer')
const textContainer = document.querySelector(".text-container")

const timeSelector = localStorage.getItem("time")
const wordSelector  = localStorage.getItem("word")

const word = document.getElementById("choose-word")
const time = document.getElementById("choose-time")

const chooseTime = document.getElementById('time')
const chooseWord = document.getElementById('word')

const options = document.getElementById('options')


gameContainer.style.opacity = 0;

if (choose == "time") {
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



} else if (choose == "word") {
    
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



window.timepassed = null;
window.time = null;



options.addEventListener('click', (event) => {
    const getOption  = event.target;
    if (getOption.getAttribute('id') === "choose-word" && !getOption.className.includes('current')) {
        localStorage.setItem("choose", "word")
        location.reload()

    } else if ( getOption.getAttribute("id") === "choose-time" && !getOption.className.includes('current')) {
        localStorage.setItem("choose", "time")
        location.reload()

    }
})



function listenToChange(element, choose, value ) {
    element.addEventListener('click', event => {
        const getTarget = event.target;
        alert(getTarget)
        if (getTarget.dataset.choose && choose.includes(getTarget.dataset.choose)) {
            localStorage.setItem(value, getTarget.dataset.choose)
            alert(localStorage.getItem(value))
            location.reload()
        }
    })
}



restart.addEventListener("click", () => {
    location.reload()
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

document.addEventListener('focusin', ()=> {
    textDisplay.focus()
    
    
})
    

let correctLetter = 0
let totalLetter = 0

function startTyping() {


    if (!document.hasFocus()) {
        cursor.style.display = 'none';
        textContainer.style.position = "relative";
        returnToFocus.style.display = 'block';
    }
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

    cursor.style.top = parentWord.getBoundingClientRect().top  + 'px';
    cursor.style.left = newLetter.getBoundingClientRect().left - 2  +   'px';
    cursor.style.display = 'block';


    function resizeCursor() {
        if (gameStart) {
            cursor.style.top = parentWord.getBoundingClientRect().top  + 'px';
            cursor.style.left = newLetter.getBoundingClientRect().left - 2 + 'px';
        } 
        cursor.style.top = parentWord.getBoundingClientRect().top  + 'px';
        cursor.style.left = newLetter.getBoundingClientRect().left - 2 +   'px';
     
    }
    
    window.addEventListener('resize', () => {
        resizeCursor();
    })

    textDisplay.addEventListener('focus', () => {
        textDisplay.click()
        document.querySelector('textarea').focus()
        resizeCursor();
        cursor.style.display = 'block';
        textContainer.style.position = "static";
        returnToFocus.style.display = 'none';
    
    
    
    })  

    

    // returnToFocus.style.opacity = 0;
    // add event listener
    
    textDisplay.addEventListener('keyup', (event) => {

        if (textDisplay.className.includes('end')) {
            return;
        }
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
            // console.log("no parent no sibling")
            // console.log("newLetter", newLetter, "newLetter nextSibling", newLetter.nextSibling, "Parent", parentWord, "nextNode", parentWord.nextSibling )
            alert("NO")
            endGame(textDisplay);
             return
        }
        // console.log(parentWord, parentWord.nextSibling)
        audio.pause()
        audio.currentTime = 0;

        audio.play()

        totalLetter++;
        // if the user get the letter correctly 
        if ( char === newLetter.innerHTML ) {
           correctLetter++;
            // remove the current className from the previous letter and word
             removeClassAll(newLetter)
            
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
                    

                    // check if there is previous Word an it contain an inccorect element
                } else {
        
                    if (parentWord.previousSibling && parentWord.previousSibling.querySelector('.previous-current, .error')) {
                        // console.log("Got it")
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
                    }  else {
                        totalLetter--;
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

                    // console.log("char" + char + "char" , "Space", newLetter.innerHTML === char, newLetter)
                    if (!parentWord.nextSibling ) {
                       
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
                                changetoPassed(newLetter)
                            }

                            parentWord = parentWord.nextSibling;
                            // console.log(parentWord, "HERE")
                            newLetter = parentWord.firstChild;
                            // console.log(newLetter, "HERE")
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

        timerCounter();
        
        // if the element move downwar
        // console.log(newLetter.getBoundingClientRect().top - heightTop)
        if (newLetter.getBoundingClientRect().top - heightTop > 70) {
            const topMargin = parseInt(textDisplay.style.marginTop || '0px')
            textDisplay.style.marginTop =  topMargin  - 40 + 'px';
            if (choose === 'time') {
                addNewText();
            }
        }
    
        cursor.style.top = parentWord.getBoundingClientRect().top + 'px';
        cursor.style.left = newLetter.getBoundingClientRect().left - 2  + 'px';
        // audio.pause()
        })

}



function getText(number=200) {
  

    
    // return fetch('https://random-word-api.vercel.app/api?words=100&length=4')
    // .then(response =>  {
    //     console.log("response", response)

    //     return response.json()
    // }
    //     )
    // .then(data => data)

    let words = []
    for(let i = 0, N = textToRender.length; i < number; i++ ) {
       const index = Math.ceil((Math.random() / 4) * 1000)
         words.push(textToRender[index])
     }

   return words
}


function renderText() {
    textDisplay.innerHTML = "";
    let text;
    if (choose == "word") {

        text = getText(wordSelector);
    } else {
        text = getText();
    }

  
    renderWords(text);
        

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
    let timeSpend;
    if (choose == 'time') {
        timeSpend = timeSelector;
    } else if (choose == 'word') {
        timeSpend = window.timepassed;

    }


    clearInterval(window.time)
    console.log(window.timepassed)


    const correct = text.querySelectorAll('.correct').length;
    const incorrect = text.querySelectorAll('.incorrect').length;
    const additional = text.querySelectorAll('.error').length;
    const passed = text.querySelectorAll(".passed").length;
    const allWords = [...text.querySelectorAll('.word')]



    const lastWord = text.querySelector('.word.current')
    const lastIndex = allWords.indexOf(lastWord);
    const typedWords = allWords.slice(0, lastIndex)
    const incorectWords = [...text.querySelectorAll('.word.incorrect-word')];

    // the same
    const accuracy  = parseInt((correctLetter / totalLetter) * 100);
    //not the same
    const wpm = Math.floor(((typedWords.length - incorectWords.length)/ timeSpend) * 60)
    
    // the same
    const character = `${ correct}/${incorrect}/${additional}/${passed}`
    const raw = Math.ceil(typedWords.length / timeSpend * 60)
    const time = timeSpend
    const result = [wpm, raw, accuracy,  time, character]
    sendResult(result)
    document.getElementById('result-accuracy').innerHTML = `${accuracy}% <br> Accuracy`;
    document.getElementById('result-wpm').innerHTML =  `${ wpm }<br> WPM`;
    document.getElementById('result-character').innerHTML =  `Characters  <br> ${ character } <br> <span class="char-message">Correct/Incorrect/Extra/Passed</span>`;
    document.getElementById('result-raw').innerHTML = `${ raw} RAW Speed`
    document.getElementById('result-type-game').innerHTML =  `Time: ${ time} Sec`



    console.log("All element", text)    
    textDisplay.innerHTML = "";
    gameContainer.style.display = 'none';
    document.querySelector('#result').style.display = "block";
    // document.querySelector('#result-character').innerHTML = `Correct: ${ correct } Incorrect: ${ incorrect } Extra: ${ additional } Passed: ${ passed }`
    document.getElementById('next-game').addEventListener('click', () => {
        location.reload()
    })
}


function changetoPassed(element) {
    while (element) {
        addClass(element, "passed")
        
        element = element.nextSibling
        
    }
}



function addNewText() {
    const text =  getText();
    renderWords(text)

}

function renderWords(words) {
    console.log(words)
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


renderText()


function sendResult(result) {

    const csrf = getCookie("csrftoken")
    if (choose === "time") {
        // [wpm, raw, accuracy,  time, character]
        fetch('save/time', {
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

    } else if (choose === "word") {
        //
        fetch('save/word', {
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
                    // window.time = true;
                    newTime = new Date();
                }
    
                const currentTime = new Date(); 
                window.timepassed = parseInt((currentTime - newTime) / 1000)
                
                    if (choose === 'time') {
                        if (timepassed >= timeSelector ) {
                            endGame(textDisplay);
                            addClass(textDisplay, "end");
                            return ; 
                        }

                    timer.innerHTML = renderTime(timeSelector, window.timepassed ) ;
                    }

            }, 500)

        }

    }
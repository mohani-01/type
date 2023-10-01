const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'

function startTyping(text) {

    // let count = 0
    // // const newLetter = document.getElementById("text").value[0]
    // // console.log(newLetter);
    // document.addEventListener('keyup', event => {
    //     const letter = event.key;

    //     if (letter === text[count]) {
    //         console.log("correct", count)
    //     }
    //     count = count + 1;
    //     console.log(count)


    })
}



function getText() {

    return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}


async function renderText() {


    const text = await getText();
    document.getElementById("text").innerHTML = text;
    startTyping(text)
}


renderText()
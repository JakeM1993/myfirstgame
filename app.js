// import "./data";

const newGame__button = document.querySelector(".newGame__button");
const options__button = document.querySelector(".options__button");
const letter_buttons = document.querySelectorAll(".letter__button");
const hidden__word = document.querySelector(".hidden__word");
const hidden__letter = document.querySelectorAll(".hidden__letter");
const button_container = document.querySelector(".letter__buttons");


const hidden__letters = ["T", "E", "S", "T", "I", "N", "G"];
const letterGuess = []

newGame__button.addEventListener("click", () => {
    button_container.style.display = "grid";
    newGame__button.style.display = "none"; 
    hidden__word.style.display = "flex";
})

// letter_buttons.map(letter)

letter_buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.innerText)
    const letterValue = button.innerText.toUpperCase()
    letterGuess.push(letterValue)
    console.log(letterGuess)
    })
})

// letter_buttons.addEventListener("click", (event) => {
//     letterValue = event.target.innerText
//     console.log(letterValue)
//     // letterGuess.push(letterValue)
//     // console.log(letterGuess)
//     // hidden__letters[letterValue]
//     // hidden__letters.map(letter => 
//     // //     {
//     // //         const letterGuess = letterValue 
//     // //         letter.push(letterGuess)
//     // //     console.log(letter [letterValue])
//     // // })
//     if (letterGuess == hidden__letters[i]) {
//     hidden__letter.classList.add('revealed__letter');
//     hidden__letter.classList.remove('hidden__letter');
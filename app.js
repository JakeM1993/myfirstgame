const newGame__button = document.querySelector(".newGame__button");
const options__button = document.querySelector(".options__button");
const letter_buttons = document.querySelector(".letter__buttons");
const hidden__word = document.querySelector(".hidden__word");
const hidden__letter = document.querySelectorAll(".hidden__letter");

const hidden__letters = ["T", "E", "S", "T", "I", "N", "G"];
const letterGuess = []

newGame__button.addEventListener("click", () => {
    letter_buttons.style.display = "grid";
    newGame__button.style.display = "none"; 
    hidden__word.style.display = "flex";
})

letter_buttons.addEventListener("click", (event) => {
    letterValue = event.target.innerText
    console.log(hidden__letters[letterValue])
    hidden__letters.split("").map(letter => 
        {
        letter.push()
        const letterGuess = (letterValue) 
        console.log(letter [letterValue])
    })
    if (letterGuess == hidden__letters[i]) {
    hidden__letter.classList.add('revealed__letter');
    hidden__letter.classList.remove('hidden__letter');
    } else { 
    }
})
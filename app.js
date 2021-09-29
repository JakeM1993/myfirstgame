// import "./data";

const newGame__button = document.querySelector(".newGame__button");
const options__button = document.querySelector(".options__button");
const letter_buttons = document.querySelectorAll(".letter__button");
const hidden__word = document.querySelector(".hidden__word");
const hidden__letter = document.querySelectorAll(".hidden__letter");
const button_container = document.querySelector(".letter__buttons");

const output = document.querySelector(".output")

const hidden__letters = ["T", "E", "S", "T", "I", "N", "G"];
const letterGuess = []

newGame__button.addEventListener("click", () => {
    button_container.style.display = "grid";
    newGame__button.style.display = "none"; 
    hidden__word.style.display = "flex";
})

letter_buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.innerText)
    const letterValue = button.innerText.toUpperCase()
    letterGuess.push(letterValue)
    console.log(letterGuess)    
    hidden__letter.forEach(letter => {
        if (letterValue == letter.textContent ) {
                letter.classList.add(`revealed__letter`)                
            } 
        })
    })
})

const winmessage = output.innerText 
console.log(output)

output.innerText = "YOU WIN!"



// ----------------------------------------------------------------------

// now that the console is pushing the innerText value of the clicked on letter button from the letter_buttons array into the letterGuess array I plan on building a function that compares the letterGuess array to the hidden__letters array and in any instance where the two arrays share a value then I will tell the hidden letter to add revealed__letter to it's classList and remove hidden__letter from it also. 
// I know I will use the following two lines to do so but I need to learn how to compare the two arrays and have a function to do something if they share values. 

//  - some sort of method for comparing 2 arrays
//  - another method to check if they share a value
//  - then return the following 
//     hidden__letter.classList.add('revealed__letter');
//     hidden__letter.classList.remove('hidden__letter');

// ----------------------------------------------------------------------

// to keep score use reduce method. start it at 0 then tell it to - 1 each time a guess is incorrect
// a guess is incorrect if after comparing the 2 arrays mentioned above they do not share a value
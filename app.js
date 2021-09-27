const newGame__button = document.querySelector(".newGame__button");
const options__button = document.querySelector(".options__button");
const letter_buttons = document.querySelector(".letter__buttons");


newGame__button.addEventListener("click", () => {
    letter_buttons.style.display = "grid";
    newGame__button.style.display = "none"; 
    options__button.style.display = "none";
})
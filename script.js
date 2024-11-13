let randomNum = Math.trunc(Math.random(0) * 10) + 1;
const number = document.querySelector(".number");
const guess = document.querySelector(".guess").value;
const check = document.querySelector(".check");
const message = document.querySelector(".message")

number.textContent = randomNum

check.addEventListener("click", function(){
    const guess = document.querySelector(".guess").value;
    if (!guess){
        message.textContent = "There's no numbers here"
    }
    console.log("cicked")
    console.log(guess)
})

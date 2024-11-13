let randomNum = Math.trunc(Math.random(0) * 10) + 1;
const number = document.querySelector(".number");
const guess = document.querySelector(".guess").value;
const check = document.querySelector(".check")

number.textContent = randomNum

check.addEventListener("click", function(){
    const guess = document.querySelector(".guess").value;
    console.log("cicked")
    console.log(guess)
})

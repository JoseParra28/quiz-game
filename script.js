// let randomNum = Math.trunc(Math.random(0) * 10) + 1;
// const number = document.querySelector(".number");
// const guess = document.querySelector(".guess").value;
// const check = document.querySelector(".check");
// const message = document.querySelector(".message")

// number.textContent = randomNum

// check.addEventListener("click", function(){
//     const guess = document.querySelector(".guess").value;
//     if (!guess){
//         message.textContent = "There's no numbers here"
//     }
//     console.log("cicked")
//     console.log(guess)
// })

const questions = document.querySelector(".question");
let questionsBtn = document.querySelector(".answer-btn1");
let answers = ["Jose", "Carlos", "Pepe", "Sebastian"]

questionsBtn.addEventListener("click", function(){
    questions.classList.add(".hidden")
    selectAns()

})


function selectAns(){
    for (let i = 0; i <answers.length; i++){
        let buttons =  document.createElement("button");
        buttons.innerHTML = answers[i];
        document.body.appendChild(buttons)

    buttons.addEventListener("click", function(){
        const selectectBtn = this.innerHTML

        switch (selectectBtn) {
            case "Jose":
                questions.innerHTML = "Well done"
                break;
                case "Carlos":
                    questions.innerHTML = "Not correct"
                    break;
                    case "Pepe":
                        questions.innerHTML = "Not correct again"
                        break;
                        case "Sebastian":
                            questions.innerHTML = "Not correct again and again"
                            break;
        
            default:
                console.log("You must select") 
                break;
        }
    })
     }
}

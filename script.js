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
    selectAns()
})


function selectAns(){
    for (let i = 0; i <answers.length; i++){
        let buttons =  document.createElement("button");
        buttons.innerHTML = answers[i];
        document.body.appendChild(buttons)

    buttons.addEventListener("click", function(){
        console.log(this.innerHTML)
    })
     }
}

// var btn = document.querySelector(".answer-btn1");
// var optionText = ["Button 1", "Button 2", "Button 3", "Button 4"];

// btn.addEventListener("click", function(){
//   buttonSelect();
// })

// function buttonSelect() {
//   for(var i = 0; i < optionText.length; i++){
//     var option = document.createElement("button");
//     option.innerHTML = optionText[i];
//     document.body.appendChild(option);


//   }
// }
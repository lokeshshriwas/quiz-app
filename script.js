const formContainer = document.querySelector(".form-container")
const btn = document.querySelector("button")
const heading = document.querySelector("h2")

const correctAnswer = ["90°", "right angled"]

function calculate(){
    let i = 0
    let score = 0
    let mainContainer = new FormData(formContainer)
    for(let value of mainContainer.values()){
        if(value === correctAnswer[i]){
            score++
        }
        i++
    }
   heading.innerHTML = `Your total score is ${score}`
}

btn.addEventListener("click", calculate)
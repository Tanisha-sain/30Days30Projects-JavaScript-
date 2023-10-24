const questions = [
    {
        question : "Which one of the following is the largest mammal on earth?",
        answers: [
            {text:"Shark", check:"false"},
            {text:"Blue Whale", check:"true"},
            {text:"Elephant", check:"false"},
            {text:"Giraffe", check:"false"}
        ]
    },
    {
        question: "Who was the first woman President of India?",
        answers: [
            { text: "Pratibha Patil", check: "true" },
            { text: "Indira Gandhi", check: "false" },
            { text: "Sonali Bendre", check: "false" },
            { text: "Draupadi Murmu", check: "false" }
        ]
    },
    {
        question: "Which country was first to land on the Southern pole of moon?",
        answers: [
            { text: "Russia", check: "false" },
            { text: "China", check: "false" },
            { text: "India", check: "true" },
            { text: "Japan", check: "false" }
        ]
    },
    {
        question: "Which of the below mentioned diseases occur due to lack of blood?",
        answers: [
            { text: "Diarrhoea", check: "false" },
            { text: "Anaemia", check: "true" },
            { text: "Malaria", check: "false" },
            { text: "Dengue", check: "false" }
        ]
    },
    {
        question: "Who is the CEO of Instagram?",
        answers: [
            { text: "Mark Zuckerberg", check: "false" },
            { text: "Elon Musk", check: "false" },
            { text: "Bill Gates", check: "false" },
            { text: "Adam Mosseri", check: "true" }
        ]
    }
];

const quiz = document.getElementById("quiz");
const quesElement = document.getElementById("ques");
const nextButton = document.getElementById("next-btn");
const options = document.querySelector(".options");
const option = document.getElementsByClassName("option");
let curQuesIndex = 0;
let score = 0;

const selectAnswer = (e) => {
    if(e.target.dataset.check === "true"){
        e.target.classList.add("click-true");
        score += 1;
    }else{
        e.target.classList.add("click-false");
    }
    Array.from(options.children).forEach(button => {
        if(button.dataset.check === "true"){
            button.classList.add("click-true");
        }
        button.disabled = true;
    });
    document.getElementById("button").style.display = "block";
}

function showQuestion(){
    let currentQues = questions[curQuesIndex];
    let quesNo = curQuesIndex + 1;
    quesElement.innerHTML = quesNo + ". " + currentQues.question;
    currentQues.answers.forEach((answer,i) =>{
        option.item(i).innerHTML = currentQues.answers[i].text;
        if(answer.check){
            option.item(i).dataset.check = answer.check;
        }
        option.item(i).addEventListener("click",selectAnswer);
    });
    
}



nextButton.addEventListener("click",()=>{
    if(nextButton.innerHTML == "Play Again"){
        startQuiz();
    }else{   
        Array.from(options.children).forEach(button => button.disabled = false);
        curQuesIndex += 1;
        if(curQuesIndex >= questions.length){
            nextButton.innerHTML = "Play Again";
            quesElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
            options.style.display = "none";
        }else{
            showQuestion();
        }  
        for(let i = 0;i<option.length;i++){
            option.item(i).classList.remove("click-true");
            option.item(i).classList.remove("click-false");
        }
  
    }
})



function startQuiz(){
    curQuesIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    options.style.display = "flex";
    showQuestion();
}

startQuiz();

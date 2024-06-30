function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

    this.getQuestionByIndex = function () {
        return this.questions[this.questionIndex]
    }

    this.loadQuestions = function () {

        if(this.questionIndex == this.questions.length) {
            this.showScores()
        } else {
            let questionElement = document.getElementById("question")
            questionElement.innerText = this.getQuestionByIndex().text
    
            let choices = this.getQuestionByIndex().choices;
            for(let i = 0; i < choices.length; i++) {
                let element = document.getElementById("btn" + i)
                element.innerText = choices[i]
                this.handleOptionBtn("btn"+i)
            }
            this.showProgress()
        }
        
    }
    this.showScores = function() {
        let h1 = document.querySelector("h1")
        h1.innerText = "Result"
        let quizDetails = document.querySelector(".quiz-details");
        let userscore=this.score;
        console.log(userscore);
        if (userscore > 3){ // if user scored more than 3
            quizDetails.innerHTML = `<h2><span><center>Well Done and Congrats! 🎉</center></span>  Your score is : ${this.score} and Percentage is : ${(this.score/this.questions.length * 100)}<span>&#37;</span></h2>`
        }
        else if(userscore > 1){ // if user scored more than 1
            quizDetails.innerHTML = `<h2><span><center>Nice and Keep it up 😎</center></span>  Your score is : ${this.score} and Percentage is : ${(this.score/this.questions.length * 100)}<span>&#37;</span></h2>`
        }
        else{ // if user scored less than 1
            quizDetails.innerHTML = `<h2><span><center>Better Luck Next Time , Sorry 😐</center></span>  Your score is : ${this.score} and Percentage is : ${(this.score/this.questions.length * 100)}<span>&#37;</span></h2>`
        }

    }
    this.showProgress = function() {
        let progresselem = document.getElementById("progress")
        progresselem.innerHTML = `Question ${this.questionIndex+1} of ${this.questions.length}`
    }


    this.checkOptionWithAnswer = function(answer) {
        if(this.getQuestionByIndex().answer == answer) {
            this.score++;
        }
    }

    this.handleOptionBtn = function (btnId) {
        let btn = document.getElementById(btnId)
        let self = this;
        
        btn.onclick = function() {
            
            self.checkOptionWithAnswer(btn.innerText)
            self.questionIndex++;
            self.loadQuestions();
        }
    }


}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;


}

let questions = [
    new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a", ["Language", "Programming Language", "Development", "All"], "Programming Language"),
    new Question("What is Python?", ["Interpreted","Dynamic Semantics","Object Oriented","All"],"All"),
]
let quiz = new Quiz(questions)

quiz.loadQuestions()
const savingsQuestionaire = {
    title: 'Savings Quiz',
    questions: [
        {
            id: 0,
            question: 'What is the purpose of the "pay yourself first" strategy? ',
            answers: [
                {
                    choice: 'a) Treating yourself to a shopping spree.',
                    correct: false,
                },
                {
                    choice: 'b) Prioritizing saving by setting aside money before paying bills.',
                    correct: true,
                },
                {
                    choice: 'c) Investing in the latest technology',
                    correct: false,
                }

            ]
        },
        {
            id: 1,
            question: 'Which of the following is a key benefit of setting specific savings goals?',
            answers: [
                {
                    choice: 'a) It only benefits adults.',
                    correct: false,
                },
                {
                    choice: 'b) It helps track progress and stay motivated.',
                    correct: true,
                },
                {
                    choice: 'c) It restricts you from having fun.',
                    correct: false,
                }
            ]
        },
        {
            id: 2,
            question: 'True or False: Saving small amounts regularly does not make a significant impact.',
            answers: [
                {
                    choice: 'TRUE',
                    correct: false,
                },
                {
                    choice: 'FALSE',
                    correct: true,
                },
                
            ]
        },
        {
            id: 3,
            question: 'What is the purpose of a sinking fund in saving? ',
            answers: [
                {
                    choice: 'a) Saving for daily expenses.',
                    correct: false,
                },
                {
                    choice: 'b) Investing in high-risk stocks. ',
                    correct: false,
                },
                {
                    choice: 'c) Setting aside money for predictable, non-monthly expenses. ',
                    correct: true,
                }
            ]
        },
        {
            id: 4,
            question: 'True or False: Saving money means you cannot enjoy fun activities or treat yourself occasionally.',
            answers: [
                {
                    choice: 'TRUE',
                    correct: false,
                },
                {
                    choice: 'FALSE',
                    correct: true,
                },
                
            ]
        },
        {
            id: 5,
            question: 'What is the "latte factor" in saving? ',
            answers: [
                {
                    choice: 'a) Investing in expensive coffee brands.',
                    correct: false,
                },
                {
                    choice: 'b) Only buying lattes and avoiding other beverages.',
                    correct: false,
                },
                {
                    choice: 'c) Cutting back on daily coffee purchases to save money. ',
                    correct: true,
                }
            ]
        },
        {
            id: 6,
            question: 'What does the acronym SMART stand for in the context of setting savings goals? ',
            answers: [
                {
                    choice: 'a) Simple, Manageable, Achievable, Realistic, Time-bound',
                    correct: true,
                },
                {
                    choice: 'b) Spend More, Achieve Results Today.',
                    correct: false,
                },
                {
                    choice: 'c) Super, Magical, Amazing, Rewarding, Timeless',
                    correct: false,
                }
            ]
        },
        {
            id: 7,
            question: 'True or False: It is better to save money in a piggy bank at home than in a bank account.',
            answers: [
                {
                    choice: 'TRUE',
                    correct: false,
                },
                {
                    choice: 'FALSE',
                    correct: true,
                },
            ]
        },
        {
            id: 8,
            question: 'How does the concept of "delayed gratification" relate to saving?',
            answers: [
                {
                    choice: 'a)Spending money immediately without waiting.',
                    correct: false,
                },
                {
                    choice: 'b) Postponing spending to achieve long-term goals.',
                    correct: true,
                },
                {
                    choice: 'c)  Instantly rewarding oneself with purchases.',
                    correct: false,
                }
            ]
        },
        {
            id: 9,
            question: 'What is the importance of regularly reviewing and adjusting your savings plan?',
            answers: [
                {
                    choice: 'a) It helps adapt to changes in financial goals and circumstances.',
                    correct: true,
                },
                {
                    choice: 'b) It ensures you never spend money on fun activities.',
                    correct: false,
                },
                {
                    choice: 'c) It is unnecessary, as saving plans never need adjustment',
                    correct: false,
                }
            ]
        },
        {
            id: 10,
            question: 'True or False: Saving for retirement is not something teenagers need to worry about.',
            answers: [
                {
                    choice: 'TRUE',
                    correct: false,
                },
                {
                    choice: 'FALSE',
                    correct: true,
                },
            ]
        }

    ]

}

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion(savingsQuestionaire.questions[0]);
};


const gameContainer = document.getElementById('gameContainer');
gameContainer.innerHTML = renderQuestion(savingsQuestionaire.questions[0]);

startQuiz();

function renderQuestion(questionObject) {
    if (!questionObject) {
        return `<div class="gameContainer justify-center flex-column">
        <p> You have completed the quiz!</p></div>`;
    }

    const { id, question, answers } = questionObject;

    const answerHTML = answers.map((answer, index) => {
        return `<div class="answer-container justify-center flex-column">
            <p class="answer-option" data-index="${index}" data-correct="${answer.correct}" onclick="handleAnswer(${id}, ${index})">${answer.choice}</p>
        </div>`;
    }).join('');

    return `<div class="question-container justify-center flex-column">
        <h2 class="question" id="question">${question}</h2>
        ${answerHTML}
    </div>`;
}


function handleAnswer(questionId, selectedAnswerIndex) {
    const selectedAnswer = savingsQuestionaire.questions[questionId].answers[selectedAnswerIndex];
    const isCorrect = selectedAnswer.correct;

    // Highlight 
    const selectedAnswerElement = document.querySelector(`[data-index="${selectedAnswerIndex}"]`);

    if (isCorrect) {
        selectedAnswerElement.classList.add("correct");
        score++;

        // Green Checkmark ADD
    } else {
        selectedAnswerElement.classList.add("incorrect");
        // red X icon ADD
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < savingsQuestionaire.questions.length) {

        setTimeout(() => {
            gameContainer.innerHTML = renderQuestion(savingsQuestionaire.questions[currentQuestionIndex]);
        }, 1000);
    } else {
        // Add score and level
        setTimeout(() => {
            const resultHTML = `<div class="question-container justify-center flex-column">
            <p> You have completed the quiz!</p>
             Your Score: ${score} out of ${savingsQuestionaire.questions.length}.</div>`;
            gameContainer.innerHTML = resultHTML;
        }, 1000);
    }
}

function resultLevel(score){
    let gameContainer = document.getElementById("gameContainer");

    if (score === 10) {
        gameContainer.innerHTML = "<p>Congratulations! You pass! </p>";
    } else if (score =>7) {
        gameContainer.innerHTML = `<p>You got ${score} questions right. Keep it up!</p>`;
    } else {
        gameContainer.innerHTML = "<p>Oops! You didn't get enough questions right. Try again!</p>";
    } 

}
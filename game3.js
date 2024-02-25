const creditQuestionaire = {
    title: 'Credit Quiz',
    questions: [
        {
            id: 0,
            question: 'What is a credit score?',
            answers: [
                {
                    choice: 'a) The total amount of money in your bank account.',
                    correct: false,
                },
                {
                    choice: 'b) A numerical representation of your creditworthiness.',
                    correct: true,
                },
                {
                    choice: 'c) The number of credit cards you own ',
                    correct: false,
                }

            ]
        },
        {
            id: 1,
            question: 'Which of the following factors is NOT typically considered when calculating a credit score?',
            answers: [
                {
                    choice: 'a) Payment history',
                    correct: false,
                },
                {
                    choice: 'b) Social media activity ',
                    correct: true,
                },
                {
                    choice: 'c) Types of credit used',
                    correct: false,
                }
            ]
        },
        {
            id: 2,
            question: 'True or False: Paying bills on time has no impact on your credit score.',
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
            question: 'What is the credit score range according to the FICO scoring system? ',
            answers: [
                {
                    choice: 'a) 0-100 ',
                    correct: false,
                },
                {
                    choice: 'b)  200-800 ',
                    correct: false,
                },
                {
                    choice: 'c)  300-850  ',
                    correct: true,
                }
            ]
        },
        {
            id: 4,
            question: 'What is the recommended action if you find an error on your credit report? ',
            answers: [
                {
                    choice: 'Report it to the credit bureau and dispute the error ',
                    correct: true,
                },
                {
                    choice: 'Close all your credit accounts immediately',
                    correct: false,
                },
                {
                    choice:'Share it on social media for awareness ',
                    correct: false,
                },
                
            ]
        },
        {
            id: 5,
            question: 'What is the significance of a higher credit score?',
            answers: [
                {
                    choice: 'a) Higher interest rates on loans ',
                    correct: false,
                },
                {
                    choice: 'b) Lower interest rates on loans .',
                    correct: true,
                },
                {
                    choice: 'c)  No impact on loan interest rates ',
                    correct: false,
                }
            ]
        },
        {
            id: 6,
            question: 'What is the purpose of a co-signer on a loan or credit application?',
            answers: [
                {
                    choice: 'a) To be responsible for the entire debt if the primary borrower defaults',
                    correct: true,
                },
                {
                    choice: 'b)  To share the debt equally.',
                    correct: false,
                },
                {
                    choice: 'c) To improve the credit score of the primary borrower ',
                    correct: false,
                }
            ]
        },
        {
            id: 7,
            question: 'What is the recommended utilization rate for credit cards?',
            answers: [
                {
                    choice: '50%',
                    correct: false,
                },
                {
                    choice: '30%',
                    correct: true,
                },
                {
                    choice: '10%',
                    correct: false, 
                },
            ]
        },
        {
            id: 8,
            question: 'What is the grace period on a credit card?',
            answers: [
                {
                    choice: 'a) The time between the purchase date and the due date to pay the bill without incurring interest.',
                    correct: true,
                },
                {
                    choice: 'b) The time you have to return a purchased item.',
                    correct: false,
                },
                {
                    choice: 'c) The period during which you can use a credit card without any restrictions.',
                    correct: false,
                }
            ]
        },
        {
            id: 9,
            question: 'How often can you request a free copy of your credit report from each of the major credit bureaus?',
            answers: [
                {
                    choice: 'a)  Once a year.',
                    correct: true,
                },
                {
                    choice: 'b) Every six months.',
                    correct: false,
                },
                {
                    choice: 'c) Only when you are denied credit.',
                    correct: false,
                }
            ]
        },

    ]

}


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion(creditQuestionaire.questions[0]);
};


const gameContainer = document.getElementById('gameContainer');
gameContainer.innerHTML = renderQuestion(creditQuestionaire.questions[0]);

startQuiz();

function renderQuestion(questionObject) {
    if (!questionObject) {
        return "<p>Quiz completed!</p>";
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
    const selectedAnswer = creditQuestionaire.questions[questionId].answers[selectedAnswerIndex];
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

    if (currentQuestionIndex < creditQuestionaire.questions.length) {

        setTimeout(() => {
            gameContainer.innerHTML = renderQuestion(creditQuestionaire.questions[currentQuestionIndex]);
        }, 1000);
    } else {
        // Add score and level
        setTimeout(() => {
            const resultHTML = `<h2>Quiz Completed!</h2>
             Your Score: ${score} out of ${creditQuestionaire.questions.length}.`;
            gameContainer.innerHTML = resultHTML;
        }, 1000);
    }
}

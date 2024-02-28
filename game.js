
const budgetingQuestionaire = {
    title: 'Budgeting Quiz',
    questions: [
        {
            id: 0,
            question: 'What is the purpose of a personal budget?',
            answers: [
                {
                    choice: 'a) To figure out how much you earn',
                    correct: false,
                },
                {
                    choice: 'b) To figure out how much you spend',
                    correct: false,
                },
                {
                    choice: 'c) Both of the above',
                    correct: true,
                }

            ]
        },
        {
            id: 1,
            question: 'At what age do most Americans first begin thinking about saving for retirement?',
            answers: [
                {
                    choice: 'a) 30 years old',
                    correct: false,
                },
                {
                    choice: 'b) 40 years old',
                    correct: true,
                },
                {
                    choice: 'c) 50 years old',
                    correct: false,
                }
            ]
        },
        {
            id: 2,
            question: 'What is the average age that working Americans think they will retire?',
            answers: [
                {
                    choice: 'a) 60 years old',
                    correct: false,
                },
                {
                    choice: 'b) 65 years old',
                    correct: true,
                },
                {
                    choice: 'c) 70 years old',
                    correct: false,
                }
            ]
        },
        {
            id: 3,
            question: 'What two categories should you divide your spending into?',
            answers: [
                {
                    choice: 'a) Fixed and discretionary spending',
                    correct: true,
                },
                {
                    choice: 'b) Essential and miscellaneous spending',
                    correct: false,
                },
                {
                    choice: 'c) Priority and secondary spending',
                    correct: false,
                }
            ]
        },
        {
            id: 4,
            question: 'The goal of a good budget plan is to save ____ percent of your earnings each month.',
            answers: [
                {
                    choice: 'a) 5',
                    correct: false,
                },
                {
                    choice: 'b) 10',
                    correct: true,
                },
                {
                    choice: 'c) 15',
                    correct: false,
                }
            ]
        },
        {
            id: 5,
            question: 'How can you stay on track with your new personal budget?',
            answers: [
                {
                    choice: 'a) Keep track of all your receipts',
                    correct: false,
                },
                {
                    choice: 'b) Write down all your expenses in a notebook',
                    correct: false,
                },
                {
                    choice: 'c) Both of the above',
                    correct: true,
                }
            ]
        },
        {
            id: 6,
            question: 'How often should you review your budget goals?',
            answers: [
                {
                    choice: 'a) Every month',
                    correct: true,
                },
                {
                    choice: 'b) Every few months',
                    correct: false,
                },
                {
                    choice: 'c) Every year',
                    correct: false,
                }
            ]
        },
        {
            id: 7,
            question: 'What is an emergency fund?',
            answers: [
                {
                    choice: 'a) Funding for the local fire hydrant',
                    correct: false,
                },
                {
                    choice: 'b) Money set aside for eating out.',
                    correct: false,
                },
                {
                    choice: 'c) Savings for unexpected health and/or necessities expenses.',
                    correct: true,
                }
            ]
        },
        {
            id: 8,
            question: 'What is the 50/30/20 rule in budgeting? ',
            answers: [
                {
                    choice: 'a) A guideline for distributing income: 50% needs, 30% wants, 20% savings.',
                    correct: true,
                },
                {
                    choice: 'b) The recommended amount of money to spend on luxury items.',
                    correct: false,
                },
                {
                    choice: 'c)  A rule only applicable to adults',
                    correct: false,
                }
            ]
        },
        {
            id: 9,
            question: 'When creating a budget, what does the term "cash flow" refer to?',
            answers: [
                {
                    choice: 'a) The physical flow of cash in and out of your wallet.',
                    correct: false,
                },
                {
                    choice: 'b) The movement of money into and out of your bank account.',
                    correct: true,
                },
                {
                    choice: 'c) The speed at which you spend money.',
                    correct: false,
                }
            ]
        },
        {
            id: 10,
            question: 'What is the purpose of an envelope system in budgeting?',
            answers: [
                {
                    choice: 'a) To organize and store receipts.',
                    correct: false,
                },
                {
                    choice: 'b) To allocate cash for specific spending categories. ',
                    correct: true,
                },
                {
                    choice: 'c) To keep extra money hidden away.',
                    correct: false,
                }
            ]
        }

    ]

}
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion(budgetingQuestionaire.questions[0]);
};


const gameContainer = document.getElementById('gameContainer');
gameContainer.innerHTML = renderQuestion(budgetingQuestionaire.questions[0]);

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
    const selectedAnswer = budgetingQuestionaire.questions[questionId].answers[selectedAnswerIndex];
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

    if (currentQuestionIndex < budgetingQuestionaire.questions.length) {

        setTimeout(() => {
            gameContainer.innerHTML = renderQuestion(budgetingQuestionaire.questions[currentQuestionIndex]);
        }, 1000);
    } else {
        // Add score and level
        setTimeout(() => {
            const resultHTML = `<div class="question-container justify-center flex-column">
            <p> You have completed the quiz!</p>
             Your Score: ${score} out of ${budgetingQuestionaire.questions.length}.</div>`;
            gameContainer.innerHTML = resultHTML;
        }, 1000);
    }
}






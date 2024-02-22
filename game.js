const budgetingQuestionaire = {
    title: 'Budgeting Quiz',
    questions: [
        {
            id: 0,
            question: 'What is the purpose of a personal budget?',
            answers: [
                {
                    title: 'a) To figure out how much you earn',
                    correct: false,
                },
                {
                    title: 'b) To figure out how much you spend',
                    correct: false, 
                },
                {
                    title: 'c) Both of the above',
                    correct: true, 
                }
    
            ]
        },
        {
            id: 1,
            question: 'At what age do most Americans first begin thinking about saving for retirement?',
            answers: [
                {
                    title: 'a) 30 years old',
                    correct: false,
                },
                {
                    title: 'b) 40 years old',
                    correct: true, 
                },
                {
                    title: 'c) 50 years old',
                    correct: false, 
                }
            ]
        },
        {
            id: 2,
            question: 'What is the average age that working Americans think they will retire?',
            answers: [
                {
                    title: 'a) 60 years old',
                    correct: false,
                },
                {
                    title: 'b) 65 years old',
                    correct: true, 
                },
                {
                    title: 'c) 70 years old',
                    correct: false, 
                }
            ]
        },
        {
            id: 3,
            question: 'What two categories should you divide your spending into?',
            answers: [
                {
                    title: 'a) Fixed and discretionary spending',
                    correct: true,
                },
                {
                    title: 'b) Essential and miscellaneous spending',
                    correct: false, 
                },
                {
                    title: 'c) Priority and secondary spending',
                    correct: false, 
                }
            ]
        },
        {
            id: 4,
            question: 'The goal of a good budget plan is to save ____ percent of your earnings each month.',
            answers: [
                {
                    title: 'a) 5',
                    correct: false,
                },
                {
                    title: 'b) 10',
                    correct: true, 
                },
                {
                    title: 'c) 15',
                    correct: false, 
                }
            ]
        },
        {
            id: 5,
            question: 'How can you stay on track with your new personal budget?',
            answers: [
                {
                    title: 'a) Keep track of all your receipts',
                    correct: false,
                },
                {
                    title: 'b) Write down all your expenses in a notebook',
                    correct: false, 
                },
                {
                    title: 'c) Both of the above',
                    correct: true, 
                }
            ]
        },
        {
            id: 6,
            question: 'How often should you review your budget goals?',
            answers: [
                {
                    title: 'a) Every month',
                    correct: true,
                },
                {
                    title: 'b) Every few months',
                    correct: false, 
                },
                {
                    title: 'c) Every year',
                    correct: false, 
                }
            ]
        },
        {
            id: 7,
            question: 'What is an emergency fund?',
            answers: [
                {
                    title: 'a) Funding for the local fire hydrant',
                    correct: false,
                },
                {
                    title: 'b) Money set aside for eating out.',
                    correct: false, 
                },
                {
                    title: 'c) Savings for unexpected health and/or necessities expenses.',
                    correct: true, 
                }
            ]
        },
        {
            id: 8,
            question: 'What is the 50/30/20 rule in budgeting? ',
            answers: [
                {
                    title: 'a) 30 years old',
                    correct: false,
                },
                {
                    title: 'b) 40 years old',
                    correct: true, 
                },
                {
                    title: 'c) 50 years old',
                    correct: false, 
                }
            ]
        },
        {
            id: 9,
            question: 'At what age do most Americans first begin thinking about saving for retirement?',
            answers: [
                {
                    title: 'a) 30 years old',
                    correct: false,
                },
                {
                    title: 'b) 40 years old',
                    correct: true, 
                },
                {
                    title: 'c) 50 years old',
                    correct: false, 
                }
            ]
        },
        {
            id: 10,
            question: 'At what age do most Americans first begin thinking about saving for retirement?',
            answers: [
                {
                    title: 'a) 30 years old',
                    correct: false,
                },
                {
                    title: 'b) 40 years old',
                    correct: true, 
                },
                {
                    title: 'c) 50 years old',
                    correct: false, 
                }
            ]
        }

    ]

}

function renderQuestion(questionObject) {
    const { question, answers } = questionObject;
    const answerHTML = answers.map(answer => {
        return `<div class="answer-container">
        <p class= "answer-option">${answer.title}</p>
    </div>`
    }).join('')
    return `<div class="question-container">
    <h2 class= "question" id="question">${question}</h2>
        ${answerHTML} </div>
 
 `
}

const gameContainer = document.getElementById('gameContainer');
gameContainer.innerHTML = renderQuestion(budgetingQuestionaire.questions[0]);

function setUpQuestions(){
    // This is for event listeners 
}

function tearDownQuestions(){
    //Rem Event Listeners 
}



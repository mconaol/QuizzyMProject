const savingsQuestionaire = {
    title: 'Savings Quiz',
    questions: [
        {
            id: 0,
            question: 'How much should I save to retire?',
            answers: [
                {
                    title: '10%',
                    correct: true,
                },
                {
                    title: '20%',
                },
                {
                    title: '30%',
                },
                {
                    title: '40%',
                }
            ]
        },
        {
            id: 1,
            question: 'How much should I save $@?',
            answers: [
                {
                    title: '10%',
                    correct: true,
                },
                {
                    title: '20%',
                },
                {
                    title: '30%',
                },
                {
                    title: '40%',
                }
            ]
        },

    ],

}

function renderQuestion(questionObject) {
    const { question, answers } = questionObject;
    const answerHTML = answers.map(answer => {
        return `<div class="answer-container">
        <p>${answer.title}</p>
    </div>`
    }).join('')
    return `<h2 id="question">${question}</h2>
        ${answerHTML}
 
 `
}

const gameContainer = document.getElementById('gameContainer');
gameContainer.innerHTML = renderQuestion(savingsQuestionaire.questions[0]);

function setUpQuestions(){
    // This is for event listeners 
}

function tearDownQuestions(){
    //Rem Event Listeners 
}
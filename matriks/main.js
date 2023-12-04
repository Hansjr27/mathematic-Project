const questions = [
    { question: 'What is the sum of the matrices A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]]?', answer: '[[6, 8], [10, 12]]' },
    { question: 'What is the sum of the matrices A = [[3, 2], [1, 2]] and B = [[1, 1], [4, 2]]?', answer: '[[4, 3], [5, 4]]' },
    { question: 'What is the sum of the matrices A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]]?', answer: '[[6, 8], [10, 12]]' },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQuestionData = questions[currentQuestion];

    questionContainer.innerHTML = `
<p>${currentQuestionData.question}</p>
<input type="text" id="answer" placeholder="Enter your answer">
`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const correctAnswer = questions[currentQuestion].answer;
    const resultMessage = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        score++;
        resultMessage.innerText = 'Selamat, jawaban Anda benar!';
    } else {
        resultMessage.innerText = `Maaf, jawaban Anda salah. Jawaban yang benar: ${correctAnswer}`;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        resultMessage.innerText += ` Skor Anda: ${score}/${questions.length}`;
        document.getElementById('question-container').innerHTML = '<p>Selamat! Quiz selesai.</p>';
        document.querySelector('button').style.display = 'none';
    }
}

// Load the first question when the page loads
loadQuestion();
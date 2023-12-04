const questions = [
    { question: 'A = { x: 2, y: -3, z: 5 } , B = { x: -1, y: 4, z: 2 } jumlah kan vektor a dan b', answer: 'A+B=⟨2+(−1),(−3)+4,5+2⟩=⟨1,1,7⟩' },
    { question: 'C=⟨3,0,−2⟩ Hitung panjang (magnitudo) vektor C.', answer: 'Panjang vektor 
    ∣
    �
    ∣
    ∣C∣ dihitung dengan rumus:' },
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
const questions = [
    { question: 'Apakah bentuk umum dari fungsi kuadrat?', answer: 'Fungsi kuadrat memiliki bentuk umum dimana a, b dan c adalah konstanta.' },
    { question: 'Bagaimana menentukan arah pembukaan parabola pada fungsi kuadrat?', answer: 'Parabola pada fungsi kuadrat f(x) = ax^2 + bx + c membuka ke atas jika koefisien a > 0  dan membuka ke bawah jika a < 0' },
    { question: 'Apa yang disebut dengan akar-akar atau solusi dari fungsi kuadrat?', answer: 'Akar-akar atau solusi dari fungsi kuadrat adalah nilai-nilai Xyang membuat fungsi tersebut sama dengan nol.  Akar-akar tersebut dapat ditemukan menggunakan rumus kuadrat.' },
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
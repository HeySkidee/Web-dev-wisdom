const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Highly Textual Markup Language", "Hyperlink and Text Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the primary purpose of CSS in web development?",
        options: ["To define the structure of the webpage", "To create interactive elements", "To control the presentation and layout"],
        answer: "To control the presentation and layout"
    },
    {
        question: "Which programming language is commonly used for front-end web development?",
        options: ["Python", "Java", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheet", "Creative Style Sheet", "Computer Style Sheet"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "What is the purpose of the <img> tag in HTML?",
        options: ["To create a hyperlink", "To display an image", "To define a table"],
        answer: "To display an image"
    },
    {
        question: "What does HTTP stand for?",
        options: ["Hypertext Transfer Protocol", "Hyperlink Text Transfer Protocol", "High Tech Transfer Protocol"],
        answer: "Hypertext Transfer Protocol"
    },
    {
        question: "What is the purpose of the <a> tag in HTML?",
        options: ["To define a heading", "To create a link", "To insert an image"],
        answer: "To create a link"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["background-color", "text-color", "color"],
        answer: "color"
    },
    {
        question: "What does SEO stand for?",
        options: ["Search Engine Optimization", "Social Engagement Operations", "Software Environment Online"],
        answer: "Search Engine Optimization"
    },
    {
        question: "What is the purpose of the <div> tag in HTML?",
        options: ["To define a list", "To create a division or a section", "To insert a video"],
        answer: "To create a division or a section"
    },
    {
        question: "Which JavaScript library is used for building user interfaces?",
        options: ["jQuery", "React", "Angular"],
        answer: "React"
    },
    {
        question: "What is the purpose of the <ul> tag in HTML?",
        options: ["To create a table", "To define a heading", "To create an unordered list"],
        answer: "To create an unordered list"
    },
    {
        question: "What is the primary language used for styling web pages?",
        options: ["HTML", "CSS", "Python"],
        answer: "CSS"
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Dynamic Order Model"],
        answer: "Document Object Model"
    },
    {
        question: "What is the purpose of the <p> tag in HTML?",
        options: ["To create a paragraph", "To insert a picture", "To define a heading"],
        answer: "To create a paragraph"
    },
    {
        question: "Which programming language is often used for back-end web development?",
        options: ["Java", "C++", "Python"],
        answer: "Java"
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function loadQuestions() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        quizContainer.innerHTML = `
            <p class="question">${question.question}</p>
            <div class="options">
                ${question.options.map((option, index) => `
                    <label class="radio">
                        <input type="radio" name="answer" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
    } else {
        quizContainer.innerHTML = 'Quiz completed!';
        submitButton.style.display = 'none';
        showResults();
    }
}

function submitQuiz() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        loadQuestions();
    }
}

function showResults() {
    resultsContainer.innerHTML = `You scored ${score} out of ${questions.length} questions.`;
}

submitButton.addEventListener('click', submitQuiz);
loadQuestions();

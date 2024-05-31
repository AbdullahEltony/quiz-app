import {shuffleAnswers} from '../utils'


const questions = [
    {
        id: 1,
        question: "What is the capital city of France?",
        answers: [
            {
                text: "Berlin",
                correct: false,
            },
            {
                text: "Madrid",
                correct: false,
            },
            {
                text: "Paris",
                correct: true,
            },
            {
                text: "Rome",
                correct: false,
            },
        ],
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        answers: [
            {
                text: "Earth",
                correct: false,
            },
            {
                text: "Mars",
                correct: true,
            },
            {
                text: "Jupiter",
                correct: false,
            },
            {
                text: "Saturn",
                correct: false,
            },
        ],
    },
    {
        id: 3,
        question: "What is the largest mammal in the world?",
        answers: [
            {
                text: "Elephant",
                correct: false,
            },
            {
                text: "Blue Whale",
                correct: true,
            },
            {
                text: "Great White Shark",
                correct: false,
            },
            {
                text: "Giraffe",
                correct: false,
            },
        ],
    },
    {
        id: 4,
        question: "What is the smallest prime number?",
        answers: [
            {
                text: "1",
                correct: false,
            },
            {
                text: "2",
                correct: true,
            },
            {
                text: "3",
                correct: false,
            },
            {
                text: "5",
                correct: false,
            },
        ],
    },
    {
        id: 5,
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            {
                text: "Harper Lee",
                correct: true,
            },
            {
                text: "Mark Twain",
                correct: false,
            },
            {
                text: "Ernest Hemingway",
                correct: false,
            },
            {
                text: "F. Scott Fitzgerald",
                correct: false,
            },
        ],
    },
    {
        id: 6,
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            {
                text: "Gold",
                correct: false,
            },
            {
                text: "Oxygen",
                correct: true,
            },
            {
                text: "Osmium",
                correct: false,
            },
            {
                text: "Oganesson",
                correct: false,
            },
        ],
    },
    {
        id: 7,
        question: "In which year did the Titanic sink?",
        answers: [
            {
                text: "1905",
                correct: false,
            },
            {
                text: "1912",
                correct: true,
            },
            {
                text: "1915",
                correct: false,
            },
            {
                text: "1920",
                correct: false,
            },
        ],
    },
    {
        id: 8,
        question: "What is the hardest natural substance on Earth?",
        answers: [
            {
                text: "Gold",
                correct: false,
            },
            {
                text: "Iron",
                correct: false,
            },
            {
                text: "Diamond",
                correct: true,
            },
            {
                text: "Platinum",
                correct: false,
            },
        ],
    },
    {
        id: 9,
        question: "Which planet is closest to the sun?",
        answers: [
            {
                text: "Earth",
                correct: false,
            },
            {
                text: "Mars",
                correct: false,
            },
            {
                text: "Mercury",
                correct: true,
            },
            {
                text: "Venus",
                correct: false,
            },
        ],
    },
    {
        id: 10,
        question: "Who painted the Mona Lisa?",
        answers: [
            {
                text: "Vincent van Gogh",
                correct: false,
            },
            {
                text: "Pablo Picasso",
                correct: false,
            },
            {
                text: "Leonardo da Vinci",
                correct: true,
            },
            {
                text: "Claude Monet",
                correct: false,
            },
        ],
    },
    {
        id: 11,
        question: "Which language is the most spoken worldwide?",
        answers: [
            {
                text: "Spanish",
                correct: false,
            },
            {
                text: "English",
                correct: false,
            },
            {
                text: "Chinese",
                correct: true,
            },
            {
                text: "Hindi",
                correct: false,
            },
        ],
    },
    {
        id: 12,
        question: "What is the chemical symbol for gold?",
        answers: [
            {
                text: "Au",
                correct: true,
            },
            {
                text: "Ag",
                correct: false,
            },
            {
                text: "Pb",
                correct: false,
            },
            {
                text: "Fe",
                correct: false,
            },
        ],
    },
    {
        id: 13,
        question: "What is the tallest mountain in the world?",
        answers: [
            {
                text: "K2",
                correct: false,
            },
            {
                text: "Mount Everest",
                correct: true,
            },
            {
                text: "Kangchenjunga",
                correct: false,
            },
            {
                text: "Lhotse",
                correct: false,
            },
        ],
    },
    {
        id: 14,
        question: "Who is the author of the Harry Potter series?",
        answers: [
            {
                text: "J.R.R. Tolkien",
                correct: false,
            },
            {
                text: "George R.R. Martin",
                correct: false,
            },
            {
                text: "J.K. Rowling",
                correct: true,
            },
            {
                text: "C.S. Lewis",
                correct: false,
            },
        ],
    },
    {
        id: 15,
        question: "Which gas is most abundant in the Earth's atmosphere?",
        answers: [
            {
                text: "Oxygen",
                correct: false,
            },
            {
                text: "Carbon Dioxide",
                correct: false,
            },
            {
                text: "Nitrogen",
                correct: true,
            },
            {
                text: "Hydrogen",
                correct: false,
            },
        ],
    },
];

export const questionBank = shuffleAnswers(questions);

export const moneyPyramid = 
[
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1.000" },
    { id: 6, amount: "$ 2.000" },
    { id: 7, amount: "$ 4.000" },
    { id: 8, amount: "$ 8.000" },
    { id: 9, amount: "$ 16.000" },
    { id: 10, amount: "$ 32.000" },
    { id: 11, amount: "$ 64.000" },
    { id: 12, amount: "$ 125.000" },
    { id: 13, amount: "$ 250.000" },
    { id: 14, amount: "$ 500.000" },
    { id: 15, amount: "$ 1.000.000" },
].reverse()
  
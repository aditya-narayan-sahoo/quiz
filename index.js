const readlineSync = require("readline-sync");
const chalk = require("chalk");

let userName = readlineSync.question("Enter your name ");
let score = 0;
console.log("Welcome " + userName);
console.log("Here are some questions about me...");

let highScore = {
  name: "Deep",
  score: "3",
}
let questions = [{
  question: "How old am I? ",
  answer: "19",
}, {
  question: "What is my full name? ",
  answer: "Aditya Narayan Sahoo",
}, {
  question: "Where do I study? ",
  answer: "ITER",
}, {
  question: "Which animal do I love the most? ",
  answer: "Cheems",
}];


function play(question, answer) {
  let userAns = readlineSync.question(question);
  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Correct"));
    score++;
  } else {
    console.log(chalk.red("Wrong"));
  }
  console.log("Your score is " + score);
  console.log("-------------");
}
function game() {
  for (let i = 0; i < questions.length; i++) {
    let currentQues = questions[i];
    play(currentQues.question, currentQues.answer);
  }
}
game();
console.log("Your final score is " + score);
if (highScore.score < score) {
  console.log("You've scored a new high score");
  console.log("New high score is: " + score);
} else {
  console.log("You could not beat the high score");
}
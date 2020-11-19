// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ["What year did the first Apple iPhone launch?", "2007"],
  ["Originally Amazon only sold which product?", "Books"],
  ["A log file is saved in what type of format?", "Plain text"]
];

// 2. Store the number of questions answered correctly
let correctAnswers = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for( let i = 0; i < questions.length; i++ ) {
  let answer = prompt(questions[i][0]);
  if( answer.toUpperCase() == questions[i][1] ) {
    correctAnswers++;
  }
}

// 4. Display the number of correct answers to the user
document.querySelector("main").innerHTML = `<h1>You answered ${correctAnswers} question(s) correctly.🎉 </h1>`; 
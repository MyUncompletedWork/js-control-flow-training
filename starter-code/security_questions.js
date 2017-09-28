console.log("security_questions.js loaded");

var securityQuestions = [
  {questions: 'What year is it now?' , expectedAnswer: '2017'},
  {questions: 'Who is on the moon?',expectedAnswer:'Armstrong'},
  {questions: 'Did you see that dog flying?', expectedAnswer: 'yes'}
];

var answer = null;

for (var i=0; i<securityQuestions.length;i++) {
  answer=window.prompt (securityQuestions[i].questions)
  if ( answer !== securityQuestions[i].expectedAnswer){
    alert('YOUR ARE WRONG!!!!'); break;
  }}

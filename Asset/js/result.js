import * as cookies from './utility/cookies.js';
//Work on redirect if cookie not set

let correct= 0;
const total_question= cookies.read('question_length') * 1;
const answers= Object.entries(JSON.parse(cookies.read('answer')));

answers.forEach((answer)=>{
    let question= JSON.parse(cookies.read(answer[0]));
    if(question.correctAnswer === answer[1]) correct += 1;
    console.log(question)
});

addEventListener('load', ()=>{
    document.getElementById('score').textContent= `${(correct/total_question) * 100}%`;
    
});
console.log(correct)
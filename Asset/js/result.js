import * as cookies from './utility/cookies.js';
import * as test_util from './utility/test_util.js';
//Work on redirect if cookie not set

let correct= 0;
const total_question= cookies.read('question_length') * 1;
const answers= Object.entries(JSON.parse(cookies.read('answer')));

answers.forEach((answer)=>{
    let question= JSON.parse(cookies.read(answer[0]));
    if(question.correctAnswer === answer[1]) correct += 1;
});

addEventListener('load', ()=>{
    document.getElementById('score').textContent= `${(correct/total_question) * 100}%`;
    test_util.preview(document.getElementById('preview'), answers);
    
});
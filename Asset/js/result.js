import * as cookies from './utility/cookies.js';
import * as test_util from './utility/test_util.js';

//redirect if cookie not set
const user= cookies.read('user');
if(user === "") window.location.href= "/";

let correct= 0;
const total_question= cookies.read('question_length') * 1;
const answers= Object.entries(JSON.parse(cookies.read('answer')));

answers.forEach((answer)=>{
    let question= JSON.parse(cookies.read(answer[0]));
    if(question.correctAnswer === answer[1]) correct += 1;
});

window.addEventListener('load', ()=>{
    document.getElementById('score').textContent= `${(correct/total_question) * 100}%`;
    document.getElementById('candidate').textContent= user;
    document.getElementById('date').textContent= new Date();;
    test_util.preview(document.getElementById('preview'), answers);
    
});
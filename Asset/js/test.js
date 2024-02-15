import * as cookies from './utility/cookies.js';
import * as test_util from './utility/test_util.js';
import navigation from './handler/navigation.js';

console.log(cookies.read('question'))
console.log(cookies.read('user'))
const user= cookies.read('user');
const questions= JSON.parse(cookies.read('question'));
let current_question= 0;
const answer= new Array(questions.length);

window.addEventListener('load', ()=>{
    //Display  participant name
    let h2= document.createElement("h2");
    h2.innerText= `Candidate name: ${user}`;
    document.querySelector('#candidate').appendChild(h2);

    //Display first Question 
    navigation(null, 0, questions, answer);

    //Add Event handler to nav button
    document.querySelectorAll("#nav button").forEach((btn)=> btn.addEventListener('click',(e)=> current_question= navigation(e, current_question, questions, answer)));

});


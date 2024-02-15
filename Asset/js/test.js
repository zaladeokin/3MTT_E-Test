import * as cookies from './utility/cookies.js';
import navigation from './handler/navigation.js';

const user= cookies.read('user');
// const questions= JSON.parse(cookies.read('question'));
let current_question= 0;
const answer= new Array(cookies.read('question_length')+0);

window.addEventListener('load', ()=>{
    //Display  participant name
    let h2= document.createElement("h2");
    h2.innerText= `Candidate name: ${user}`;
    document.querySelector('#candidate').appendChild(h2);

    //Display first Question 
    navigation(null, 0, answer);

    //Add Event handler to nav button
    document.querySelectorAll("#nav button").forEach((btn)=> btn.addEventListener('click',(e)=> current_question= navigation(e, current_question, answer)));

});


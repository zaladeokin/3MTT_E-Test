import * as cookies from './utility/cookies.js';
import navigation from './handler/navigation.js';
import submit from './handler/submit.js';

const user= cookies.read('user');
let current_question= 0;

let answer= {};
let limit= cookies.read('question_length') * 1;
for(let i = 0; i < limit; i++){
    answer["question"+i]= null
}

window.addEventListener('load', ()=>{
    //Display  participant name
    let h2= document.createElement("h2");
    h2.innerText= `Candidate: ${user}`;
    document.querySelector('#candidate').appendChild(h2);

    //Display first Question 
    navigation(null, 0, answer);

    //Add Event handler to nav button
    document.querySelectorAll("#nav button").forEach((btn)=> btn.addEventListener('click',(e)=> current_question= navigation(e, current_question, answer)));

     //Add Event handler to submit button
    document.querySelector("#candidate button").addEventListener('click', (e)=> submit(e, answer));

});


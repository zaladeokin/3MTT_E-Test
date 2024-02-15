import login from "./handler/login.js";
import * as cookies from './utility/cookies.js';


//Delete old session
let total_question= cookies.read('question_length')+0;
for(let i=0; i < total_question; i++){
    cookies.delete_ck('question'+i)
}
cookies.delete_ck('question_length')
cookies.delete_ck('answer')
cookies.delete_ck('user')


window.addEventListener('load', ()=>{
    document.querySelector('form').addEventListener("submit", login);
});
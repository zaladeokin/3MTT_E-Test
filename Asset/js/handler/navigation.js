import * as test_util from '../utility/test_util.js';
import updateSelection from '../handler/updateSelection.js'

const navigation= (e, current_question, questions, answer)=>{
    let node= document.querySelectorAll("#nav button");

    //Navigate
    if(e !== null){
        if(e.target.dataset.nav === "prev" && current_question !== 0) current_question -= 1;
        else if(e.target.dataset.nav === "next" && current_question !== questions.length - 1)current_question += 1;
    }

    //Hide and Show nav btn
    // Show prev btn
    if(current_question === 1 ) node[0].style.visibility = "visible";
    // Show next btn
    if(current_question === questions.length - 2) node[1].style.visibility = "visible";
    //Hide prev btn
    else if(current_question === 0) node[0].style.visibility = "hidden";
    //Hide next btn
    else if(current_question === questions.length - 1) node[1].style.visibility = "hidden";


    //Display  Question 
    test_util.question(document.querySelector('#question'), questions[current_question].question.text, current_question);

    test_util.options(document.querySelector('#options'), questions[current_question].shuffleOption, questions[current_question].id, answer[current_question], (e)=>{
        answer[current_question]= updateSelection(e);
    });
    
    return current_question; 
}

export default navigation;
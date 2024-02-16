import * as cookies from '../utility/cookies.js';

const submit= (e, answer, forcedSubmit= false)=>{
    let pending= 0;
    let canSubmit= true;

    let questions= Object.entries(answer);
    questions.forEach((question)=>{
        if(question[1] === null) pending += 1;
    });

    if(pending > 0  && !forcedSubmit){
        let plural= pending > 1 ? ['s', 'them', 'are'] : ['', "it", "is"];
        canSubmit= confirm(`${pending} question${plural[0]} ${plural[2]} yet to be answer.\n Do you want to submit without attending to ${plural[1]}?`);
    }

    if(canSubmit === true || forcedSubmit){
        cookies.create('answer', JSON.stringify(answer));
        window.location.href= "result.html";
    }
}


export default submit;
import submit from "./submit.js";

const forcedSubmit= (e, answer)=>{
    submit(e, answer, true);
}

export default forcedSubmit;
import * as cookies from '../utility/cookies.js';

const submit= (e, answer)=>{
    console.log('Submit');
    console.log(answer)
    cookies.create('answer', answer.toString());
    console.log(cookies.read('answer'))
}


export default submit;
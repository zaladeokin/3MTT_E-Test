import * as cookies from './utility/cookies.js';

let params= new URLSearchParams(window.location.search);

if(params.has('user') === false || params.get('user')=== ""){
    window.location.href= "../../index.html";
}else{

    let user= params.get('user');
    
    fetch("https://the-trivia-api.com/v2/questions")
    .then((res) => res.json())
    .then((data) =>{
        //Randomly shuffle correct answer with incorrect ones and add it to Question Object wit key "shuffleOption" creating a modify clone  of Question Object as concatenateShuffleOptionToQuestionObject. 
        data.forEach((question, index)=>{
            let shuffleOption= [...question.incorrectAnswers];
            shuffleOption.push(question.correctAnswer);
            shuffleOption.sort((a, b) => 0.5 - Math.random());
            let concatenateShuffleOptionToQuestionObject= {... question, shuffleOption: shuffleOption}
            cookies.create('question'+index, JSON.stringify(concatenateShuffleOptionToQuestionObject));
        })
        cookies.create('user', user);
        cookies.create('question_length', data.length.toString());
        document.querySelector('button').disabled= false;
    })
    .catch((err)=>{
        console.log('An error occurred on the server');
        window.location.href= "/";//Refresh a Request
    });
}


addEventListener('load', ()=>{
    document.querySelector('button').disabled= true;
});

import * as cookies from './cookies.js';

const question= (element, question, index)=>{
    let paragraph = document.createElement("p");
    paragraph.innerText= `Question ${index + 1}.\n ${question}`;
    element.innerHTML= "";//Clear previous Question
    element.appendChild(paragraph);
}

const options= (element, option_arr, id, selected_option, event)=>{
    //Clear previous Question option
    element.innerHTML= "";

    let selected_id= null;// store selected option id

    option_arr.forEach((input, index)=>{
        let option= document.createElement("input");
        option.type= "radio";
        option.name= id;
        option.value= input;
        option.id= index;
        //Checked if answer has been previousy recorded.
        if(selected_option !== undefined && input === selected_option) selected_id= index;

        let label= document.createElement("label");
        label.for= index;
        label.id= id+"_"+input;
        label.appendChild(option);
        label.innerHTML += input;

        element.appendChild(label);

        //Add EventListener if not in preview
        if(event !== null) label.addEventListener('change',event);
    });

    //Checked selected id
    if(selected_id !== null) document.getElementById(selected_id).checked= true; 
}

const preview= (element, answers)=>{
    let index= 0;

    answers.forEach((answer)=>{
        let card= document.createElement("div");
        card.setAttribute("class", "card");
        let div= document.createElement("div");
        let div1= document.createElement("div");

        let question_obj= JSON.parse(cookies.read(answer[0]));
        console.log(question_obj)
        //Show question
        question(div, question_obj.question.text, index);
        //Show option
        options(div1, question_obj.shuffleOption, question_obj.id, answer[0], null);
        card.appendChild(div);
        card.appendChild(div1)
        element.appendChild(card)

        //Check submitted answer
        document.getElementsByName(question_obj.id).forEach((inp)=>{
            console.log(answer)
            console.log(inp.value)
            if(inp.value === answer[1]) inp.checked= true;
            
            if(inp.value === question_obj.correctAnswer) document.getElementById(question_obj.id+"_"+inp.value).style.color= "#008000";
            else if(inp.value === answer[1] && inp.value !== question_obj.correctAnswer) document.getElementById(question_obj.id+"_"+inp.value).style.color= "#ff0000";


        });

        //increment
        index += 1;
    });
    //disabed all option
    document.querySelectorAll("input").forEach((inp)=> inp.disabled= true);
}

export { question, options, preview};
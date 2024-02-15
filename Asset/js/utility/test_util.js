const question= (element, question, index)=>{
    let paragraph = document.createElement("p");
    paragraph.innerText= `${index + 1}.\n ${question}`;
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
        label.appendChild(option);
        label.innerHTML += input;

        element.appendChild(label);

        //Add EventListener
        label.addEventListener('change',event);
    });

    //Checked selected id
    if(selected_id !== null) document.getElementById(selected_id).checked= true; 
}

export { question, options};
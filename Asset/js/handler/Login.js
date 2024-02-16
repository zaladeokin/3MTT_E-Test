const Login= (e)=>{

    e.preventDefault();

    let user= document.getElementById('participant');
    
    if(user.value !== "") window.location.href= "instruction.html?user="+user.value;
    
    else{
        let err= document.querySelector('span.error');
        err.innerHTML= "Invalid input";
        err.style.display= "block";
    }

}

export default Login;
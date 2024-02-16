const create= (key, value)=>{

    //Calcuate expiry to be 1hour
    let now= new Date().getTime();
    let expires= new Date(now+(60 * 60 * 1000));

    document.cookie = `${key}=${value};expires=${expires.toUTCString()};path=/`;
}


const read= (key)=>{
    key= key+"=";
    var allCookie= document.cookie;
    var value= false;

    if(allCookie != "" && key != "="){
        var cookie_in_arr= allCookie.split(";");//convert string to array

        for(let i=0; i<cookie_in_arr.length; i++){
            var fnd= cookie_in_arr[i].indexOf(key);
            //Eliminate space between each cookies string
            let startingIndex= i === 0 ? key.length : key.length + 1;

            if(fnd != -1){
                value= cookie_in_arr[i].substring(startingIndex);
                break;
            }else{
                value= "";
            }
        }
    }else{
        value = "";
    }

    return value;
}

const delete_ck= (key)=>{
    //Back date expiry to be 1hour
    let now= new Date().getTime();
    let expires= new Date(now-(60 * 60 * 1000));

    document.cookie = `${key}=;expires=${expires.toUTCString()};path=/`;

}


export { create, read, delete_ck };

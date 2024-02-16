let end= null

const msToHMS= (ms)=>{
    //Calculate seconds, minutes, and hour from diffs(milliseconds in unit)
       let seconds= Math.floor((ms % (1000 * 60))/1000);
       let minutes= Math.floor((ms % (1000 * 60 * 60))/(1000 * 60));
       let hours= Math.floor((ms % (1000 * 60 * 60 *60))/(1000 * 60 * 60));
      
       return [hours, minutes, seconds]
}

const init= (duration)=>{
    //duration is in minutes
    //getTime() returns date in milliseconds
    let start= new Date().getTime();
   
    //convert duration to milliseconds and add it to start time
    end= start + (duration * 60 * 1000)
}

const countDown= (duration, hoursNode, minutesNode, secondsNode, submitHandler)=>{
    //initialize 'end' time only once
    if(end === null) init(duration);
   
    const id = setInterval(()=>{
       let currentTime= new Date ().getTime();
       let diff= end - currentTime;
      
       let [hours, minutes, seconds] = msToHMS(diff);
      
       //update DOM
       hoursNode.innerHTML= hours.toString().padStart(2, 0);
       minutesNode.innerHTML= minutes.toString().padStart(2, 0);
       secondsNode.innerHTML= seconds.toString().padStart(2, 0);
      
       //if timeBy Percent is below 80% change text color to red
       
        //   hoursNode.style.color= 'red';
        //   minutesNode.style.color= 'red';     
        //   secondsNode.style.color= 'red';

       //stop interval when diff < 1sec ===1000ms
       if(Math.floor(diff) < 1000){
            clearInterval(id);
            submitHandler();
        }
      
    }, 1000);

}

export default countDown;

import {differenceInSeconds, DifferenceInSecondsOptions} from "date-fns";

function* countdownTimer(second:number){
    while(second>0){
        yield second;
        second--;
    }
}

let timerIterator= countdownTimer(25);

function displaycountdown(){
    let result=timerIterator.next()

    if (!result.done){
        const now=new Date();
        const countdownTimer= new Date(now.getTime()+(result.value*1000))
        const remainingSeconds=differenceInSeconds(countdownTimer,now)
        console.log(`Remainig Seconds: ${remainingSeconds}`);
        setTimeout(displaycountdown,1000)
        
    }else{
        console.log("Countdown Complete!");
        
    }
}
displaycountdown();
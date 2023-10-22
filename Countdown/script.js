const dayfield = document.getElementById("day");
const hourfield = document.getElementById("hrs");
const minfield = document.getElementById("mins");
const secfield = document.getElementById("secs");

const date = new Date("Dec 31, 2023 00:00:00").getTime();

let time = setInterval(()=>{
    const todayDate = new Date().getTime();
    let distance = date - todayDate;
    if(distance < 0){
        dayfield.innerHTML = "00";
        secfield.innerHTML = "00";
        minfield.innerHTML = "00";
        hourfield.innerHTML = "00";    
    }else{
        let sec = Math.floor((distance % (1000*60))/1000);
        let min = Math.floor((distance % (1000*60*60))/(1000*60));
        let hour = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        let day = Math.floor(distance /(1000*60*60*24));
    
        dayfield.innerHTML = ((day < 10)?"0":"") + day;
        secfield.innerHTML = ((sec < 10)?"0":"") + sec;
        minfield.innerHTML = ((min < 10)?"0":"") + min;
        hourfield.innerHTML = ((hour < 10)?"0":"") + hour;
    }
    
},1000);
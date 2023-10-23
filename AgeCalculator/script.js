const input = document.querySelector("input");
input.max = new Date().toISOString().split("T")[0];
const btn = document.querySelector("button");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
btn.addEventListener("click",()=>{
    let today = new Date();
    let dob = new Date(input.value);
    let d1 = dob.getDate();
    let m1 = dob.getMonth() + 1;
    let y1 = dob.getFullYear();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3, m3, d3;
    y3 = y2 - y1;
    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    year.innerHTML = y3;
    month.innerHTML = m3;
    day.innerHTML = d3;
    document.querySelector(".result").classList.add("visible");
})

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}
const display = document.getElementById("output");
const digits = document.querySelectorAll(".dig");
const clear = document.getElementById("Clear");
const del = document.getElementById("del");
const equal = document.getElementsByClassName("equal");

for(let i = 0;i<digits.length;i++){
    digits[i].addEventListener("click",()=>{
        if(output.value != 0){
            output.value =  output.value + digits[i].value;
        }else{
            output.value = digits[i].value; 
        }
    })
}

del.addEventListener("click",()=>{
    output.value = output.value.toString().slice(0,-1);
});

clear.addEventListener("click",()=>{
    output.value = "";
});

function evaluate(){
    let expr = output.value;
    let values = expr;
    let ans;
    for(let i = 0;i<expr.length;i++){
        switch(expr[i]){
            case '/':
                values = expr.split('/');
                ans = parseFloat(values[0])/parseFloat(values[1]);
                break;
            case "+":
                values = expr.split("+");
                ans = parseFloat(values[0])+parseFloat(values[1]);
                break;
            case "-":
                values = expr.split("-");
                ans = parseFloat(values[0])-parseFloat(values[1]);
                break;
            case "*":
                values = expr.split("*");
                ans = parseFloat(values[0])*parseFloat(values[1]);
                break;
        }
    }
    output.value = ans;

}

equal[0].addEventListener("click", evaluate);
document.body.addEventListener("keydown",(event)=>{
    event.preventDefault();
    if(event.key == "Enter"){
        evaluate();
    }else if(event.key == "Shift"){
        output.value = output.value;
    }else if(event.key == "Delete"){
        output.value = "";
    }else if(event.key == "Backspace"){
        output.value = output.value.toString().slice(0,-1);
    }else if((event.key <= 9 && event.key >= 0) || event.key == '+' || event.key == '-' || event.key == '*' || event.key == "/"){
        output.value += event.key;
    }
});

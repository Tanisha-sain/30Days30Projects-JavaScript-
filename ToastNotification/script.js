const success = document.getElementById("success");
const error = document.getElementById("error");
const invalid = document.getElementById("invalid");
const toastbox = document.getElementById("toastbox");
let successMsg = '<i class="fa fa-check-circle"></i> Successfully submitted';
let errorMsg = ' <i class="fa fa-times-circle"></i> Please fix the error!';
let invalidMsg = '<i class="fa fa-exclamation-circle"></i> Invalid input, check again';

function showToast(message){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = message;
    toastbox.appendChild(toast);

    if(message.includes("error")){
        toast.classList.add("error");
    }else if(message.includes("Invalid")){
        toast.classList.add("invalid");
    }

    setTimeout(()=>{
        toast.remove();
    },5000);

}


success.addEventListener("click",()=>{
    showToast(successMsg);
});
error.addEventListener("click",()=>{
    showToast(errorMsg);
});
invalid.addEventListener("click",()=>{
    showToast(invalidMsg);
});


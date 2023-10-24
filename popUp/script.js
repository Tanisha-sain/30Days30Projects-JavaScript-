const button = document.getElementById("submit");
const popup = document.getElementById("popup");
const ok = document.getElementById("okay");
button.addEventListener("click",()=>{
    popup.classList.add("open-popup");
});
okay.addEventListener("click",()=>{
    popup.classList.remove("open-popup");
})
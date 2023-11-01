const image = document.getElementById("image");
const btn = document.getElementsByClassName("btn");
console.log(btn);
for(let i = 0;i<btn.length;i++){
    btn[i].addEventListener("click",()=>{
        image.src = `image${i+1}.png`;
        for(bt of btn){
            bt.classList.remove("active");
        }
        btn[i].classList.add("active");
    })
}
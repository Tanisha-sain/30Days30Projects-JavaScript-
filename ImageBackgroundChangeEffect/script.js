const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const origImg = document.getElementById("originalImg");
const line = document.getElementById("line");
origImg.style.width = imgBox.offsetWidth + "px";
let leftSpace = imgBox.offsetLeft;

imgBox.addEventListener("mousemove",function(e){
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
})
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let icon = document.getElementById("icon");

song.addEventListener("loadedmetadata",()=>{
    progress.max = song.duration;
    progress.value = song.currentTime;
})

ctrlIcon.addEventListener("click",()=>{
    if(icon.classList.contains("fa-pause")){
        song.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }else{
        song.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    }
})

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.addEventListener("change",()=>{
    song.play();
    song.currentTime = progress.value;
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
})
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Toofan Hindi Mp3 Song - KGF Chapter 2 2022 ", filePath: "songs/1.mp3", coverPath: "covers/1.png"},
    {songName: "Papa Meri Jaan Mp3 Song - Animal 2023", filePath: "songs/2.mp3", coverPath: "covers/2.png"},
    {songName: "Channa Mereya Mp3 Song - Ae Dil Hai Mushkil 2016", filePath: "songs/3.mp3", coverPath: "covers/3.png"},
    {songName: "Bekhayali Mp3 Song - Kabir Singh 2019", filePath: "songs/4.mp3", coverPath: "covers/4.png"},
    {songName: "Soja Zara Mp3 Song - Baahubali 2 2017 ", filePath: "songs/5.mp3", coverPath: "covers/5.png"},
    {songName: "Jag Ghoomeya Mp3 Song - Sultan 2016", filePath: "songs/2.mp3", coverPath: "covers/6.png"},
    {songName: "Qissonmein Mp3 Song - Salaar 2023", filePath: "songs/2.mp3", coverPath: "covers/7.png"},
    {songName: "O Maahi Mp3 Song - Dunki 2023", filePath: "songs/2.mp3", coverPath: "covers/8.png"},
    {songName: "Tu Jo Mila Reprise Bajrangi Bhaijaan 2015 ", filePath: "songs/2.mp3", coverPath: "covers/9.png"},
    {songName: "Woh Mere Bin Mp3 Song - Atif Aslam 2020 ", filePath: "songs/4.mp3", coverPath: "covers/10.png"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
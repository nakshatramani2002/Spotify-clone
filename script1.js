console.log("Welcome to spotify");
let songIndex= 0;
let audioElement= new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar= document.getElementById('myprogressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Blinding Lights", filePath: "spotify clone/1.mp3", coverPath: "spotify clone/weekend.jpg"},
    {songName: "Save your tears", filePath: "spotify clone/2.mp3", coverPath: "spotify clone/weekend.jpg"},
    {songName: "Dont start now", filePath: "spotify clone/3.mp3", coverPath: "spotify clone/dua.png"},
    {songName: "Arcade", filePath: "song/4.mp3", coverPath: "spotify clone/weekend.jpg"},
    {songName: "Peaches", filePath: "song/5.mp3", coverPath: "spotify clone/weekend.jpg"},
    {songName: "You Right", filePath: "song/6.mp3", coverPath: "covers/weekend.jpg"},
    {songName: "Die for you", filePath: "song/7.mp3", coverPath: "covers/weekend.jpg"},
    {songName: "holiday", filePath: "song/8.mp3", coverPath: "covers/weekend.jpg"},
    {songName: "As it was", filePath: "song/9.mp3", coverPath: "covers/weekend.jpg"},
    {songName: "Shinso wa sasageyo", filePath: "song/10.mp3", coverPath: "covers/weekend.jpg"},
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
    
});




// handle play/ pause 
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
// listen to events
audioElement.addEventListener('timeupdate',() =>{
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    myprogressBar.value = progress;

})
myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myprogressBar.value *audioElement.duration/100 ;

})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    
    })
    

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= `${songIndex+1}.mp3`;
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })

})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src= `${songIndex+1}.mp3`;
    audioElement.currentTime= 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex= 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src= `${songIndex+1}.mp3`;
    audioElement.currentTime= 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

console.log("Hello welcome to Spotify-clone")
let songIndex = 0;
let audioelement = new Audio('./songs/1.mp3')
let masterplay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myprogressbar")
let songitems = Array.from(document.getElementsByClassName("songItem"))
let songs = [
    {songname:"Let you go",filepath:"./songs/1.mp3",coverpath:"./covers/1.jpg"},
    {songname:"Trap",filepath:"./songs/2.mp3",coverpath:"./covers/2.jpg"},
    {songname:"They Mad",filepath:"./songs/3.mp3",coverpath:"./covers/3.jpg"},
    {songname:"Rich the Kid",filepath:"./songs/4.mp3",coverpath:"./covers/4.jpg"},
    {songname:"Random song 1",filepath:"./songs/5.mp3",coverpath:"./covers/5.jpg"},
    {songname:"sleep at last",filepath:"./songs/6.mp3",coverpath:"./covers/6.jpg"},
    {songname:"Back it up",filepath:"./songs/7.mp3",coverpath:"./covers/7.jpg"},
    {songname:"Random song 2",filepath:"./songs/8.mp3",coverpath:"./covers/8.jpg"},
    {songname:"Random song 3",filepath:"./songs/9.mp3",coverpath:"./covers/9.jpg"},
    {songname:"True Love",filepath:"./songs/10.mp3",coverpath:"./covers/10.jpg"}
]

songitems.forEach((element,i) => {
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
});
// audioelement.play();
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime <=0){
        audioelement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        let opac = document.getElementsByClassName("songinfo");
        for(let i=0;i<opac.length;i++){
            opac[i].style.opacity = 1;
        }
    }
    else if(audioelement.played || audioelement.currentTime >0) 
    {
        audioelement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        let opac = document.getElementsByClassName("songinfo");
        for(let i=0;i<opac.length;i++){
            opac[i].style.opacity = 0;
        }
    }
})

audioelement.addEventListener('timeupdate',()=>{
    let myprogress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myProgressBar.value = myprogress;
})

myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime = parseInt((myProgressBar.value*audioelement.duration)/100);
})
let makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log(e.target);
        makeAllPlays();
        let ind = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioelement.src = `./songs/${ind+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
    })
})
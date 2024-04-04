const list = document.getElementsByClassName("playlistcontainer")[0];
const music = document.getElementsByClassName("music")[0];
const alltime = document.getElementsByClassName("currentandTime")[0];
const currentProgress = document.getElementById("currentProgress");
const play = document.getElementsByClassName("playButton")[0];
const pause = document.getElementsByClassName("pauseButton")[0];

const musicList = [
    {TrackID : "music/A_Lwan_Night_Ti_Thaw_A_Chit_Kyout_Joe_Lay_Prod_By_Ko_Htett.mp3" , title: "Tain Yae Yin Khon Than"  },
    {TrackID : "music/Monday _ Kevin Ko Ko (Official Audio).wav" , title: "Monday"},
    {TrackID : "music/Remix.mp3" , title: "Remix"}
]

for(let i = 0 ; i < musicList.length ; i ++){
    const track = document.createElement("div");
    track.classList.add("track");
    
    track.addEventListener("click", () =>{
        let song = musicList[i].TrackID;
        music.src = song;
        music.play();
        
    });
    
    const rollNo = (i + 1).toString() + ". " + musicList[i].title;
    track.textContent = rollNo;
    list.append(track);
};
let duration = 0;
let period = "00:00";
music.addEventListener("loadeddata" , ()=>{
     duration = Math.floor (music.duration); //147.349534
     period = totaltime(duration);

})


music.addEventListener("timeupdate" , ()=>{
    const current = Math.floor(music.currentTime);
    const now = totaltime(current);
    const currenttime = now + " / " + period;
    alltime.textContent = currenttime;
    updateCurrent(current);
})

const updateCurrent = (current)=>{
    const progressWidth = (500/duration) * current;
    currentProgress.style.width = progressWidth.toString() + "px";
}
const totaltime = (total)=>{
    const min = Math .floor(total/60);
    const sec = total%60;

    const sectext = sec < 10 ? "0"+ sec.toString() : sec;  
    const mintext = min < 10 ? "0"+ min.toString() : min;

    return(mintext + " : " + sectext)
};

let playsong = 0;
let isplaying = false;
play.addEventListener("click" , ()=>{
    const playsonglist = musicList[playsong].TrackID;
    music.src = playsonglist;
    music.play();
    isplaying = true;
    playpause();
});

const playpause = () =>{
    if (isplaying = true){
        play.style.display ="none";
        pause.style.display ="inline";
    }
    else{
        play.style.display ="inline";
        pause.style.display ="none";
    }
    
};

pause.addEventListener("click", ()=>{
    
    isplaying = false;
    
   music.pause();
   playpause();
})


import React from "react";
import { MdOutlineChangeCircle } from 'react-icons/md';


const songs = [
  "https://pagalworld.com.se/files/download/id/6586",
  "http://djckrajmix.wapkiz.com/filedownload/878641/Tu-Itni-Khoobsurat-Hai-Djckrajmix-tk-(djckrajmix.wapkiz.com).mp3",
  "https://pwdown.com/12987/03%20Baatein%20Ye%20Kabhi%20Na%20-%20Khamoshiyan%20(Arijit%20Singh)%20190Kbps.mp3",
  "https://pagalworld.com.se/files/download/id/3809",
  "https://pagalworld.com.se/files/download/id/6591",
  "https://pagalworld.com.se/files/download/id/966",
  "https://newdjremixsong.com/files/download/id/1025",
  "https://pagalworld.com.se/files/download/id/6650",
  "https://pagalworld.com.se/files/download/id/5054",
  "https://pagalworld.com.se/files/download/id/5466",
  "https://pagalworld.com.se/files/download/id/4972",
  "https://pagalworld.com.se/files/download/id/4725"
];
let num = Math.random();
let len=songs.length;
let num2 = num * len;
let num3 = Math.floor(num2);

function changer(){
    num3=(num3+1)%len;
    Player();
}

let song = songs[num3];

const Player = () => {
  return (
    <div id="player">
    <div id="player__nextbtn">
      <MdOutlineChangeCircle onClick={changer}></MdOutlineChangeCircle>
      </div>
      <div className="audio">
      <audio controls autoplay>
        <source src={song} />
      </audio>
      </div>
    </div>
  );
};

export default Player;


// https://drive.google.com/file/d/1nfCPVnc6yNUp0HgjaxtadI_0DAJ2epwM/view?usp=sharing
// https://drive.google.com/file/d/1hSRCVRUphn5-RhRpVWLk5DjYRkq-JSoP/view?usp=sharing
// https://drive.google.com/file/d/1Pe4zvhykpClW83K76pPXpctk46ehjNO5/view?usp=sharing
// https://drive.google.com/file/d/11TTGM32owVco893SAaE-SicMOgtYw4IZ/view?usp=sharing
// https://drive.google.com/file/d/1wl8prIOLBJp5IHfTDm8uhk3XjJIqD7U8/view?usp=sharing
// https://drive.google.com/file/d/1LKfJIfTtmHu3dKP0LVLjnW_4iOBv4qYL/view?usp=sharing
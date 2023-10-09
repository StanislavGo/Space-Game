let audioPlayer = document.getElementById("audio");
audioPlayer.currentTime = 30;

function blasterSound1() {
    let audio = new Audio('sound/blaster.mp3');
    audio.play();
    audio.muted = muted;
    audio.volume = 0.2;
}

function blasterSound2() {
    let audio = new Audio('sound/blaster2.mp3');
    audio.play();
    audio.muted = muted;
    audio.volume = 0.2;
}

function blasterSound3() {
    let audio = new Audio('sound/blaster3.mp3');
    audio.play();
    audio.muted = muted;
    audio.volume = 0.2;
}

function backgroundSound() {
    audioPlayer.volume = 0.1;
    audioPlayer.play();
}

function boomSoundEnemy() {
    let boomEnemy = new Audio('sound/boomEnemy.mp3');
    boomEnemy.volume = 0.2;
    boomEnemy.muted = muted;
    boomEnemy.play();
}

function boomSoundAsteroid() {
    let boomAsteroid = new Audio('sound/boomAsteroid.mp3');
    boomAsteroid.volume = 0.2;
    boomAsteroid.muted = muted;
    boomAsteroid.play();
}

let soundBtn = document.querySelector(".menu .sound");
let muted = false;

soundBtn.onclick = function() {
    let soundOnIcon = document.querySelector(".menu .sound .sound-on");
    let soundOffIcon = document.querySelector(".menu .sound .sound-off");

    if(!muted){
        soundOnIcon.classList.add("hidden");
        soundOffIcon.classList.remove("hidden");
        muted = true;
    } else {
        soundOffIcon.classList.add("hidden");
        soundOnIcon.classList.remove("hidden");
        muted = false;
    }

    audioPlayer.muted = muted;

}
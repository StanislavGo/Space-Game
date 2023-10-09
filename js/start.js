let btnStartGame = document.getElementById("btnStart-game");
let pickedPlayer = 1;

let playerIsCreate = false;

btnStartGame.onclick = function() {

    let skin = document.querySelector(".skins input[type=radio]:checked").value;

    let startGameBlock = document.querySelector(".start-game");
    startGameBlock.style.display = "none";

    if(skin == "skin2"){
        pickedPlayer = 2;
    } if(skin == "skin3"){
        pickedPlayer = 3;
    } 

    createEnemy();
    createEnemy();
    createAsteroid();
    heartIconsPlayer();
    backgroundSound();

    if(playerIsCreate == false) {
        createPlayer(skin);
        playerIsCreate = true;
    }
}

function endGame() {
    let endGameBlock = document.querySelector(".end-game");
    endGameBlock.classList.remove("hidden");
    isGameOver = true;

    app.innerHTML = "";
}

let btnRestartGame = document.getElementById("btnRestart-game");

btnRestartGame.onclick = function() {
    location.reload();
}
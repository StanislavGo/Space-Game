let player = null;
let numbers = 3;
let lifesPlayer = numbers;

function createPlayer(skin) {
    player = document.createElement('div');
    player.className = skin;
    player.id = "player";

    app.appendChild(player);
}

document.onkeydown = function(event) {
    switch(event.code) {
        case "Space":
            shot();
            break;

        case "ArrowLeft":
            moveLeft();
            break;

        case "ArrowRight":
            moveRight();
            break;
    }
}

function moveLeft() {
    player.style.left = player.offsetLeft - 55 + "px";
}

function moveRight() {
    player.style.left = player.offsetLeft + 55 + "px";
}

let possitionForFirstSkin = 1;
let possitionForSecondSkin = 1;

function shot() {
    
    let bullet = document.createElement("div");
        bullet.className = "bullet";
        bullet.style.top = player.offsetTop - 10 + "px";
        bullet.style.left = player.offsetLeft + (player.offsetWidth / 2) + "px";

        if(pickedPlayer == 2 && possitionForFirstSkin == 1) {
            bullet.style.left = player.offsetLeft + 85 + "px";
            possitionForFirstSkin = 2;
        }
        else if (pickedPlayer == 2 && possitionForFirstSkin == 2) {
            bullet.style.left = player.offsetLeft + 63 + "px";
            possitionForFirstSkin = 1;
        }

        if (pickedPlayer == 3 && possitionForSecondSkin == 1) {
            bullet.style.left = player.offsetLeft + 127 + "px";
            bullet.style.top = player.offsetTop + 15 + "px";
            possitionForSecondSkin = 2;
        }
        else if (pickedPlayer == 3 && possitionForSecondSkin == 2) {
            bullet.style.left = player.offsetLeft + 15 + "px";
            bullet.style.top = player.offsetTop + 15 + "px";
            possitionForSecondSkin = 1;
        }

        app.appendChild(bullet);
        
        if (pickedPlayer == 1) {
            blasterSound1();
        } else if (pickedPlayer == 2) {
            blasterSound2();
        } else if (pickedPlayer == 3) {
            blasterSound3();
        }

    let timerID = setInterval(function() {

        let hit = isHit(bullet);
        let hit2 = isHit2(bullet);
        let hit3 = isHit3(bullet);
        let hit4 = isHit4(bullet);

            if(hit || bullet.offsetTop < 0 || hit2 || hit3 || hit4) {
                bullet.remove();
                clearInterval(timerID);
            }
            bullet.style.top = bullet.offsetTop - 5 + "px";
        }, 1.5);
}

let boom = "boom" + random(1, 2);
function isHit(bullet) {
    let enemies = document.querySelectorAll(".enemy");

    for(let i = 0; i < enemies.length; i++) {
        enemy = enemies[i];
        

        if(enemy != null && !enemy.classList.contains(boom)) {
            let top = bullet.offsetTop > enemy.offsetTop && bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight;
            let left = bullet.offsetLeft > enemy.offsetLeft && bullet.offsetLeft < enemy.offsetLeft + enemy.offsetWidth;

                if( top && left ) {
                    enemy.className = "enemy " + boom;
                    removeEnemy(enemy);
                    boomSoundEnemy();
                    return true;
                }
        }
    }
    boom = "boom" + random(1, 2);
    return false;
}

function deathPlayer() {
    lifesPlayer--;

    if(lifesPlayer <= 0) {
        endGame();
    }
    heartIconsPlayer();
}

function heartIconsPlayer() {
    let lifesBlock = document.querySelector(".menu .lifes");
    lifesBlock.innerHTML = "";

    for(let i = 0; i < lifesPlayer; i++) {
        let span = document.createElement("span");

        lifesBlock.appendChild(span);
    } 
}

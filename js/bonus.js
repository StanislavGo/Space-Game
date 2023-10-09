let countEnemyBonusJS = 0;

function createAddLife() {
    let addLife = document.createElement("div");
        addLife.className = "addLIfes";
        let addLifePossition = random(100, document.querySelector('body').offsetWidth - 100);
        addLife.style.left = addLifePossition + "px";

    app.appendChild(addLife);
    moveAddLife(addLife);
}

function moveAddLife(addLife) {
    let timerID = setInterval(function() {
        addLife.style.top = addLife.offsetTop + 50 + "px";

        if(addLife.offsetTop > document.querySelector('body').offsetHeight) {
            clearInterval(timerID);
            addLife.remove();
        }
    }, 10)
}

function isHit3(bullet) {
    let addLifes = document.querySelectorAll(".addLIfes");

    for(let i = 0; i < addLifes.length; i++) {
        addLife = addLifes[i];

        if(addLife != null && !addLife.classList.contains("boom")) {
            let top = bullet.offsetTop > addLife.offsetTop && bullet.offsetTop < addLife.offsetTop + addLife.offsetHeight;
            let left = bullet.offsetLeft > addLife.offsetLeft && bullet.offsetLeft < addLife.offsetLeft + addLife.offsetWidth;

                if( top && left ) {
                    addLife.remove();
                    lifesPlayer++;
                    heartIconsPlayer();
                    return true;
                }
        }
    }
    return false;
}

function createBonusPoints() {
    let bonusPoints = document.createElement('div');
    let left = random(150, document.querySelector("body").offsetWidth - 150);
        bonusPoints.className = "bonusPoint";
        bonusPoints.style.left = left + "px";
        bonusPoints.style.top = random(-100, -300) + "px";

    app.appendChild(bonusPoints);
    moveBonusPoints(bonusPoints);
}

function moveBonusPoints(bonusPoints) {
    let timerID = setInterval(function() {
        bonusPoints.style.top = bonusPoints.offsetTop + 25 + "px";

        if(bonusPoints.offsetTop > document.querySelector('body').offsetHeight) {
            bonusPoints.remove();
            clearInterval(timerID);
        }
    }, 100)
}

function isHit4(bullet) {
    let addPoints = document.querySelectorAll('.bonusPoint');

    for(let i = 0; i < addPoints.length; i++) {
        addPoint = addPoints[i];

        if(addPoint != null && !addPoint.classList.contains("boom")) {
            let top = bullet.offsetTop > addPoint.offsetTop && bullet.offsetTop < addPoint.offsetTop + addPoint.offsetHeight;
            let left = bullet.offsetLeft > addPoint.offsetLeft && bullet.offsetLeft < addPoint.offsetLeft + addPoint.offsetWidth;

                if( top && left ) {
                    addPoint.remove();
                    bullet.remove();
                    score = score + 5;
                    scoreBlock.innerText = score;
                }
        }
    }
    return false;
}
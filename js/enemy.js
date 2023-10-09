let enemySpeed = 30;
let killedEnemyCount = 0;
let skinType = "skin" + random(1, 2);

// Функція яка створює ворога і виконує те що прописано в функції moveEnemy(enemy);
function createEnemy() {
    let left = random(150, document.querySelector("body").offsetWidth - 150);

    let enemy = document.createElement("div");
        enemy.className = "enemy " + skinType;
        enemy.style.left = left + "px";
        enemy.style.top = random(-150, -335) + "px";

    app.appendChild(enemy);
    moveEnemy(enemy);
    skinType = "skin" + random(1, 2);
}

// Створює таймер, під час якого наш ворог змінює своє положення і спускається вниз і якщо ворог вийшов за єкран то видаляти його
function moveEnemy(enemy) {
    let timerID = setInterval(function() {
        enemy.style.top = enemy.offsetTop + enemySpeed + "px";

        if(enemy.offsetTop > document.querySelector("body").offsetHeight) {
            deathPlayer();
            enemy.remove();
            clearInterval(timerID);
        }
    }, 5)
    if(killedEnemyCount == 10) {
        enemySpeed = enemySpeed + 5;
        createAddLife();
        killedEnemyCount = 0;
    }
}

function removeEnemy(enemy) {
        setTimeout(function() {
        enemy.remove();
        countEnemyBonusJS++;
        score++;
        killedEnemyCount++;
        scoreBlock.innerText = score;
        if(countEnemyBonusJS == 5) {
            createBonusPoints();
            countEnemyBonusJS = 0;
        }
            if(!isGameOver){
                for(let i = 0; i < random(1,2); i++) {
                    createEnemy();
                }
            }
        }, 800);
}
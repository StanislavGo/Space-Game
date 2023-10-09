function createAsteroid() {
    let asteroidPossition = random(150, document.querySelector("body").offsetWidth - 150);
    let asteroid = document.createElement("div")
        asteroid.className = "asteroid";
        asteroid.style.left = asteroidPossition + "px";

    app.appendChild(asteroid);
    moveAsteroid(asteroid);
}

function moveAsteroid(asteroid) {
    let timerID = setInterval(function() {
        asteroid.style.top = asteroid.offsetTop + 30 + "px";
        if(asteroid.offsetTop > document.querySelector("body").offsetHeight) {
            deathPlayer();
            asteroid.remove();
            clearInterval(timerID);
            clearInterval(timerID2);
        }
    }, 1)

    let rotateAst = 0;
    let timerID2 = setInterval(function() {
        rotateAst = rotateAst + 1;
        asteroid.style.transform = "rotate(" + rotateAst + "deg)";
    }, 16)
}

function removeAsteroid(asteroid) {
    setTimeout(function() {
        asteroid.remove();
        createAsteroid();
    }, 800);
}

function isHit2(bullet) {
    let asteroids = document.querySelectorAll(".asteroid");

    for(let i = 0; i < asteroids.length; i++) {
        asteroid = asteroids[i];

        if(asteroid != null && !asteroid.classList.contains("boom")) {
            let top = bullet.offsetTop > asteroid.offsetTop && bullet.offsetTop < asteroid.offsetTop + asteroid.offsetHeight;
            let left = bullet.offsetLeft > asteroid.offsetLeft && bullet.offsetLeft < asteroid.offsetLeft + asteroid.offsetWidth;

                if( top && left ) {
                    asteroid.className = "enemy boom";
                    removeAsteroid(asteroid);
                    boomSoundAsteroid();
                    return true;
                }
        }
    }
    return false;
}

function createPlanet() {
    if(!isGameOver) {
        let skin = 'skin-' + random(1, 4);
        let planet = document.createElement("div");
            planet.className = 'planet ' + skin;
            planet.style.left = random(100, document.querySelector('body').offsetWidth - 100) + "px";
    
        let timerID = setInterval(function() {
            planet.style.top = planet.offsetTop + 10 + 'px';
    
            if(planet.offsetTop > document.querySelector('body').offsetHeight) {
                planet.remove();
                clearInterval(timerID);
    
                setTimeout(function() {
                    createPlanet();
                }, random(1000, 1000000))
            }
        }, 100)
    
        app.appendChild(planet);
    }
}

setTimeout(function() {
    if(!isGameOver) {
        createPlanet();
    }
}, 0)
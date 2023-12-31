/**
 * 
 * 1. Зробити рух гравця по натисканню клавіші - done
 * 
 * 2. Зробити постріли:
 *      - Створити кулю - done
 *      - Зробити рух кулі - done
 *      - Зробити перевірку чи попала куля в ворога чи астороїд - done
 * 
 * 3. Зробити вибір гравця та запуск гри - done
 * 
 * 4. Створити ворогів та рух ворогів на нас - done
 * 
 * 5. Створити життя - done
 * 
 * 6. Якщо ворог пройшов гравця то віднімати життя - done
 * 
 * 7. Якщо життя закінчилося то закінчити гру - done
 * 
 * 8. Переробити рух гравця
 * 
 * 
 * 1) Навчитися створювати елементи
 * 2) Робота с координатами
 * 3) Працювати з подіями натискання клавіш
 * 4) Працювати з таймерами
 * 5) Розбиття коду на різні файли
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 1. Зробити кількість очків. - done
 * 
 * 2. Вивести вахунок на єкран. - done
 * 
 * 3. Змінювати рахунок після попадання по ворогу. - done
 * 
 * 4. Зробити зміну швидкості ворогів після збиття 10 ворогогів на 5px. - done
 * 
 * 5*. Зробити бонуси:
 *      - Життя. - done
 *      - Ящко підстрелено 5 ворогів, то створити бонус який додає додатково 5 очків. - done
 * 
 * 6*. Зробити створення випадкової кількості ворогів після смерті минулого ворога. - done
 * 
 * 7**. Зробити для кожного скіна свій бластер. 
 *      - Кулі вилітають з різних місць. - done
 *      - Додати більше отворів для пострілів. - done
 *      - У кожного літачка свій звук пострілу.
 * 
 * 8**. Зробити різні типи ворогів. - done
 *      - Різні скіни. - done
 *      - Різні анімації взриву. - done
 * 
 * 
 */


let app = document.querySelector("#game-elements");

let score = 0;

let scoreBlock = document.querySelector('#score span');

let isGameOver = false;

function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

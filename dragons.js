//Dragon Cave Game

let dragonMessage = document.querySelector('#dragonMessages');

let button1 = document.querySelector('#dragonStart1').addEventListener('click', dragonEvent);

let button2 = document.querySelector('#dragonStart2').addEventListener('click', dragonEvent2);

let dragonRefresh = document.querySelector('#dragonRefresh').addEventListener('click', refreshEvent);

let score = 0;

let alive = true;


function refreshEvent(refresh){
    score = 0;
    alive = true;
    dragonMessage.textContent = "Messages";
}

function dragonEvent(){
    let rand = Math.ceil(Math.random()* 10);
    if(alive){
        switch(rand){
            case 1: score += 5;
                dragonMessage.textContent = "You meet King Charles III and he gives you jewels";
            break;

            case 2: score += 3;
                dragonMessage.textContent = "You meet David Beckham and he gives you a soccer ball";
            break;

            case 3: 
                dragonMessage.textContent = "The Dragon eats you, score: " + score + " points";
                alive = false;
            break;
            
            case 4: score += 6;
                dragonMessage.textContent = "You meet Paul McCartney and he sings for you";
            break;

            case 5: score += 2;
                dragonMessage.textContent = "You meet Pope Francis and he gives you a blessing";
            break;

            case 6: score += 3;
                dragonMessage.textContent = "You meet the Dalai Lama and he meditates with you";
            break;

            case 7: score += 4;
                dragonMessage.textContent = "You meet Sir Elton John and he gives you piano lessons";
            break;

            case 8: score += 7;
                dragonMessage.textContent = "You meet Boris Johnson and he gives you Covid 19";
            break;

            case 9:
                dragonMessage.textContent = "The Dragon eats you, score: " + score + " points";
                alive = false;
            break;



        }
    }
}

function dragonEvent2(){
    let rand = Math.ceil(Math.random()* 10);
    if(alive){
        switch(rand){
            case 1: score += 3;
                dragonMessage.textContent = "You meet President Biden and he gives you a U.S. flag";
            break;

            case 2: score += 5;
                dragonMessage.textContent = "You meet Freddie Flintoff and he gives you a cricket ball";
            break;

            case 3: 
                dragonMessage.textContent = "The Dragon eats you, score: " + score + " points";
                alive = false;
            break;
            
            case 4: score += 7;
                dragonMessage.textContent = "You meet Bryn Terfel and he sings sea shanties for you";
            break;

            case 5: score += 10;
                dragonMessage.textContent = "You meet Archbishop Welby and he gives you a blessing";
            break;

            case 6: score += 1;
                dragonMessage.textContent = "You meet Rishi Sunak and he fasts with you";
            break;

            case 7: score += 5;
                dragonMessage.textContent = "You meet Eric Clapton and he gives you guitar lessons";
            break;

            case 8: score += 7;
                dragonMessage.textContent = "You meet Willy Wonka and he gives you a golden ticket and some chocolate";
            break;

            case 9:
                dragonMessage.textContent = "The Dragon eats you, score: " + score + " points";
                alive = false;
            break;



        }
    }
}

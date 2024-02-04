let simonRed = document.querySelector('.r'),
    simonGreen = document.querySelector('.g'),
    simonBlue = document.querySelector('.b'),
    simonYellow = document.querySelector('.y'),
    scoreCounter = document.querySelector('.score'),
    score = 0;

function newGame(){
    score = 0;
    scoreCounter.innerHTML = "Score: "+score;
    var simonClick = document.querySelectorAll('.game > div');
    console.log(simonClick);
    for(let i = 0; i < 4; i++){
        simonClick[i].addEventListener('click', clicked);
    }
}
newGame();

function clicked(){
    console.log("hej");
    console.log(this);
}
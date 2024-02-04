let cardsSolved = [],
    clickedCards = [],
    tries = 0,
    triesCounter = document.querySelector('.tries div'),
    info = document.querySelector('.info div'),
    board = document.querySelector('.board'),
    playAgain = document.querySelector('article'),
    cardsUnsolved = ['A','A','B','B','C','C','D','D','E','E',
    'F','F','G', 'G', 'H','H','I','I','J','J'],
    gameWon = document.querySelector('article');

    function shuffleArray(array){
        for (var i = array.length -1; i > 0; i--){
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

function newGame(){
    shuffleArray(cardsUnsolved);

    function cardCreator(){
        for(let i = 0; i < cardsUnsolved.length; i++){
            var DivCreate = document.createElement("div");
            let divChar = cardsUnsolved[i];
            var pTagCreate = document.createElement("p");
            var TextCreate = document.createTextNode(divChar);
            pTagCreate.appendChild(TextCreate);
            DivCreate.appendChild(pTagCreate);
            board.append(DivCreate);
        }
    }
    cardCreator();

    function eventCreator(){
        var cardDivs = document.querySelectorAll('.board > div');
        for (let i = 0; i < cardDivs.length; i++) {
            cardDivs[i].addEventListener('click', clickCard);
            cardDivs[i].className = '';
        }           
    }
    eventCreator();

    tries = 0;
    triesCounter.innerHTML = tries;
    info.innerHTML = "Klicka på ett kort";
}

newGame();

function clickCard(){
    if(!this.firstChild.classList.contains('turned') && clickedCards.length < 2){
        var clickedChar = this.firstChild.innerText;
        clickedCards.push(clickedChar);
        this.firstChild.classList.add('turned');
        info.innerHTML = "Klicka på ett kort";
    }

    if(clickedCards.length == 2){
        tries += 1;
        triesCounter.innerHTML = tries;
        if(clickedCards[0] == clickedCards[1]){
            cardsMatched();
        }else{
            document.querySelector('body').style.pointerEvents = "none"; //Man kan ej klicka på kort medans korten "vänder på sig"
            setTimeout(cardsFalse, 1200);
        }
    }
}

//Tar bort clickevent från DIV:en samt ändrar klassen på textelementet 
function cardsMatched(){
    for(let i = 0; i < clickedCards.length; i++){
        var turnedCards = document.querySelector('.turned');
        cardsUnsolved.splice(cardsUnsolved.indexOf(clickedCards[i]), 1);
        turnedCards.parentElement.removeEventListener('click', clickCard);
        turnedCards.classList.remove("turned");
        turnedCards.classList.add("solved");
    }clickedCards = [];
    if(cardsUnsolved.length == 0){
        winner();
    }
}

function cardsFalse(){
    for(let i = 0; i < clickedCards.length; i++){
        var turnedCards = document.querySelector('.turned');
        turnedCards.classList.remove("turned");
    }
    clickedCards = [];
    document.querySelector('body').style.pointerEvents = "all"; //Kan trycka igen när korten är omvända
}

function winner(){
    gameWon.classList.add("gameComplete");
    gameWon.classList.remove("gameFalse");
    info.innerHTML = "Du vann, grattis!";
    let playBtn = document.querySelector('.playBtn').addEventListener('click', function(){
        location.reload()})
        
    let quitBtn = document.querySelector('.quitBtn').addEventListener('click', function(){
        gameWon.classList.add("gameFalse");
        gameWon.classList.remove("gameComplete")})
}
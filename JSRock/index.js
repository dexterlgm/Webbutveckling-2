var btnRock = document.getElementById('rock');
var btnPaper = document.getElementById('paper');
var btnScissors = document.getElementById('scissors');

let CPUPoints = 0;
let pPoints = 0;

btnRock.addEventListener('click', function(){
    game('rock');
});

btnPaper.addEventListener('click', function(){
    game('paper');
});

btnScissors.addEventListener('click', function(){
    game('scissors');
});

function game($choice){
    let sistresult = document.getElementById('finalresult');
    let CPUVal = Math.ceil(Math.random() * 3);

    let playerC = document.getElementById('playerC');
    let cpuC = document.getElementById('cpuC');

    playerC.innerHTML = 'You chose ' + $choice; 

    if(CPUVal == 1){
        $CPUchoice = 'rock';
        cpuC.innerHTML = 'CPU chose ' + $CPUchoice;
        sistresult.innerHTML = '';
    }else if(CPUVal == 2){
        $CPUchoice = 'paper';
        cpuC.innerHTML = 'CPU chose ' + $CPUchoice;
        sistresult.innerHTML = '';
    }else{
        $CPUchoice = 'scissors';
        cpuC.innerHTML = 'CPU chose ' + $CPUchoice;
        sistresult.innerHTML = '';
    }
//1 = rock, 2 = paper, 3 = scissors//
    if($choice == 'rock' && CPUVal == 3){
        result('win');
        pPoints += 1;
    }
    else if($choice == 'rock' && CPUVal == 2){
        result('lose');
        CPUPoints += 1;
    }
     if($choice == 'rock' && CPUVal == 1){
        result('tie');
    }
    else if($choice == 'paper' && CPUVal == 3){
        result('lose');
        CPUPoints += 1;
    }
    else if($choice == 'paper' && CPUVal == 2){
        result('tie');
    }
    else if($choice == 'paper' && CPUVal == 1){
        result('win');
        pPoints += 1;
    }
    else if($choice == 'scissors' && CPUVal == 3){
        result('tie');
    }
    else if($choice == 'scissors' && CPUVal == 2){
        result('win');
        pPoints += 1;
    }
    else if($choice == 'scissors' && CPUVal == 1){
        result('lose');
        CPUPoints += 1;
    }

    function result($result){
        let result = document.getElementById('result');
        result.innerHTML = 'You ' + $result;
    }
    let playerP = document.getElementById('playerP');
    let cpuP = document.getElementById('cpuP');

    playerP.innerHTML = 'You: ' + pPoints;
    cpuP.innerHTML = 'CPU:' + CPUPoints;

    if(pPoints == 5){
        finalresult('finalwon');
    }else if(CPUPoints == 5){
        finalresult('finallost');
    }

    function finalresult($finalres){
        CPUPoints = 0;
        pPoints = 0;
        if($finalres == 'finalwon'){
            sistresult.innerHTML = 'You won the match, congrats! Chose a button above to play again!';
        }else{
            sistresult.innerHTML = 'You lost the match, better luck next time! Chose a button above to play again!';
        }
    }
}
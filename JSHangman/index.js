var btnSub = document.getElementById('submit');
var btnReset = document.getElementById('reset');
var btnReset = document.getElementById('reset');
var userInput = document.getElementById('userInp');
var uiWord = document.getElementById('uiWord');
var failedChar = document.getElementById('failedChar');
var uiFeedback = document.getElementById('uiFeedback');
var lifeCount = document.getElementById('lifeCount');

btnSub.addEventListener('click', guessed);

btnReset.addEventListener('click', newGame);

userInput.addEventListener('keyup', function (keyEnter){
    if(keyEnter.key === 'Enter') {
        guessed();
    }
});

const charList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"];
const wordList = ["kulle", "konsert", "format", "stycke", "bankomat", "ansikte", "källa", "mörker", "konst", "aktivera", "skott", "höstack", "sardin", "muskel", "metall", "spekulera", "skaka", "huvudet", "testet", "stapel", "kjol", "lager", "flyga", "satsning", "mage", "skulptör", "blandad", "pojke", "törstig", "dator", "bord", "skrivbord", "ryggsäck", "choklad", "ekonomi", "meddelanden", "borste", "broms", "lycka", "modell", "sitta", "pass", "tvinga", "morse", "mögel", "bagage", "tiggare", "censur", "docka", "politik", "bukett", "simning", "framtida", "vinnare", "hummer", "antik", "mycket", "tangentbord", "siffra", "detektiv", "oktober", "november", "askfat", "dirigent", "multiplikation", "vrida", "kristall", "lutning", "domstol", "medicinsk", "beskrivning", "katastrof", "sommar", "citat", "praktikant", "keramik", "producera", "anledning", "division", "kaktus", "spela", "säkerhet", "kontinent", "terrasser", "satellit", "villa", "järnväg"]
var charGuessed = [];
var lives = 11;
var charPlace = 0;
var correctGuesses = 0;

const wordRandGen = Math.ceil(Math.random() * 86);

const wordCPU = wordList[wordRandGen];

var wordLength = wordCPU.length;
createDIV(wordCPU, wordLength);

//Skapar divarna med varsitt id lika med varje bokstav i ordets index
function createDIV(){
    for (let i = 0; i < wordLength; i++){
        const DIVMake = document.createElement("div");
        DIVMake.setAttribute("id", "div"+charPlace)
        DIVMake.setAttribute("class", "ClassUN")
        charPlace += 1;
        uiWord.append(DIVMake);
    }
}

//Kollar om inputen är en bokstav/om den tidigare gissats
function guessed() {
    var userInpCon = document.getElementById('userInp').value.toLowerCase();

    if(charList.includes(userInpCon)){
        if(!charGuessed.includes(userInpCon)){;
            charGuessed.push(userInpCon);
            uiFeedback.innerHTML = ' ';
            passedConf(userInpCon);
        }else{
            uiFeedback.innerHTML = 'Du har redan gissat på denna bokstav!';
        }
    }else{
        uiFeedback.innerHTML = 'Du måste gissa på en bokstav!';
    }
}

function passedConf(userInpCon){
    if(wordCPU.includes(userInpCon)){
        correctReveal(userInpCon); //Finns bokstaven i ordet, kör funktion som revealar bokstaven på hemsidan
    }else{
        lives -= 1;
        lifeCount.innerHTML = 'Antal liv: '+lives;
        let l = document.createElement('span'); //Skapar span för cirkel runt felaktig bokstav
        l.innerHTML = userInpCon;
        failedChar.append(l);
        if(lives == 0){ 
            loser(); 
        }
    }
}

function correctReveal(userInpCon){
    var charPlace = 0;
    for (let i = 0; i < wordLength; i++){ //Loopar igenom varje bokstav i ordet
        var DIVCall = document.getElementById('div'+charPlace);
        if(wordCPU.charAt(charPlace) == userInpCon){ //Hittar var i ordet boktsaven finns
            DIVCall.removeAttribute("class", "ClassUN"); //Tar bort klassen för den tomma div:en
            DIVCall.setAttribute("class", "ClassC"); //Lägger till klass med css som rör texten som skapas innuti div:en
            correctGuesses += 1;
            let DIVChar = document.createTextNode(wordCPU.charAt(charPlace));
            DIVCall.appendChild(DIVChar);
            if(correctGuesses == wordLength){ //Om man hittat lika många bokstäver som finns i ordet vinner man
                winner();
            }
        }
        charPlace += 1;
    }   
}

//Stänger av all input så att man inte kan fortsätta gissa efter spelet är slut
function winner(){
    lifeCount.innerHTML = 'Du vann med '+lives+' liv kvar. Bra jobbat!';
    document.getElementById('userInp').disabled = true;
    document.getElementById('submit').disabled = true;
}

//Stänger av all input så att man inte kan fortsätta gissa efter spelet är slut
function loser(){
    lifeCount.innerHTML = `Du förlorade, ordet var "${wordCPU}". Försök igen!`;
    document.getElementById('userInp').disabled = true;
    document.getElementById('submit').disabled = true;
}

//Startar om spelet genom att refresha sidan
function newGame(){
    location.reload(true);
}
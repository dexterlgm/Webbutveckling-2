const number = Math.ceil(Math.random() * 100) +1,
button = document.querySelector('button');
console.log(number);

function guessed(){
    let inputInt = parseInt(document.getElementById("userInp").value);
    var guess = inputInt;
    console.log(guess);
    let uiinfo = document.querySelector('.uiinfo');
    if (guess < number) {
        uiinfo.innerHTML = 'Talet är högre';
    }
    else if (guess > number) {
        uiinfo.innerHTML = 'Talet är lägre';
    }
    else{
        uiinfo.innerHTML = 'Du gissade rätt!';
    }
}
button.addEventListener('click', guessed);
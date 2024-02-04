/**                                               
 * @preserve 1d0f334a7b0ad274729fa5e2f8b534aa 
 */
(function (dbwebb){
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


/** ======================================================================
 * Lab 1 - javascript1 
 *
 * If you need to peek at examples or just want to know more, take a look at
 * the references at MDN's (Mozilla Developers Network) page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference. Here you
 * will find everything this lab will go through and much more. 
 *
 */

/** ----------------------------------------------------------------------
 * Section 1. Integers, floats and variables 
 *
 * The foundation of variables, numbers, strings and basic arithmetic. In
 * questions 1.5 and 1.6 you are going to work with floats. One way to round a
 * float to a certain amount of decimals is:  Math.round(val*10000)/10000,
 * where 'val' is your float number. 
 *
 */

/**
 * Exercise 1.1 
 * 
 * Create a variable called 'numberOne' and give it the value 83. Create
 * another variable called 'numberTwo' and give it the value 929. Create a
 * third variable called 'result' and assign to it the sum of the first two
 * variables. Answer with the result. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


let numberOne = 83,
    numberTwo = 929,
    result = numberOne + numberTwo;

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);


/**
 * Exercise 1.2 
 * 
 * Use your two variables, 'numberOne' and 'numberTwo'. Create one more,
 * called 'numberThree' and give it the value: 29. Use your variable 'result'
 * and assign to it the sum of all three variables. Answer with the result. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let numberThree = 29;
result = numberOne + numberTwo + numberThree;

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);


/**
 * Exercise 1.3 
 * 
 * Use your variables 'numberOne' and 'numberTwo' and answer with the product
 * of the numbers in your 'result'-variable. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = numberOne * numberTwo;


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);


/**
 * Exercise 1.4 
 * 
 * Use your variables 'numberOne', 'numberTwo' and 'numberThree'. Subtract
 * 'numberThree' from the product of the other two variables. Answer with your
 * 'result'-variable. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = numberOne * numberTwo - numberThree;


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);


/**
 * Exercise 1.5 
 * 
 * Create two variables, 'floatOne' and 'floatTwo'. Give them the values:
 * 936.42 and 724.31. Use your 'result'-variable and assign to it the sum of
 * the float numbers. Answer with the result. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let floatOne = 936.42,
    floatTwo = 724.31;

result = floatOne + floatTwo;

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);


/**
 * Exercise 1.6 
 * 
 * Answer with the result of 738 modulus (%) 45.  
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = 738%45;

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);


/** ----------------------------------------------------------------------
 * Section 2. Built-in Number-methods and functions 
 *
 * If you need a hint, take a look at: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Number 
 *
 */

/**
 * Exercise 2.1 
 * 
 * Create a variable 'someIntText' and give it a value of '333.929 werewolf'.
 * Use the function 'parseInt' to find out the integer representation of the
 * text. Answer with your 'result'-variable. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let someIntText = '333.929 werewolf';

result = parseInt(someIntText);


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);


/**
 * Exercise 2.2 
 * 
 * Use your variable 'someIntText'. Use the function 'parseFloat' to find out
 * the float representation of the text. Answer with your 'result'-variable. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = parseFloat(someIntText);

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);


/** ----------------------------------------------------------------------
 * Section 3. Built-in Math-methods and functions 
 *
 * If you need a hint, take a look at: 
 * 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_O
 * bjects/Math 
 *
 */

/**
 * Exercise 3.1 
 * 
 * Use the method 'max', in Math, to find out the highest number in the series:
 * 736,179,565,673. Answer with your 'result'-variable. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.max(736,179,565,673);

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);


/**
 * Exercise 3.2 
 * 
 * Use the method 'min', in Math, to find out the lowest number in the serie:
 * 736,179,565,673. Answer with your 'result'-variable. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.min(736,179,565,673);

ANSWER = result;


// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);


/**
 * Exercise 3.3 
 * 
 * Use the method 'round', in Math, to round the float number: 317.88 to the
 * closest integer. Answer with your 'result'-variable. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.round(317.88);


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);


/**
 * Exercise 3.4 
 * 
 * Find out the quotient of 999 / 43 and use the method 'floor', in Math, to
 * get only the integer value. Use your 'result'-variable in your answer. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.floor(999/43);


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("3.4", ANSWER, false);



/**
 * Exercise 3.6 
 * 
 * Use the Math property 'PI' to get the float value of 'Pi'. Round the result
 * to 4 decimals. Answer with your 'result'-variable. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = parseFloat(Math.PI.toFixed(4));


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("3.6", ANSWER, false);


/**
 * Exercise 3.7 
 * 
 * Use the method 'pow', in Math, to find the power of (base) 43 and
 * (exponent) 5. Answer with the result. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = Math.pow(43, 5);


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("3.7", ANSWER, false);


/** ----------------------------------------------------------------------
 * Section 4. Strings and variables 
 *
 * Practice strings and variables. If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/String 
 *
 */

/**
 * Exercise 4.1 
 * 
 * Create a variable, named 'firstWord', that holds the word 'JavaScript'.
 * Create a second variable, named 'secondWord', that holds the word 'rocks!'.
 * Create a third variable, named 'bothWords', and put together 'firstWord'
 * and 'secondWord' with a space between. Answer with the variable
 * 'bothWords'. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let firstWord = 'JavaScript',
    secondWord = 'rocks!',
    bothWords = firstWord + ' ' + secondWord;

result = bothWords;

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);


/**
 * Exercise 4.2 
 * 
 * Create a variable called 'wordOne' and assign to it: 'horse'. Add the
 * number 626 to the word and answer with the result in your
 * 'result'-variable. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let wordOne = 'horse';

result = wordOne + 626;

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);


/** ----------------------------------------------------------------------
 * Section 5. Built-in String-methods, functions and properties 
 *
 * If you need a hint, take a look at:
 * 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_O
 * bjects/String  
 *
 */

/**
 * Exercise 5.1 
 * 
 * Use 'charAt' on a string to return the character at a given index. Use it
 * on the word 'elephant' and answer with the character at index 0. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = 'elephant'.charAt(0);


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("5.1", ANSWER, false);


/**
 * Exercise 5.2 
 * 
 * Use 'toUpperCase' to transform the string: 'I wish monkeys could Skype.' to
 * uppercase. Answer with the result. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = 'I wish monkeys could Skype.'.toUpperCase();

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("5.2", ANSWER, false);


/**
 * Exercise 5.3 
 * 
 * Use 'length' to find out the length of the string: 'elephant'. Answer with
 * the result. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = 'elephant'.length;


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("5.3", ANSWER, false);


/**
 * Exercise 5.4 
 * 
 * Use 'substr' to extract the last three characters of the word: 'elephant'.
 * Answer with the result. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = 'elephant'.substring(5, 8);

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("5.4", ANSWER, false);


/** ----------------------------------------------------------------------
 * Section 6. Built-in Date-methods and functions 
 *
 * If you need a hint, take a look at:
 * 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_O
 * bjects/Date 
 *
 */

/**
 * Exercise 6.1 
 * 
 * Create a Date object called 'myDate' and initiate it with: 'Aug 9, 2011'.
 * Use the built-in function Date.getFullYear to get the year from your Date
 * object. Answer with the result. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var myDate = new Date('Aug 9, 2011');
result = myDate.getFullYear();


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("6.1", ANSWER, true);


/**
 * Exercise 6.2 
 * 
 * Create a new Date object that is equal to 'myDate' plus 30 days. Use
 * Date.getDate and answer with the day of the month. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

myDate.setDate(myDate.getDate()+30);
result = myDate.getDate();


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("6.2", ANSWER, false);


/** ----------------------------------------------------------------------
 * Section 7. If, else if and else 
 *
 * If you need a hint, take a look at:
 * 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statemen
 * ts/if...else 
 *
 */

/**
 * Exercise 7.1 
 * 
 * Create five variables: 'card1'=10, 'card2'=3, 'card3'=7, 'card4'=5,
 * 'card5'=3. Add them up and answer with the result.  
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let card1 = 10,
    card2 = 3,
    card3 = 7,
    card4 = 5,
    card5 = 3;

result = card1 + card2 + card3 + card4 + card5;

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("7.1", ANSWER, false);


/**
 * Exercise 7.2 
 * 
 * Use an if statement to see if the five cards (card1-card5) have a combined
 * value that is higher than 21. If the value is higher, answer with the
 * string 'busted'. Else answer with the string 'safe'. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

if(result > 21){
    result = 'busted';
}else{
    result = 'safe';
}


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("7.2", ANSWER, false);


/**
 * Exercise 7.3 
 * 
 * Use if else statements to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21. Answer with lower =
 * 'safe', higher = 'busted', 21 = 'black jack'. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = card1 + card2 + card3;

if(result > 21){
    result = 'busted';
}else if(result == 21){
    result = 'black jack';
}else{
    result = 'safe';
}

ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("7.3", ANSWER, false);


/**
 * Exercise 7.4 
 * 
 * Create three variables: 'dealer1' = 6, 'dealer2' = 11 and 'dealer3' = 10.
 * Combine the if, else and the AND (&&) statements to see what the dealer
 * should do. If the combined value of the dealercards is lower than 17,
 * answer with 'safe', if the value is higher than or equal to 17 and lower
 * than 21 answer 'stop'. If the value is 21 answer 'black jack'. If the value
 * is higher than 21 answer 'busted'.  
 *
 * Write your code below and put the answer into the variable ANSWER.
 */





ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("7.4", ANSWER, false);


/** ----------------------------------------------------------------------
 * Section 8. Switch, case 
 *
 * If you need a hint, take a look at:
 * 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statemen
 * ts/switch 
 *
 */

/**
 * Exercise 8.1 
 * 
 * Use a switch-case statement to figure out the color of a fruit. You have
 * the following fruits - banana=yellow, apple=green, kiwi=green,
 * plum=purple). Create a variable 'myFruit' which holds the current value of
 * your fruit. If 'myFruit' is banana, the result should be 'The banana is
 * yellow.'. Answer with the result where 'myFruit = plum'.  
 *
 * Write your code below and put the answer into the variable ANSWER.
 */





ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("8.1", ANSWER, false);


/**
 * Exercise 8.2 
 * 
 * Extend your switch-case statement with a default value. The result should
 * be 'That is an unknown fruit.' when the variable 'myFruit' has an unknown
 * value. Answer with the result where 'myFruit = pear'. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */




ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("8.2", ANSWER, false);


/** ----------------------------------------------------------------------
 * Section 9. For loops 
 *
 * If you need a hint, take a look at:
 * 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statemen
 * ts/for 
 *
 */

/**
 * Exercise 9.1 
 * 
 * Use a for-loop to increment 763 with the value 9, 14 times. Answer with the
 * result. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */




ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("9.1", ANSWER, false);


/**
 * Exercise 9.2 
 * 
 * Use a for-loop to decrement 378 with the value 7, 18 times. Answer with the
 * result. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */




ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("9.2", ANSWER, false);


/**
 * Exercise 9.3 
 * 
 * Use a for-loop to add all the values in the range - 25 to 40 - to a string
 * with each number separated by a comma ','. The result should not end with a
 * comma. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 


ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("9.3", ANSWER, false);


/** ----------------------------------------------------------------------
 * Section 10. While loops 
 *
 * If you need a hint, take a look at:
 * 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statemen
 * ts/while 
 *
 */

/**
 * Exercise 10.1 
 * 
 * Use a while-loop to increment 14 with the value 9 until it has reached or
 * passed 763. Answer with the amount of steps needed. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("10.1", ANSWER, false);


/**
 * Exercise 10.2 
 * 
 * Use a while-loop to subtract 7 from 378 until the value has reached or
 * passed 0. Answer with the amount of steps needed. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



ANSWER = result;

// Is the answer as expected?
// When you get stuck - change false to true to get a hint.
dbwebb.assert("10.2", ANSWER, true);



    console.log(dbwebb.exitWithSummary());

}(window.dbwebb));

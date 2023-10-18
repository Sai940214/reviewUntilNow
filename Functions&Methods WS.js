//5.1 Task 1 Letters and Numbers
//Create a program with two methods:
//1. printLetters(): prints letters from a-z
//2. printNumbers(): prints numbers from 1-9
//Call first printLetters() method, then printNumbers() and after that printLetters() again.
//Hint! To print the letters you can use for example Number toString() (https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

function printLetters(){
    for (let i=97; i<122; i++){
//'a'（ASCII 码为 97）迭代到 'z'（ASCII 码为 122）
        const letter = String.fromCharCode(i);
        console.log(letter);
    }
}
function printNumbers(){
    for (let i=1;i<9;i++){
        console.log(i);
    }
}
printLetters();
printNumbers();

//5.2 Task 2 Lorem Ipsum
//Create a method that prints out Lorem ipsum 
//sentence (”Lorem Ipsum dolor sit amet, consectetur 
//adipiscing elit. ”) ten times. Call this method

function printLoremIpsum(){
    const greatWord="Lorem Ipsum dolor sit amet, consectetur adipiscing elit.\n"
    for (let i=1;;i++){
        if (i<=10){process.stdout.write(greatWord)
        }}
}
printLoremIpsum();

//5.3 Task 3 Sum of Numbers
//Create a program that has a method 
//sum(firstNumber,secondNumber) 
//that returns the sum of the numbers passed to the method as input parameters. 
//Call this method, save the return value in a variable and print it out. 
//Do this three times with different variable values.

function sum(firstNumber,secondNumber){
    if ( typeof firstNumber === 'number' && typeof secondNumber === 'number'){
        let sumOfNumbers=firstNumber + secondNumber
            return sumOfNumbers
    } 
}
sum(1,2);
sum(3,4);
sum(6,7);

//5.4 Task 4 Circumference of a Circle
//Create a program that calculates the circumference of a circle 
//when radius is given (circumference = 2 * π *radius). 
//Call this method three times with different parameters and print out the results.

function circumference(radius){
    if (typeof radius === 'number' && radius > 0){
        console.log ("Circumference of a circle with radius " + radius + " is " + radius*2*Math.PI)
    } 

}

circumference(3);
circumference(5);
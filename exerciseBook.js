//5.3 Task 3 Sum of Numbers
//Create a program that has a method 
//sum(firstNumber,secondNumber) 
//that returns the sum of the numbers passed to the method as input parameters. 
//Call this method, save the return value in a variable and print it out. 
//Do this three times with different variable values.

function sum(firstNumber,secondNumber){
    if ( typeof firstNumber === 'number' &&typeof secondNumber === 'number'){
        let sumOfNumbers=firstNumber + secondNumber
            return sumOfNumbers
    } 
}

function callSumThreeTimes(){
    const result1 = sum(5, 3);
    const result2 = sum(10, 7);
    const result3 = sum(15, 4);
    console.log(result1);
    console.log(result2);
    console.log(result3);
}

callSumThreeTimes();
// 1.1 Task 1: Number Guessing Game
//Create a simple game in which the user has to guess the secret number. 
//Game has the following functionality: 
//1. Program asks the user to enter a number.
//2. Set secret number to be entered number plus one.
//3. Print out whether the user won or not.

process.stdout.write("Input to guess the secret number\n");

process.stdin.on("data", function(inputFromUser){
    let givenNumber = inputFromUser.toString().trim();
    let secretNumber = Number(givenNumber) + 1

    process.stdout.write("Givennumber is " + givenNumber + "\n");
    process.stdout.write("Secret number is " + secretNumber + "\n");
    console.log("You lose")
    
    process.exit()
})

//1.2 Task 2: Distance Converter version 0.1
//Create a simple program that converts distance given in miles to kilometers. 
//Print out the output with basic write() and also with util.format().

process.stdout.write("Input miles and we will convert it into kilometers\n");

process.stdin.on("data", function(inputFromUser){
    let givenDistance = inputFromUser.toString().trim();
    let convertDistance = Number(givenDistance) * 1.6093;

    console.log(givenDistance + " miles is "+ convertDistance + "kilometers");
    process.exit()
})

//1.3 Task 3: Distance Converter version 0.2
//Extend the functionality from the previous task to:
//1. Ask for the distance in meters.
//2. Also convert the distance to following units:
//o kilometers
//o miles
//o yards
//o feet
//o inches
//o light years
//3. Show numbers with three decimals.
//Hint! If you want to align the results, you can use padStart() function to add empty spaces to make the 
//string equal length. (OPTIONAL)

process.stdout.write("Input distance in meters: \n")
process.stdin.on("data", function(inputFromUser){
    let givenDistance2 = Number(inputFromUser).toString().trim()
    let convertDistance2 = inputFromUser / 1000
    
    console.log(givenDistance2 + " meters is :\n" + convertDistance2.toFixed(3).padStart(15) + "Kilometers")
    process.exit()
})

//1.4 Task 4: Basic Calculations
//Create a simple program with the following functionality:
//1. Ask for user to input a number.
//2. Define a secret number.
//3. Perform and print out basic calculations for that number with the secret number.

process.stdout.write("Input a number: ")
process.stdin.on("data", function(inputFromUser){
    let Number1 = Number(inputFromUser).toString().trim()
    let Number2 = 5
//别漏了两个数字计算时的括号 Dont miss those（）！
    process.stdout.write(Number1.padStart(20) + " + " + Number2 + " = " + (Number1 + Number2) + "\n");
    process.stdout.write(Number1.padStart(20) + " - " + Number2 + " = " + (Number1 - Number2) + "\n");
    process.stdout.write(Number1.padStart(20) + " * " + Number2 + " = " + (Number1 * Number2) + "\n");
    process.stdout.write(Number1.padStart(20) + " / " + Number2 + " = " + (Number1 / Number2) + "\n");
    process.stdout.write(" ++ ".padStart(21) + Number1 + " = " + (++Number1) + "\n");
    process.stdout.write(" -- ".padStart(21) + Number1 + " = " + (--Number1) + "\n");

    process.exit()
});
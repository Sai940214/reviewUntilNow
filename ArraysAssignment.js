//task 4.1
//Write code for a function that prints out the fifth item in an array given as a parameter.
//1.Set function
function getFifthItem(array){
    //2.Check if the input is an array
    if (Array.isArray(array)){
        //3.Check if the 4th element is string
        if (typeof array[4] === 'string')
        //4.print
        console.log(array[4])
    } else {console.log("sth wrong")
        }
    }

getFifthItem(fruits = ["banana","kiwi","watermelon","apple","grapefruit"]);
getFifthItem(cars = ["Audi", "Lada", "Ferrari", "Toyota", "Volvo", "Fiat"]);
getFifthItem(students = ["John", "Jane", "Lisa", "Mary", "Carl", "Tina", "Joe", "Bill"]);

//Tasks 4.2
//Write code for a function that 
//creates a simple array with the following items: 
//Audi, Lada, Toyota, Ferrari 
//and prints out each element on a new line.

function items(array){
    if (Array.isArray(array)){
        for (let i=0;i<array.length;i++){
        console.log(array[i]+"\n")}
    }
}

items(["Audi", "Lada", "Toyota", "Ferrari"])

//Task 4.3
//Write code for a function that 
//gets an multidimensional array as an input parameter 
//and prints out the item 
//that is found on the third column of the second row.

function getItem(matrix){
    console.log (matrix[2][3])
}

getItem([[1,2,3], [55,44,11]]);

//task 4.4
//You have an array with the following items: 
//'apple', 'orange', 'banana', 'kiwi'.
//Write code for a function that prints out the element from the array from the given index.
let array=['apple', 'orange', 'banana', 'kiwi'];
function getItem(Numbers){
    if(Numbers >=0 && Numbers < array.length){
        console.log(array[Numbers]);
    }
}
getItem(2)

//task 4.5
//Write code for a function that 
//prints out items of an array from the last to the first, each followed by a space.
function printReversedArray(array) {
    console.log(array.reverse().join(' '))
    }
    printReversedArray([1,2,3,4,5,6,7,8,9,10]);
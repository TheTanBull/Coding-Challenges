// Code by Jeff "Tan" Bullock 
// @TheTanBull
//Create a function that looks through an array 
//(first argument) and returns the first element 
//in the array that passes a truth test 
//(second argument). If no element passes the test,
//return undefined.

function findElement(arr, func) {
    let winner;
    let i = 0;
    while(i++ < arr.length){
        if(func(arr[i])){
            winner = arr[i];
            break;
        }
    }
    return winner;
}
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
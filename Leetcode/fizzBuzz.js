// Code by Jeff "Tan" Bullock 
// @TheTanBull
//Write a program that outputs the string representation of numbers from 1 to n.
//But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function(n) {
    var output = [];
    if(n >= 1){
        for(var i = 1; i <= n; i++){
            if(i % 5 === 0 && i % 3 === 0){
                output[i - 1] = "FizzBuzz";
            } else if(i % 5 === 0){
                output[i - 1] = "Buzz";
            }else if(i % 3 === 0){
                output[i - 1] = "Fizz";
            }else {
                output[i - 1] = "" + i;
            }
        }
    }
    console.log(output);
    return output;
};

fizzBuzz(15);
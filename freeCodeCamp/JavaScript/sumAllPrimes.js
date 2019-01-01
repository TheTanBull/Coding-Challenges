// Code by Jeff "Tan" Bullock @TheTanBull
// Algorithm is going to handle prime numbers by 
// dividing all candidates by integers from 2
// to their square-root rounded up to the next integer

function sumPrimes(num) {
    // We will begin the process of with a condition
    // that num be 2 or greater as all prime numbers
    // are define as being integers greater than one
    if(num < 2){
        return 0;
    }
    let sumOfPrimes = 2; // accounting for 2
    // Begin testing with n set to 3 to avoid
    // false positive of n/m = 1; (2 / 2 = 1, as 2 is accounted for)
    for(var n = 3; n <= num; n++){
        var isPrime = true; // Assume a number is prime until proven otherwise.
        for(var m = 2; m <= Math.round(Math.sqrt(n)); m++){
            // If the quotient of an integer divided by an integer, other than
            // itself or one, is an integer -- Than it is not prime.
            if(Number.isInteger(n/m)){ 
                isPrime = false;
                break; //no longer need to test the number n
            } 
        }

        // If prime, add to the sum.
        if(isPrime){
            sumOfPrimes = sumOfPrimes + n;
        }
    }
    console.log(sumOfPrimes);
    return sumOfPrimes;
  }
  
  sumPrimes(10);
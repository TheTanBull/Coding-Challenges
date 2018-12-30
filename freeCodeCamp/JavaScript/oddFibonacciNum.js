//Code By Jeffrey "Tan" Bullock

function sumFibs(num) {
    var fib = [];
    var oddCount = 2;
    fib.push(1);
    fib.push(1);
    
    for(var i = 1; i <= num;){
      i = i + fib[fib.length - 2];
      fib.push(i);
      if(i % 2 == 1 && i <= num){
        oddCount += i;
        console.log(oddCount);
      }
    }
    return oddCount;
  }
  
  sumFibs(75025);
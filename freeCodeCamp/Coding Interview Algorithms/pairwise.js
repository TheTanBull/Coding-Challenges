// Code by Jeff "Tan" Bullock 
// @TheTanBull

function pairwise(arr, arg) {
    var indexMatch = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === arg){
                if(indexMatch.indexOf(arr[i] == -1)){
                    indexMatch.push(i);
                    indexMatch.push(j);
                }
                console.log("True");
            }
        }
    }
    console.log(indexMatch);
    var indexSum = indexMatch.reduce(function(a, b) {
        return a + b;
    }, 0);
    console.log(indexSum);
    return indexSum;
  }
  
  pairwise([1,1,1], 2);
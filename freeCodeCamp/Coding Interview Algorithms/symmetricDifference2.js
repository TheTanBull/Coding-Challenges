// Code by Jeff "Tan" Bullock 
// @TheTanBull

function sym() {
    var cleanArray = [], sets = [], symDifArr = [], compareArray = []; // Array to handle duplicates
    var argsArray = Array.prototype.slice.call(arguments, 0);
    // This block of code will return each array with
    // no duplicates.
    argsArray.forEach(function(argsIndex){
        //console.log(argsIndex);
        var numExistsArr = [];
        let tempArray = argsIndex.filter(function(n){
            if(numExistsArr.indexOf(n) == -1){
                numExistsArr.push(n);
                return true;
            }
        });
        cleanArray.push(tempArray);
    });

    cleanArray.forEach(function(arrayIndex){
        sets.push(new Set(arrayIndex));
    })

    while(cleanArray.length > 1){
        compareArray.push(cleanArray[0]);
        compareArray.push(cleanArray[1]);
        let tempArray = [];
        compareArray.forEach(function(arr, index){
            arr.forEach(function(e){
                var duplicate = false;
                for(var i = 0; i < 2; i++){
                    if(i != index){
                        if(sets[i].has(e)){
                            duplicate = true;
                            break;
                        }
                    }
                }
                if(!duplicate){
                    tempArray.push(e);
                }
            });
        });
        cleanArray.shift();
        cleanArray.shift();
        cleanArray.unshift(tempArray);
        sets.shift();
        sets.shift();
        sets.unshift(new Set(tempArray));
        compareArray = [];
    }

    cleanArray[0].sort(function(a, b){
       return a - b; 
    });
    console.log(cleanArray[0]);
    return cleanArray[0];
  

    
  }
  
  sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
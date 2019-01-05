// Code by Jeff "Tan" Bullock 
// @TheTanBull

function sym() {
    var cleanArray = [], sets = [], symDifArr = []; // Array to handle duplicates
    var argsArray = Array.prototype.slice.call(arguments, 0);
    // This block of code will return each array with
    // no duplicates.
    argsArray.forEach(function(argsIndex){
        //console.log(argsIndex);
        var numExistsArr = [];
        tempArray = argsIndex.filter(function(n){
            if(numExistsArr.indexOf(n) == -1){
                numExistsArr.push(n);
                return true;
            }
        });
        cleanArray.push(tempArray);
    });

    cleanArray.forEach(function(a){
        //console.log(a);
        sets.push(new Set(a));
    });
    //console.log(sets);
    cleanArray.forEach(function(arr, index){
        //console.log(arr);
        arr.forEach(function(e){
            //console.log(e);
            var duplicate = false;
            for(var i = 0; i < sets.length; i++){
                //console.log(i + " and the " + index);
                if(i != index) {
                    if (sets[i].has(e)){
                        //console.log(sets[i]);
                        //console.log(e);
                        duplicate = true;
                        break;
                    }
                }
            }
            if(!duplicate){
                symDifArr.push(e);
            }
        });
    });
    symDifArr.sort(function(a, b){
       return a - b; 
    });
    console.log(symDifArr);
    return symDifArr;
  

    
  }
  
  sym([1, 2, 3], [5, 5, 2, 1, 4]);
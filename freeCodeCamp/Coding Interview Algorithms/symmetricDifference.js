// Code by Jeff "Tan" Bullock 
// @TheTanBull
//Not Finished
function sym() {
    let symDifArr = [], sets = [];
    var argsArray = Array.prototype.slice.call(arguments, 0);
    //console.log(argsArray);
    // argsArray.forEach(function(b){
    //     var counts = [];
    //     for(var n = 0; n < b.length; n++){
    //         if(counts[b[n]] === undefined){
    //             counts[b[n]] = 1;
    //         } else {
    //             b.
    //         }
    //     }
    // });
    argsArray.forEach(function(a){
        //console.log(a);
        sets.push(new Set(a));
    });
    //console.log(sets);
    argsArray.forEach(function(arr, index){
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
  
  sym([1, 2, 3], [5, 2, 1, 4]);
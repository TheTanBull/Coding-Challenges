//Code by Jeff "Tan" Bullock

function uniteUnique() {
    console.log(arguments.length);
    var arr = [];
    var numberExistsArr = [];
    for(let i = 0; i < arguments.length; i++){
      arguments[i].forEach(function(element, index){
        arr.push(element);     
      });
    }
    unionArray = arr.filter(function(n){
        if(numberExistsArr.indexOf(n) == -1){
            numberExistsArr.push(n);
            return true;
        }
    });
    console.log(unionArray);
    return unionArray;
  }
  
  uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
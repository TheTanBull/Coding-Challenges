function quickSort(array) {
    // change code below this line
    if(array.length <= 1){
        return array;
    }

    var lowerArray = [], upperArray = [], result = [];
    var pivotValue = array[0];
    for(var i = 1; i < array.length; i++){
        if(array[i] < pivotValue){
            lowerArray.push(array[i]);
        } else {
            upperArray.push(array[i]);
        }
    }
    array = quickSort(lowerArray).concat(pivotValue, quickSort(upperArray));
    // console.log(lowerArray);
    // console.log(upperArray);
    console.log(array);
    // change code above this line
    return array;
  }
  
  // test array:
  quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 55, 234, 92]);
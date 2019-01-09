// Code by Jeff "Tan" Bullock 
// @TheTanBull

function mergeSort(array) {
    // change code below this line
    if(array.length < 2){
        return array;
    }
    var upperArray = [], lowerArray = [];
    var indexLeft = 0, indexRight = 0, result = [];
    var left = 0;
    var right = array.length - 1;
    var middle = Math.floor(array.length / 2);
    lowerArray = array.slice(0, middle);
    upperArray = array.slice(middle);
    // while(left <= right){
    //   if(left == right){
    //     lowerArray.push(array[left]);
    //     break;
    //   }
    //   lowerArray.push(array[left]);
    //   upperArray.push(array[right]);
    //   left++;
    //   right--;
    // }
    upperArray = mergeSort(upperArray);
    lowerArray = mergeSort(lowerArray);
    while(indexLeft < lowerArray.length && indexRight < upperArray.length){
        if(lowerArray[indexLeft] < upperArray[indexRight]){
            result.push(lowerArray[indexLeft]);
            indexLeft++;
        } else {
            result.push(upperArray[indexRight]);
            indexRight++;
        }
    }
    array = result.concat(lowerArray.slice(indexLeft)).concat(upperArray.slice(indexRight));
    console.log(array);
    // change code above this line
    return array;
  }
  
  // test array:
  mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
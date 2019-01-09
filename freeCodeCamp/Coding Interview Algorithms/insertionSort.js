// Code by Jeff "Tan" Bullock 
// @TheTanBull

function insertionSort(array) {
    // change code below this line
    var j, temp;
    for(var i = 1; i < array.length; i++){
        j = i;
        while(j > 0 && array[j] < array[j - 1]){
            temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
    console.log(array);
    // change code above this line
    return array;
  }
  
  // test array:
  insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
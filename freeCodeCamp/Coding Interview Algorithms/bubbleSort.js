// Code by Jeff "Tan" Bullock 
// @TheTanBull

function bubbleSort(array) {
    // change code below this line
    do {
        var count = false;
        for(var i = 0; i < array.length - 1; i++){
            if(array[i] > array[i + 1]){
                let b = array[i + 1];
                array[i + 1] = array[i];
                array[i] = b;
                count = true;
            }
        }
        
    } while (count);

    console.log(array);
    // change code above this line
    return array;
  }
  
  // test array:
bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
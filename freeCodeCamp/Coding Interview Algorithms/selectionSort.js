// Code by Jeff "Tan" Bullock 
// @TheTanBull

function selectionSort(array) {
    // change code below this line
    for(var i = 0; i < array.length - 1; i++){
        var minIndex = i;
        var minValue = array[i];
        for(var j = i + 1; j < array.length; j++){
            console.log("The minimum value is " + minValue);
            console.log(array[j]);
            if(array[j] < minValue){
                console.log(array[j] + " is less than " + minValue);
                minValue = array[j];
                minIndex = j;
                console.log("New minimum value is " + minValue);
                //console.log(minValue);
            }
        }
        array[minIndex] = array[i];
        array[i] = minValue;
    }
    console.log(array);
    // change code above this line
    return array;
  }
  
  // test array:
  selectionSort([1, 4, 2, 3, 5, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
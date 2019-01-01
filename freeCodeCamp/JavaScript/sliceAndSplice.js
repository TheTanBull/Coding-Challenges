// Code by Jeff "Tan" Bullock 
// @TheTanBull

// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.



function frankenSplice(arr1, arr2, n) {
    var arr3 = arr2.slice(0);
    for(var i = 0; i < arr1.length; i++){
        arr3.splice(n + i, 0, arr1[i]);
    }

    //console.log(arr3.toString()); Troubleshooting
    return arr3;
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);
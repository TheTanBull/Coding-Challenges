// Code by Jeff "Tan" Bullock 
// @TheTanBull

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    //console.log(arr1);
    let tempArray = [];
    //console.log(arr1[0][0]);
    arr2.forEach(function(e){
        let found = false;
        for(var i = 0; i < arr1.length; i++){
            // console.log(e[1]);
            // console.log(arr1[i][1]);
            if(e[1] === arr1[i][1]){
                arr1[i][0] += e[0]; 
                found = true;
            } 
        }
        if(!found){
            tempArray.push(e);
        }
    });
    for(var i = 0; i < tempArray.length; i++){
        arr1.push(tempArray[i]);
    }
    arr1.sort(function(a, b){
        return (a[1] < b[1]) ? -1 : 1;
    });
    console.log(arr1);
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
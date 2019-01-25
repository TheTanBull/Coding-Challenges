// Code by Jeff "Tan" Bullock 
// @TheTanBull

// Write a function that reverses a string. The input string is given as an array of characters char[].

var reverseString = function(s) {
    var strIndexLength = s.length - 1;
    for(var i = 0; i <= Math.floor(strIndexLength / 2); i++){
        var temp = s[i];
        s[i] = s[strIndexLength - i];
        s[strIndexLength - i] = temp;
    }
    console.log(s);
};

reverseString(["H","E","L","P","O","A"]);
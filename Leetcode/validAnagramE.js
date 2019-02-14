// Code by Jeff "Tan" Bullock 
// @TheTanBull
//Given two strings s and t , write a function to determine if t is an anagram of s.

function isEmptyObject(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var isAnagram = function(s, t) {
    var myMap = new Map();
    for(var i = 0; i < s.length; i++){
        if(myMap.has(s[i])){
            myMap.set(s[i], myMap.get(s[i]) + 1);
        } else {
            myMap.set(s[i], 1);
        }
    }

    for(var i = 0; i < t.length; i++){
        if(myMap.has(t[i])){
            myMap.set(t[i], myMap.get(t[i]) - 1);
        } else {
            return false;
        }
        if(myMap.get(t[i]) === 0){
            myMap.delete(t[i]);
        }
    }

    var isValidArray = isEmptyObject(myMap);
    console.log(isValidArray);
    console.log(myMap);
    return true;
};



isAnagram("ab", "ba");
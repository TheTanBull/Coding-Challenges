// Code by Jeff "Tan" Bullock 
// @TheTanBull
//Given two strings s and t , write a function to determine if t is an anagram of s.
//Runtime: 96 ms, faster than 48.71% of JavaScript online submissions for Valid Anagram.
//Memory Usage: 36.4 MB, less than 100.00% of JavaScript online submissions for Valid Anagram.

var isAnagram = function(s, t) {
    var myMap = new Map();
    var isValidAnagram = true;
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

    myMap.forEach(function(v, k){
        if(v === 0){
            isValidAnagram = true;
        } else{
            isValidAnagram = false;
        }
    })
    console.log(isValidAnagram);
    console.log(myMap);
    return isValidAnagram;
};



isAnagram("ab", "baf");
// Code by Jeff "Tan" Bullock 
// @TheTanBull
// Given a string, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    var letterMap = new Map();
    var count = 0, longest = 0, subLength = 0, sIndex = 0;
    for (var i = 0; i <= s.length; i++){
        //console.log(s[i] + " " + i);
        if(letterMap.has(s[i])){
            count = i - letterMap.get(s[i]);
            letterMap.set(s[i], i);
            if(count > longest){
                longest = count;
                //sIndex = letterMap.get(s[i]);
            }
        } else {
            letterMap.set(s[i], i);
        }
    }

    letterMap.forEach(function(val, key){
        if(s.length - val > longest){
            longest = s.length - val;
        }
    })
    if(longest === 0){
        longest = s.length;
    }
    console.log(longest);
    return longest;
}

lengthOfLongestSubstring(" a ab");
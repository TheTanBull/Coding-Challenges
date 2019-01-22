// Code by Jeff "Tan" Bullock 
// @TheTanBull
// Given a string, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    var letterMap = new Map();
    var count = 0, longest = 0, repeatCounter = 0, subLength = 0;
    for (var i = 0; i <= s.length; i++){
        //console.log(s[i] + " " + i);
        if(letterMap.has(s[i])){
            count = i - letterMap.get(s[i]);
            letterMap.set(s[i], i);
            if(count > longest){
                if(repeatCounter > count){
                    longest = repeatCounter;
                } else{
                longest = count;
                }
                //sIndex = letterMap.get(s[i]);
            }
            repeatCounter = 0;
        } else {
            repeatCounter++;
            letterMap.set(s[i], i);
        }
    }
    if(repeatCounter > longest){
        console.log(repeatCounter);
        return repeatCounter;
    }
    if(longest === 0){
        longest = s.length;
    }
    console.log(longest);
    return longest;
}

lengthOfLongestSubstring("aab");
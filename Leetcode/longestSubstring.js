// Code by Jeff "Tan" Bullock 
// @TheTanBull
// Given a string, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstringFirst = function(s) {
    var letterMap = new Map();
    var count = 0, longest = 0, repeatCounter = 0, subLength = 0, sIndex = 0;
    for (var i = 0; i < s.length; i++){
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
            if(subLength < repeatCounter){
                subLength = repeatCounter;
            }
            repeatCounter = 1;
        } else {
            repeatCounter++;
            letterMap.set(s[i], i);
        }
        console.log(repeatCounter);
    }
    if(repeatCounter > subLength){
        console.log(repeatCounter);
        return repeatCounter;
    }
    if(longest === 0){
        longest = s.length;
    }
    console.log(longest);
    return subLength;
}

var lengthOfLongestSubstring = function(s) {
    var letterMap = new Map();
    var longest = 0, repeatCount = 0, subStrLength = 0, sIndex = 0;
    for(var i = 0; i < s.length; i++){
        if(letterMap.has(s[i])){
            if(repeatCount > i - sIndex){
                if(longest < repeatCount){
                    longest = repeatCount;
                    console.log("longest being set to repeat count " + repeatCount + " index: " + i);
                }
            } else {
                if(longest < (i - sIndex)){
                    longest = (i - sIndex);
                    console.log("longest being set to sIndex: " + sIndex + " index: " + i);

                }
            }
            repeatCount = 1;
            if(sIndex <= letterMap.get(s[i])){
                sIndex = letterMap.get(s[i]) + 1;
            }
            letterMap.set(s[i], i);
        }else{
            letterMap.set(s[i], i);
            repeatCount++;
        }
    }
    if(s.length - sIndex > longest){
        console.log("Return sIndex: " + sIndex);
        return s.length - sIndex;
    }
    console.log(longest);
    return longest;
}





lengthOfLongestSubstring("abcabcbb");
// Code by Jeff "Tan" Bullock

function fearNotLetter(str) {
    // Declare the variable, but do not define it
    var missingLetter;
    // Scan the string for missing letters, by comparing the letter UTF-16 codes
    for(let i = 0; i < str.length - 1; i++){
        if(str.charCodeAt(i) != str.charCodeAt(i + 1) + 1){
            missingLetter = String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return missingLetter;
  }
  
  fearNotLetter("abce");
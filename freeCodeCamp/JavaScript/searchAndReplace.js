// Code by Jeff "Tan" Bullock

function myReplace(str, before, after) {
    // Check the case of the first letter of the word to be replaced.
    // If uppercase, transform replacement string.
    if(before[0] == before[0].toUpperCase()){
        after = after.charAt(0).toUpperCase() + after.substr(1);
    }

    // Return the string with the replaced word.
    return str.replace(before, after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// Code by Jeff "Tan" Bullock 
// @TheTanBull
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var spinalStr = str.replace(/([A-Z])/g, " $1").trim();
    //console.log(spinalStr);
    spinalStr = spinalStr.toLowerCase().replace(/[_\s]+/g, "-");
    console.log(spinalStr);
    return spinalStr;
  }
  
  spinalCase('This Is Spinal Tap');
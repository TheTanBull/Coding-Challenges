// Code by Jeff "Tan" Bullock


function translatePigLatin(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelPosition = [];
    for(var i = 0; i < 5; i++){
        let n = str.search(vowels[i]);
        if(n >= 0){
            vowelPosition.push(n);
        }
    }
    vowelPosition.sort(function(a, b){
        return a - b;
    });

    // Handle words beginning with a vowel
    if(vowelPosition[0] === 0){
      return str + "way";
    }

    // Handle words with a vowel, not at the beginning
    if(vowelPosition != 0){
    let pigStr = str.slice(0, vowelPosition[0]); 
    str = str.slice(vowelPosition[0], str.length);
    console.log(str + pigStr + "ay");
    return str + pigStr + "ay";
    } 
    
    //When all else fails..
  return str + "ay";
}

translatePigLatin("consonant");
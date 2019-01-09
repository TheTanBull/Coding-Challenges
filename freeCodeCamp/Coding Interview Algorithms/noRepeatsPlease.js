// Code by Jeff "Tan" Bullock 
// @TheTanBull
function getPerm(str){
    var results = [];

    if(str.length === 1){
        results.push(str);
        return results;
    }

    for(var i = 0; i < str.length; i++){
        var firstLetter = str[i];
        var remainingLetters = str.substring(0, i) + str.substring(i + 1);
        var remainingPerm = getPerm(remainingLetters);
        for(var j = 0; j < remainingPerm.length; j++){
            results.push(firstLetter + remainingPerm[j]);
        }
    }
    return results;
}


function permAlone(str) {
    var noRepeats = [];
    var allPerms = getPerm(str);
    console.log(allPerms);
    allPerms.forEach(function(index){
        var repeat = false;
        console.log(index);
        for(var i = 0; i < index.length - 1; i++){
            if(index[i] == index[i + 1]){
                repeat = true;
            }
        }
        if(!repeat){
            noRepeats.push(index);
        }
    });
    console.log(noRepeats);
    return noRepeats.length;

  }
  
  permAlone('aab');
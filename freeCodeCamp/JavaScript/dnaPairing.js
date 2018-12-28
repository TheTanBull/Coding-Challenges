// Code by Jeff "Tan" Bullock

function pairElement(str) {
    let dnArray = [];
    for(let i = 0; i < str.length; i++){
      switch(str.charAt(i)){
          case 'A':
          dnArray.push(["A", "T"]);
          break;
          case 'C':
          dnArray.push(["C", "G"]);
          break;
          case 'G':
          dnArray.push(["G", "C"]);
          break;
          case 'T':
          dnArray.push(["T", "A"]);
          break;
      }
    }
    console.log(dnArray);
    return dnArray;
}

pairElement("GCG");
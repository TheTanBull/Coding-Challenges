// Code by Jeff "Tan" Bullock 
// @TheTanBull

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    if(bool === true){
        return true;
    }
    if(bool === false){
        return true;
    }
    return false;
}
  
booWho(null);
function telephoneCheck(str) {
    var parentheses = "()",
    stack = [],
    i,
    c;
    
    for(i = 0; c = str[i++];){
        var bracePosition = parentheses.indexOf(c),
        braceType;
        if(!~bracePosition)
        continue;
    
        braceType = bracePosition % 2 ? 'closed' : 'open';
    
        if (braceType === 'closed'){
        if(!stack.length || parentheses.indexOf(stack.pop()) != bracePosition - 1)
        return false;
        } else {
        stack.push(c);
        }
    }
    if(stack.length != 0)
        return false;
    if(str.match(/^[1]?[\s]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/)){
        return true;
    } else {
        return false;
    }
}

    // if(str.replace(/\D+/g, '').length > 11 || str.replace(/\D+/g, '').length < 10){
    //     return false;
    // }
    // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    // if(str.match(/^[1]?[(]?[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/)
    
    
    
    // if(str.charAt(0) != /\d\(/){
    //     return false;
    // }
    // str = str.replace(/\s+/g, '');
    // if(str.replace(/\D/g, '').length == 11){
    //     if(str.charAt(0) == '1'){
    //         return true;
    //     }

    // }
    
    // str = str.replace(/[()]/g, '');
    // str = str.replace(/-/g,'');
    // console.log(str);
    // if(/^\d+$/.test(str)){
    //   if(str.length == 10){
    //     return true;
    //   }
    //   if(str.length == 11 && str.charAt(0) == '1'){
    //     return true;
    //   }
    // }
    // return false;
  
  
  telephoneCheck("555-555-5555");
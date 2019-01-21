// Code by Jeff "Tan" Bullock 
// @TheTanBull

var addTwoNumbersFirst = function(l1, l2) {
    var currentNode = l1;
    var l1String = "", l2String = "", lTotal;
    while(currentNode){
        l1String = currentNode.val + l1String;
        currentNode = currentNode.next;
    }
    currentNode = l2;
        while(currentNode){
        l2String = currentNode.val + l2String;
        currentNode = currentNode.next;
    }

    lTotal = parseInt(l1String) + parseInt(l2String);
    
    lTotal = lTotal.toString();
    
    l3 = {};
    currentNode = l3;

    while(lTotal !== ""){
        cVal = lTotal.slice(-1);
        lTotal = lTotal.substring(0, lTotal.length - 1);
        currentNode.val = parseInt(cVal);
        currentNode.next = {};
        if(lTotal === ""){
            currentNode.next = null;
            break;
        }
        currentNode = currentNode.next;
    }
    return l3;
};
/********************************************/


var addTwoNumbers = function(l1, l2) {
    var l3 = {}, cNode1 = l1, cNode2 = l2, cNode3 = l3;
    var carry = false;

    while(cNode1 && cNode2){
        if(cNode1.val + cNode2.val >= 10){
            if(carry){
                cNode3.val = cNode1.val + cNode2.val - 9;
            } else{
                cNode3.val = cNode1.val + cNode2.val - 10;
            }
            carry = true;
        } else {
            if(carry){
                cNode3.val = cNode1.val + cNode2.val + 1;
                carry = false;
            } else{
                cNode3.val = cNode1.val + cNode2.val;
            }
        }
        
        cNode1 = cNode1.next;
        cNode2 = cNode2.next;
        if(cNode1 || cNode2){
            cNode3.next = {};
            cNode3 = cNode3.next;
        }else{
            cNode3.next = null;
        }
    }

    while(cNode1){
        if(carry){
            if(cNode1.val === 9){
                cNode3.val = 0;
            } else {
                cNode3.val = cNode1.val + 1;
                carry = false;
            }
        } else {
            cNode3.val = cNode1.val;
        }
        cNode1 = cNode1.next;
        if(cNode1){
            cNode3.next = {};
            cNode3 = cNode3.next;
        }else{
            cNode3.next = null;
        }
    }
    while(cNode2){
        if(carry){
            if(cNode2.val === 9){
                cNode3.val = 0;
            } else {
                cNode3.val = cNode2.val + 1;
                carry = false;
            }
        } else {
            cNode3.val = cNode2.val;
        }
        cNode2 = cNode2.next;
        if(cNode2){
            cNode3.next = {};
            cNode3 = cNode3.next;
        }else{
            cNode3.next = null;
        }
    }

    if(carry){
        cNode3.next = {
            val: 1,
            next: null
        }
    }
    console.log(l3);
    return l3;
}



addTwoNumbers({
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }

},{
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: {
                val: 8,
                next: null
            }
        }
    }
});
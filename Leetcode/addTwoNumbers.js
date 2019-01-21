// Code by Jeff "Tan" Bullock 
// @TheTanBull

var addTwoNumbers = function(l1, l2) {
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

    //console.log(l3);
    return l3;
};

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
            next: null
        }
    }
});
// Code by Jeff "Tan" Bullock 
// @TheTanBull

var reverseList = function(head) {
    if(head === null || head.next === null){
        console.log("We've hit the bottom");
        return head;
    }else{
        var newHead = reverseList(head.next);
        console.log("Current Node is " + head.val);
        head.next.next = head;
        head.next = null;
    }
    return newHead;
};

reverseList({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
})

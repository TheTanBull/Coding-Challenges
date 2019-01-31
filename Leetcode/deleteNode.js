// Code by Jeff "Tan" Bullock 
// @TheTanBull
// 80ms; faster than 100% of submissions

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
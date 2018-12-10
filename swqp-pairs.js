var swapPairs = function(head) {
    if(head === null){
        return null;
    }
    if(head.next === null){
        return head;
    }
  var curr = head;
    var next = curr.next;
    while(curr.next !== null && next.next !== null){
      var temp = curr.val;
      curr.val = next.val;
      next.val = temp;
      curr = curr.next.next;
      next = next.next.next;
    }
    if(next !== null){
      temp = curr.val;
      curr.val = next.val;
      next.val = temp; 
    }
    
    return head;  
};

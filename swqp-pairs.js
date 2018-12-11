var swapPairs = function(head) {
    if(head === null){
        return null;
    }
    if(head.next === null){
        return head;
    }
  var curr = head;
    var next = curr.next;
    while(next !== null){
      var temp = curr.val;
      curr.val = next.val;
      next.val = temp;
      curr = curr.next.next;
      if(next.next !== null){
        next = next.next.next;
      }else{
        break;
      } 
    }
    return head;  
};

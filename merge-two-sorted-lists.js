var mergeTwoLists = function(l1, l2) {
    if(l1 === null){
        return l2;
    }
    if(l2 === null){
        return l1;
    }
    var currl1 = l1;
    var currl2 = l2;
    var l3;
    if(l1.val <= l2.val){
      l3 = l1;
      currl1 = l1.next;
    }else{
      l3 = l2;
      currl2 = l2.next;
    }
    var currl3 = l3;
    while(currl1 !== null && currl2 !== null){
      if(currl1.val <= currl2.val){
        currl3.next = currl1;
        currl1 = currl1.next;
        currl3 = currl3.next;
      }else{
        currl3.next = currl2;
        currl2 = currl2.next;
        currl3 = currl3.next;
      }
    }
    if(currl1 !== null){
      currl3.next = currl1; 
    }
    if(currl2 !== null){
      currl3.next = currl2; 
    }
    return l3;  
};
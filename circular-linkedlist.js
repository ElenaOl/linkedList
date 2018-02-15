// 13. Write an algorithm to determine if a linkedlist is circular. FOLLOW UP: Determine where the circle meets.

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
    // print(){
    //   console.log(this.value);
    // }
  }
  
  var head = new Node(10);
  var n1 = new Node(12);
  var n2 = new Node(14);
  var n3 = new Node(16);
  var n4 = new Node(8);
  var n5 = new Node(3);
  head.next = n1;
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n5;
  n5.next = head;
  
  function findLoop(head){
    if(head.next === null){
      return "not circular";
    }
    var current = head;
    var num = 1;
    
    while (current.next !== null && current.next.number === undefined){
      current.number = num;
      current = current.next;
      num +=1;
    }
    if(current.next === null){
      return "not circular";
    }
   
    return "the place where circle occurs is " + current.next.number;
  }
  
  
  findLoop(head);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
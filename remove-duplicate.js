// 15. Write code to remove duplicates from an unsorted linked list. Follow up: How would you solve it if temporary buffer is not allowed?

// O(n) with hash, each value i write in hash.key, if the value allready exists at hash.key

//O(((n+1)*n)/2) ~ n^2/2

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

var head = new Node(1);
var n1 = new Node(2);
var n2 = new Node(3);
var n3 = new Node(1);
var n4 = new Node(2);
var n5 = new Node(3);
var n6 = new Node(4);
head.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

function deleteDuplicate(head){
  if(head.next === null){
      return "list of one node";
  }
  var h = {};
  var current = head;
  h[current.value] = 1;
  
  while(current.next !== null){
   if(h[current.value] === 1){
     var toDelete = current;
     current = current.next;
     toDelete.next = null;
   }else{
     h[current.value] = 1
   }
    
  }
   
}

// deleteDuplicate(head);  

function print(head){
  deleteDuplicate(head); 
  console.log(head.next);
}  
print(head);  
  
  
  
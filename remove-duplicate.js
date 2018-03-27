// 15. Write code to remove duplicates from an unsorted linked list. Follow up: How would you solve it if temporary buffer is not allowed?

// O(n) with hash, each value i write in hash.key, if the value allready exists at hash.key

//O(((n+1)*n)/2) ~ n^2/2

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

var head = new Node(null);
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
  //don't need this if, if my head.value = null
  // if(head.next === null){
  //     return "list of one node";
  // }
  var h = {};
  var current = head;
  
  while(current.next !== null){
   if(h[current.next.value] === 1){
     var toDelete = current.next;
     current.next = current.next.next;
     toDelete.next = null;
   }else{
     h[current.next.value] = 1;
     current = current.next;
   }
  }
}

function print (current){
  while(current !== null){
    console.log(current.value);
    current = current.next;
  }
}

// print(head.next);
deleteDuplicate(head);
print(head.next);

function deleteDuplicate2(head){
  var current = head.next;
  
  while(current !== null){
    var compare = current;
    while(compare.next !== null){
      // console.log(compare.next.value)
      if(current.value === compare.next.value){
        var toDelete = compare.next;
        // console.log(toDelete)
        compare.next = compare.next.next;
        toDelete.next = null;
      }else{
        compare = compare.next;
      }
    }
    current = current.next;
  }
}







  
  
  
  
  
  
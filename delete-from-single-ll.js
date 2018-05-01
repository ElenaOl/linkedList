// 17. Implement an algorithm to delete a node a singly linked list, given only access to that node.

class Node {
  constructor (value){
    this.value = value;
    this.next = null;
  }
}

var head = new Node (1);
var n2 = new Node (2);
var n3 = new Node (3);
var n4 = new Node (4);
var n5 = new Node (5);
head.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

function deleteNode (node){
  if(node.next !== null){
    node.value = node.next.value;
    node.next = node.next.next;
  }
}
deleteNode (n3);
console.log(head);



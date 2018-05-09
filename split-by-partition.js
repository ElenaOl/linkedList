// 18. Write code to partition a linkedlist around a value x, such that all nodes less than x come before all nodes great than or equal to x.

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

var head = new Node(6);
var node2 = new Node(12);
head.next = node2;
var node3 = new Node(55);
node2.next = node3;
var node4 = new Node(4);
node3.next = node4;

function partition (node, num){
  if(node.next === null){
    return node;
  }
  var curr = head;
  var left = null;
  var right = null;
  while(curr !== null){
    var next = curr.next;
    if(curr.value === num){
      var part = curr;
      part.next = null;
    }else if(curr.value < num){
      curr.next = left;
      left = curr;
    }else{
      curr.next = right;
      right = curr;
    }
    curr = next; 
  }
  if(left !== null){
    head = left;
    curr = head;
    while(curr.next !== null){
      curr = curr.next;
    }
    left = curr;
    if(part !== undefined){
    left.next = part;
    left = left.next;
    }
    if(right !== null){
      left.next = right;
    }
    // console.log(left)
    
  }else if(part !== undefined){
      head = part;
      part.next = right;
  }else{
    head = right;
  }
  return head;
}
partition (head, 12);
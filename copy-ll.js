class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

var head = new Node(10);
var node2 = new Node(3);
head.next = node2;
var node3 = new Node(5);
node2.next = node3;
var node4 = new Node(6);
node3.next = node4;

function copyLl (head){
  var curr = head;
  var newHead = new Node(curr.value);
  var copy = newHead;
  curr = curr.next;
  while (curr !== null){
    var prev = copy;
    copy = new Node(curr.value);
    prev.next = copy;
    curr = curr.next;
  }
  return newHead;
}

copyLl (head);
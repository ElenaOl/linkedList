// Given two numbers represented by two lists, write a function that returns sum list. The sum list is list representation of addition of two input numbers.
// Suppose you have two linked list 5->4 ( 4 5 )and 5->4->3( 3 4 5) you have to return a resultant linked list 0->9->3 (3 9 0).

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
  
var head1 = new Node(5);
var n1 = new Node(4);
head1.next = n1;

var head2 = new Node(5);
var n2 = new Node(4);
var n3 = new Node(3);
head2.next = n2;
n2.next = n3;

function sumLists(head1, head2){
  if(head1 === null){
    return head2;
  }
  if(head2 === null){
    return head1;
  }
  
  var head3 = new Node(head1.value + head2.value);
  var curr3 = head3;
  var curr1 = head1.next;
  var curr2 = head2.next;
  var toMove = 0;
  while(curr1 !== null && curr2 !== null){
    if(curr3.value >=10){
      curr3.value = curr3.value%10;
      toMove = 1;
    }
    console.log(toMove)
    if(toMove === 1){
      curr3.next = new Node(curr1.value + curr2.value+1);
    }else{
      curr3.next = new Node(curr1.value + curr2.value);
    }
    curr3 = curr3.next;
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  if(curr1 !== null){
    curr3.next = curr1;
  }
  if(curr2 !== null){
     curr3.next = curr2;
  }
  return head3;
}
sumLists(head1, head2);

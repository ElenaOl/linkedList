// 16. Implement an algorithm to find the kth to the last element of a singly linked list

function printKElementFromEnd(k,node){
  if(k <= 0 || k === undefined){
    return;
  }
  var first = head;
  var second = head;
  for(var i=0; i<k; i++){
    if(first === null){
      return;
    }
    first=first.next;
  }
  while (first !== null){
    first = first.next;
    second = second.next;
  }
  return second.value;
}
printKElementFromEnd(1,head); 

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  addValue(value){
    var node = new Node(value);
    if(this.head === null){
      this.head = node;
    }else{
      this.tail.next = node;
    }
    this.tail = node;
  }
  
  print(){
    var current = this.head;
    while (current !== null){
      console.log(current.value);
      current = current.next;
    }
  }
  
  printKElementFromEnd(k){
    if(k <= 0 || k === undefined){
      return;
    }
    var first = this.head;
    var second = this.head;
    for(var i=0; i<k; i++){
      if(first === null){
        return;
      }
      first=first.next;
    }
    while (first !== null){
      first = first.next;
      second = second.next;
    }
    console.log(second.value);
  }
  reverse(){
    var prev = null;
    var current = this.head;
    
    while (current !== null){
      var next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    var newTail = this.head;
    this.head = this.tail;
    this.tail = newTail;
  }
  
}

const list = new LinkedList();
list.addValue(3);
list.addValue(1);
list.addValue(0);
list.addValue(7);
list.addValue(0);
list.addValue(1);
list.addValue(5);
list.print();
list.printKElementFromEnd(5);


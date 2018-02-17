// 19. Reverse a linked list – iteratively and recursively

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

const list = new LinkedList;

list.addValue(3);
list.addValue(6);
list.addValue(2);
list.addValue(8);
list.print();
list.reverse();
list.print();








// 18. Write code to partition a linkedlist around a value x, such that all nodes less than x come before all nodes great than or equal to x.

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
  partition(num){
    var current = this.head;
    var l = null;
    var r = null;
    var p = null;
    
    // split by partition
    while(current !== null){
      var next = current.next;
      if(current.value === num){
        p = current;
        p.next = null;
      }else if(current.value < num){
        current.next = l;
        l = current;
      }else{
        current.next = r;
        r = current;
      }
      current = next;
    }
    
    // find last in l
    current = l;
    while(current.next !== null){
      current = current.next;
    }
    
    // merge lists
    if(p !== null){
      current.next = p;
      p.next = r; 
    }else{
      current.next = r;
    }
    
    // update list
    this.head = l;
    while(current.next !== null){
      current = current.next;
    }
    this.tail = current;
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

list.partition(6);
list.print();
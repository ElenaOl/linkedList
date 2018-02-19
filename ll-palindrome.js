// 12. Write an algorithm to determine if a linkedlist is a palindrome
// O(3n)
class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  var arr = [];
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
    
    toArr(){
      var current = this.head;
      while (current !== null){
        arr.push(current.value)
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
  
  const list = new LinkedList();
  list.addValue(3);
  list.addValue(1);
  list.addValue(0);
  // list.addValue(7);
  list.addValue(0);
  list.addValue(1);
  list.addValue(3);
  list.print();
  list.toArr();
  console.log(arr)
  // list.reverse();
  // list.print();
  function isPalindrome (arr){
    for (var i=0; i<arr.length; i++){
      if(arr[i] !== arr[arr.length-(i+1)]){
        return false;
      }
    }
    return true;
  }
  
  isPalindrome(arr);
  
  
  
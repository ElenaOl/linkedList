// 12. Write an algorithm to determine if a linkedlist is a palindrome
// O(n)

// Given a singly linked list, determine if it is a palindrome.
// Could you do it in O(n) time and O(1) space?

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
var head = new Node (1);
var n1 = new Node(0);
var n2 = new Node(0);
var n3 = new Node(2);
// var n4 = new Node(3);
head.next = n1;
n1.next = n2;
n2.next = n3;
// n3.next = n4;

function isPalindrome (head){
  if(head === null){
    return true;
  }
  if(head.next === null){
    return true;
  }
  var slow = head;
  var fast = head;
  var stack = [];
  while(fast !== null && fast.next !== null){
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }
  
  //if the amount of nodes in linked list is even then fast will be null at the end of the first loop.
  //if the amount of nodes in linked list is odd then fast will be at the last node at the end of the first loop.
  if(fast !== null){
    slow = slow.next;
  }  
  while(stack.length > 0){
    if(stack[stack.length-1] !== slow.value){
      return false;
    }
    slow = slow.next;
    stack.pop();
  }
  return true;
}
isPalindrome (head);







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
  
  //solution with 2 pointers and stack
  
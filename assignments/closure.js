// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function a() {
  var text = "Hello!";
  function b() {
    console.log(text);
  }
  return b;
}
var c = a();
c();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (num) => {
  var count = num;
  function inner() {
    console.log(count += 1);
    return count;
  }
  return inner;
  // Return a function that when invoked increments and returns a counter variable.
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

var test = counter(0);
test();
test();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (ID_param) => {
    var ID_num = ID_param,
        ID_obj = {
    increment: () => {ID_num += 1; console.log(ID_num)},
    decrement: () => {ID_num -= 1; console.log(ID_num)}
  };
  return ID_obj
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

var ID_test = counterFactory(0);
ID_test.increment();
ID_test.increment();
ID_test.increment();
ID_test.decrement();
ID_test.decrement();
ID_test.decrement();
// Object.entries()

// Object.entries(obj)

const object1 = {
  foo: 'bar',
  baz: 42,
};
console.log(Object.entries(object1)[1]);
// expected output: Array ["baz", 42]

const object2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object2)[2]);
// expected output: Array ["2", "c"]

const result = Object.entries(object2).sort((a, b) => a - b);
console.log(Object.entries(result)[1]);
// expected output: Array ["1", Array ["1", "b"]]

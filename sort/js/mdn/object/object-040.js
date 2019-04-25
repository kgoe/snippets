// Object.defineProperties()

/**
 * MyClass
 * class
 */
function MyClass() {
}

MyClass.prototype.x = 1;
Object.defineProperty(MyClass.prototype, 'y', {
  writable: false,
  value: 1,
});

var a = new MyClass();
a.x = 2;
console.log(a.x); // 2
console.log(MyClass.prototype.x); // 1
a.y = 2; // Ignored, throws in strict mode
console.log(a.y); // 1
console.log(MyClass.prototype.y); // 1

# JS/TS Notebook

---

# Types
- comment
```javascript
// one line comment

/* multiline comment
multiline comment
*/
```
## Declarations
- var ใช้ declare variable / init value
- let block-scoped, local variable / init value
- const block-scoped, read-only named constant.

### Declare a variable
- use keyword `var` e.g. >> `var x = 12` **both local and global** scope
- `const` and `let` >> `let x = 64` block-scoped level local variable
- destructing syntax

ตัวอย่าง block scope
```javascript
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```
### Hoisting
the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

See hoisting types reference in https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

- varible hoisting – `var` สามารถ declare ได้ทุกที่ใน scope

```javascript
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();

// Or

var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();
````
- `let` `const` use case >> if we refer to variable before it declared it will pass `ReferenceError`

```javascript
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
````

### `Const`
Const prevents **re-assignment** but doesn't prevent **mutation**

```javascript

const object = { key: "value" };
object.ley = "newValue";

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

# Data Structure & Types
## Data Types
มี primitives กับ object

> [!NOTE]
> Primitive is a data that is not an object and has no methods or properties.

### Primitives – 7 data types
1. Boolean. true and false.
2. null. A special keyword denoting a null value.
3. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
4. undefined. A top-level property whose value is not defined.
5. Number. An integer or floating point number. For example: 42 or 3.14159.
6. BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
7. String. A sequence of characters that represent a text value. For example: "Howdy".
Symbol. A data type whose instances are unique and immutable.

## Operator
Converting strings to numbers ใช้ 3 methods
- `parseInt()` uses to return whole number. it diminish decimals.

> [!NOTE]
> a best practice for parseInt is to always include the radix parameter. The radix parameter is used to specify which numerical system is to be used.

```javascript
parseInt("101", 2) \\5
prase string "101" as a num in base-2
```

- `parseFloat()`
- `Number()`

## Literals
Literals **represent values** in JavaScript. **These are fixed values**—not variables—that you literally provide in your script.

### Array Literals
เป็น list of zero/more expression >> ข้างในเป็น element อยู่ใน []
`coffee` array ที่มี 3 elements มี length = 3
```javascript
const coffees = ["French Roast", "Colombian", "Kona"];

const fish = ["Lion", , "Angel"];
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
// length = 3

const animal = [, "cat", , "dog"]
//length = 4
// animal[0], animal[2] are missing
```
> [!NOTE]
> Array literals create Array objects.

### Numeric Literals
- Integer lit

เลขฐาน
```javascript
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

- Floating-point Literals
```javascript
[digits].[digits][(E|e)[(+|-)]digits]

3.1415926
.123456789
3.1E+12
.1e-23
```

### Object Literals

 **a list of key : value pairs** >> pairs of property names and associated values

```javascript
const object = {
  model: 'Y'
}
// model = property name
// 'Y' = property value

const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

// nested object
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };
console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

# Control flow and Error Handling

## Conditional Statement
set of command >> execute when a condition is true. In js we have `id else` and `while`

```javascript
if (condition) {
  statement1;
  //return ()
} else {
  // statement2;
}

// or we can do

id (condition) {
  statement1;
} else if (condition2) {
  statement2
} else {
  statementL;
}
```

## Falsy newValue
The following values evaluate to false (also known as Falsy values):

```
false
undefined
null
0
NaN
the empty string ("")
```

```javascript
function checkData() {
  if (document.form1.threeChar.value.length === 3) {
    return true;
  }
  alert(
    `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
  );
  return false;
}
```
### Switch Statement
evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement.

```javascript
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
```

#### Break statements
ถ้า program matched the case it will break from `switch`

In the following example, if `fruitType` evaluates to `"Bananas"`, the program matches the value with case `"Bananas"` and executes the associated statement. When `break` is encountered, the program exits the switch and continues execution from the statement following switch. If break were omitted, the statement for case "Cherries" would also be executed.

```javascript
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");
```

## Exception handling Statement
ใช้ `throw` เพื่อโยน error
handle ด้วย `try catch`

```javascript
try {
  throw "myException"; // generates an exception
} catch (err) {
  // statements to handle any exceptions
  logMyErrors(err); // pass exception object to error handler
}
```
> [!NOTE]
> When logging errors to the console inside a catch block, using console.error() rather than console.log() is advised for debugging. It formats the message as an error, and adds it to the list of error messages generated by the page

# Loop Conditions

## `for` statement
```javascript
for (initialization; condition; afterthought)
  statement

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");

```

## labeled statement
use a label to identify a loop. then, use the `break` or `continue` statements.
```javascript
label:
  statement
```

## `break` statement
Use the break statement to terminate a loop, `switch`, or in conjunction with a labeled statement.

```javascript
break; //terminates the innermost enclosing loop or switch

// Example 1
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}

break label; //terminates the specified enclosing labeled statement

// Example 2
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

//output
// Out: 0
// In: 1
// In: 2
// In: 3
// In: 4
// In: 5
// In: 6
// In: 7
// In: 8
// In: 9
// Out: 1
// In: 1
// In: 2
// In: 3
// In: 4
// In: 5
// In: 6
// In: 7
// In: 8
// In: 9
// Out: 2
// In: 1
// In: 2
// In: 3
// In: 4
// In: 5
// In: 6
// In: 7
// In: 8
// In: 9
// Out: 3
// In: 1
// In: 2
// In: 3
// In: 4
// In: 5
// In: 6
// In: 7
// In: 8
// In: 9
// Out: 4
// In: 1
// In: 2
// In: 3
// In: 4
// In: 5
// In: 6
// In: 7
// In: 8
// In: 9
// Out: 5
// In: 1
// In: 2
// In: 3
// In: 4
// In: 5
// In: 6
// In: 7
// In: 8
// In: 9
// Out: 6
// In: 1
// In: 2
// In: 3
// In: 4
// In: 5
// In: 6
// In: 7
// In: 8
// In: 9
// Out: 7
// In: 1
// In: 2
// In: 3
// In: 4
// In: 5
// In: 6
// In: 7
// In: 8
// In: 9
// Out: 8
// In: 1
// In: 2
// In: 3
// In: 4
// In: 5
// In: 6
// In: 7
// In: 8
// In: 9
// Out: 9
// In: 1
// In: 2
// In: 3
// In: 4
// In: 5
// In: 6
// In: 7
// In: 8
// In: 9
```
## Continue Statement
restart a while, do-while, for, or label statement

```javascript
let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i);
  i += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}

// Output
// 0
// 10
// 9 is odd.
// 9
// 8
// 7 is odd.
// 7
// 6
// 5 is odd.
// 5
// i = 1
// j = 4
// 1
// i = 2
// j = 4
// 2
// i = 3
// j = 4
// 3
// i = 4
// j = 4
```

อธิบายเป็นสเต็ป
1. i = 0 >> 0 < 4 >> console.log(i) output = 0 >> i = 1
2. check J >> j = 10 >> 10 > 4 >> console.log(j) = 10 >> j = 9 >> j%2 =/= 0 >> console.log(j, "is odd").
3. loop checkJ ต่อ >> 9 > 4 >> console.log(j) = 9 >> j = 8 >> 8 % 2 =/= 0 >> *BREAK* >> ไปต่อ checkJ ใหม่
4. loop checkJ 8 > 4 >> console.log(j) = 8 >> j = 7 >> "เหมือนข้างบน" >> 7 is odd
5. พอลูปจาก j -= 1 ได้ 4 เลย ออก loop ไป checkIandJ ด่าล่างต่อ
6. console.log(i) = 1 console.log(j) = 4
7. i = 2 >> console.log(i) = 2 console.log(j) = 4
8. ลูปไปจน i = 4

## `for..in` statement
takes as its argument an object and the object's name.
iterates over all the **object's properties** and **returns** a string that **lists the property names and their values**.

> [!NOTE]
> ลูป for...in ถูกออกแบบมาเพื่อวนลูปเอา "property keys" (คีย์) ของ object และ array ก็ถือเป็น object ชนิดหนึ่ง คีย์ของ array คือ indices

```javascript
for (variable in object)
  statement

function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}

const car = { make: "Ford", model: "Mustang" }
console.log(dumpProps(car, "car"));

// result
// car.make = Ford
// car.model = Mustang
//
const animals = {
  type: "mammal",
  age: 20,
  birth: 2002,
  isMom: false,
};
for (const i in animals) {
  console.log(i, animals[i]);
}
// Output
// type mammal
// age 20
// birth 2002
// isMom false

for (const i in animals) {
  console.log(i);
}
// output
// type
// age
// birth
// isMom
```

> [!NOTE]
> `${obj[i]}` คือ Bracket Notation ความหมายคือ *ไปที่ object obj และดึง ค่า (value) ที่เก็บอยู่ใน key ที่ชื่อเหมือนกับสิ่งที่ตัวแปร i ถืออยู่*

## `for..of` statement
creates a loop Iterating over **iterable objects** (including Array, Map, Set, arguments object and so on)

> [!WARNING]
> `for..of` ลูปเอา value ส่วน `for..in` ลูปเอา key

**executed for the value of each distinct property**

```javascript
for (variable of object)
  statement

const fruits = ["apple", "banana", "papaya"];

for (const fruit of fruits) {
  console.log(fruit);
}

// output
// apple
// banana
// papaya
```

## Destructuring

---

# Class
## Constructor

```javascript
// before 2015
functiion Person(name, age, country){
  this.name = name,
  this.age = age,
  this.country = country
}
// after 2015
class Person{
  constructor(name, age, country){
    this.name = name,
    this.age = age,
    this.country = country
  }
}

```

Constructor คือ

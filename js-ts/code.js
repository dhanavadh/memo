// const fish = ["Lion", , "Angel"];
// console.log(fish);
// // [ 'Lion', <1 empty item>, 'Angel' ]
// for (let step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log(`Walking east one step ${step}`);
// }

// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }

// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }
// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }

// let i = 0;
// let j = 10;
// checkIandJ: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkJ: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }

// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Out:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("In:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

// function dumpProps(obj, objName) {
//   let result = "";
//   for (const i in obj) {
//     result += `${objName}.${i} = ${obj[i]}<br>`;
//   }
//   result += "<hr>";
//   return result;
// }

// const car = { make: "Ford", model: "Mustang" };

// console.log(dumpProps(car, "car"));

const fruits = ["apple", "banana", "papaya"];
const animals = {
  type: "mammal",
  age: 20,
  birth: 2002,
  isMom: false,
};

for (const fruit of fruits) {
  console.log(fruit);
}
for (const [i, j] of Object.entries(animals)) {
  console.log(i, j);
}

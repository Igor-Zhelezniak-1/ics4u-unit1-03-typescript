/**
 * The program calculates time
 *
 * By:Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-10-04
 */

import promptSync from "prompt-sync";

const prompt = promptSync();
const item = prompt("Are you heating sub, pizza, or soup? ");
const sNumberOfItems = prompt("How many ${item}(s) are you cooking(max:3)? ");
const numberOfItems = parseInt(sNumberOfItems);
let time = 1;
let percent = 1;
if (item === "pizza") {
  time = 45;
} else if (item === "sub") {
  time = 60;
} else if (item === "soup") {
  time = 105;
} else {
  console.log("Invalid input");
}
if (numberOfItems === 1) {
  percent = 1;
} else if (numberOfItems === 2) {
  percent = 1.5;
} else if (numberOfItems === 3) {
  percent = 2;
} else if (isNaN(+numberOfItems)) {
  console.log("Invalid input");
} else {
  console.log("Invalid input");
}

if (time > 1 && percent > 1) {
  const allTime = time * percent;
  console.log(`The time is ${allTime} seconds.`);
}
console.log("\nDone.");

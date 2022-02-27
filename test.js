import {addOne} from "./index.js";

function assert(isTrue) {
  if (!isTrue) {
    throw new Error();
  }
}

function testAddOne() {
  assert(addOne(1) === 2);
}

testAddOne();
console.log("Success");

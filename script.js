function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    if (b === c) {
      return a; // a is the largest, and b and c are equal
    }
    return a; // a is the largest
  } else if (b >= a && b >= c) {
    if (a === c) {
      return b; // b is the largest, and a and c are equal
    }
    return b; // b is the largest
  } else {
    if (a === b) {
      return c; // c is the largest, and a and b are equal
    }
    return c; // c is the largest
  }
}
const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
  
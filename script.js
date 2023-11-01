function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    if (b === c) {
      return a; 
    }
    return a;  
  } else if (b >= a && b >= c) {
    if (a === c) {
      return b; 
    }
    return b; 
  } else {
    if (a === b) {
      return c;
    }
    return c; 
  }
}

const a = parseFloat(prompt("Enter the First Number"));
const b= parseFloat(prompt("Enter the Second Number"));
const c = parseFloat(prompt("Enter the Third Number"));

alert(findLargest(a, b, c)); 

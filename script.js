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

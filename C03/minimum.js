const minimum = (a, b) => {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else {
    return 'even';
  }
};
console.log(minimum(10, 5));

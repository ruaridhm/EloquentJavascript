const isEven = (num) => {
  if (num === 0) {
    return (ans = 'Even');
  } else if (num < 0) {
    return (ans = 'Odd');
  } else {
    isEven(num - 2);
  }
  return ans;
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

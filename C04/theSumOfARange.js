const range = (start, end, step = 1) => {
  let ans = [];
  if (step >= 0) {
    for (let i = start; i <= end; i = i + step) {
      ans.push(i);
    }
  } else {
    step = Math.abs(step);
    for (let i = start; i >= end; i = i - step) {
      ans.push(i);
    }
  }
  return ans;
};

const sum = (arr) => {
  return arr.reduce((accumulator, currentVal) => accumulator + currentVal);
};

console.log(range(5, 2, -1));

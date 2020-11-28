const reverseArray = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    newArr.unshift(element);
  });
  return newArr;
};

function reverseArrayInPlace(arr) {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  return arr;
}

console.log(reverseArrayInPlace([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

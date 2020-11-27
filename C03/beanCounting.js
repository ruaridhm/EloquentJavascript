const countBs = (string) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'B') {
      counter++;
    }
  }
  return counter;
};

const countChar = (string, char) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      counter++;
    }
  }
  return counter;
};

const countBsNew = (string) => {
  return countChar(string, 'B');
};

console.log(countBs('Eloquent BavaBript'));
console.log(countChar('Eloquent JavaScript', 'a'));
console.log(countBsNew('Eloquent BavaBript'));

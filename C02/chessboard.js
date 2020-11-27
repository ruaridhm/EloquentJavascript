const line = '# # # #';
for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    console.log(line);
  } else {
    console.log(` ${line}`);
  }
}

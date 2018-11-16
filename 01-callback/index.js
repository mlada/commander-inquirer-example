multiplication2 = x => {
  console.log(x * 2);
};
division2 = x => {
  console.log(x / 2);
};
sum = (x, y, cb) => {
  cb(x + y);
};

multiplicateSum = (x, y) => sum(x, y, multiplication2);
multiplicateSum(2, 2);

divideSum = (x, y) => sum(x, y, division2);
divideSum(2, 2);

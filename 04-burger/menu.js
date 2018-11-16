const colors = require('colors');
const { types } = require('./values');

// export function to list coffee
module.exports = () => {
  console.log('Меню БУРГЕРЫ');
  console.log('------------------');
  types.forEach((type) => {
    console.log('%s %s', colors.bold(type.name), colors.grey(`/ ${type.price}`));
  });
};

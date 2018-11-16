const program = require('commander');
const colors = require('colors');
const menu = require('./menu');

program
  .command('menu')
  .alias('m')
  .description('Показать меню')
  .action(() => {
    menu();
  });

program
  .command('order <type>') // переменная type запрашивается после алиаса, без нее не работает
  .alias('o')
  .description('Заказать бургер')
  .option('-r, --rare [value]', 'Степень проржарки', 'Well Done')
  .option('-p, --potato', 'Картофель фри', 'Нет')
  .option('-s, --souse [value]', 'Соус', 'Нет')
  .option('-i, --ingredients [value]', 'Дополнительные ингредиенты', 'Нет')
  .option('-D, --delivery', 'Доставка', 'Нет')
  .option('-A, --adress [value]', 'Ваш адрес ', '')
  .action((burger, args) => {
    // ждем экшна, type = burger
    console.log('YOUR ORDER');
    console.log('------------------');
    console.log('Ваш бургер %s', colors.green(burger));
    console.log('Прожарка %s', colors.green(args.rare));
    console.log('Картофель %s', colors.green(args.potato));
    console.log('Соус %s', colors.green(args.souse));
    console.log('Дополнительно %s', colors.green(args.ingredients));
    console.log('Доставка %s', colors.green(args.delivery));
    if (args.delivery) {
      console.log('По адресу %s', colors.green(args.adress));
    }
  });

// без этого метода коммандер не начнет парсить введенные команды
program.parse(process.argv);

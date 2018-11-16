const program = require("commander");
const inquirer = require("inquirer");
const menu = require("./menu");
const answers = require("./answers");

const questions = [
  {
    type: "list",
    name: "burger",
    message: "Выберите бургер",
    choices: answers.typesBurgers
  },
  {
    type: "list",
    name: "rareLevel",
    message: "Уровень прожарки",
    choices: answers.typesRares,
    default: "Well Done"
  },
  {
    type: "list",
    name: "potato",
    message: "Вам нужна картошка?",
    choices: answers.typesPotatos,
    default: "Нет"
  },
  {
    type: "list",
    name: "souse",
    message: "Нужен соус?",
    choices: answers.typesSouses,
    default: "Нет"
  },
  {
    type: "list",
    name: "delivery",
    message: "Нужна доставка?",
    choices: answers.typesDelivery,
    default: "Нет"
  },
  {
    type: "input",
    name: "address",
    message: "Напишите адрес",
    when: function(answers) {
      return answers.delivery === "Да";
    }
  }
];

program
  .command("menu")
  .alias("m")
  .description("Показать меню")
  .action(() => {
    menu();
  });

inquirer.prompt(questions).then(function(answers) {
  console.log(answers);
});

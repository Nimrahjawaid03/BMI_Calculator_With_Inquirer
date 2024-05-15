#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold(`<<-----------------Welcome To NMJ ${chalk.yellow.bold(`BMI CALCULATOR`)} app! ------------------->>\n`));
const questions = [
    { type: 'number', name: 'weight', message: 'Weight (kg):' },
    { type: 'number', name: 'heightFeet', message: 'Height (feet):' },
];
function calculateBMI(weight, heightFeet) {
    const heightMeters = heightFeet * 0.3048; // Convert feet to meters
    const bmi = weight / (heightMeters * heightMeters);
    let category;
    if (weight < 30) {
        category = 'Weight is less';
    }
    else if (weight < 60) {
        category = 'Underweight';
    }
    else if (weight <= 80) {
        category = 'Normal weight';
    }
    else {
        category = 'Overweight';
    }
    return { bmi, category };
}
const main = async () => {
    const { weight, heightFeet } = await inquirer.prompt(questions);
    const bmiResult = calculateBMI(weight, heightFeet);
    console.log(chalk.magenta.bold.underline(`BMI: ${chalk.yellow.bold(bmiResult.bmi.toFixed(4))}`));
    console.log(chalk.blueBright.bold(`Category: ${chalk.yellow.bold(bmiResult.category)}`));
    console.log(chalk.blueBright.bold(`<<----------------Thanks For Using My ${chalk.yellow.bold('BMI CALCULATOR')} app! ------------------>>\n`));
    console.log(chalk.greenBright.bold(`<<*************** Regards: ${chalk.yellow.bold('NIMRAH MUHAMMAD JAWAID')} ****************>>\n`));
};
main();

#! /usr/bin/env node
import inquirer from "inquirer";
// Initialize user balance and pin code
let myBalance = 5000;
let myPin = 2222;
// Print Wellcome Message
console.log("Wellcome to Faryal Abbasi ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, login successfully!");
    let operations = await inquirer.prompt([
        {
            name: "operation",
            message: "set operation",
            type: "list",
            choices: ["withdraw", "checkbalance"],
        }
    ]);
    if (operations.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`your remaining amount is: ${myBalance}`);
        }
    }
    ;
    if (operations.operation === "checkbalance") {
        console.log(`your balance is:  ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code, Try Again!");
}

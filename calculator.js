const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const app = async () => {

    console.log("Welcome to the tip calculator.");

    const bill = await new Promise(resolve => {
        rl.question("What was the total bill? $", resolve)
    });

    const tip = await new Promise(resolve => {
        rl.question("What percentage tip would you like to give? 10, 12 or 15?", resolve)
    });

    const split = await new Promise(resolve => {
        rl.question("How many people split the bill?", resolve)
    });

    const totalTip = (parseFloat(bill) * (parseFloat(tip) / 100));
    const totalBill = totalTip + parseFloat(bill);
    const amount = totalBill / parseFloat(split);

    console.log(`Each person should pay $${amount.toFixed(2)}`);
    rl.close();
}

app();

rl.on('close', function () {
    console.log('Done');
    process.exit(0);
  });
function createBankAccount(initial) {
    let money = initial;

    function deposit(amount) {
        money += amount;
        console.log(`Deposited: ${amount}`);
    }

    function withdraw(amount) {
        if (amount > money) {
            console.log("Insufficient funds!");
        } else {
            money -= amount;
            console.log(`Withdrawn: ${amount}`);
        }
    }

    function balance() {
        return money;
    }

    return {
        deposit,
        withdraw,
        balance
    };
}

// Create account
const account = createBankAccount(10000);

account.deposit(5000);
account.withdraw(3000);

console.log(account.balance());

account.withdraw(20000);

console.log(account.balance());

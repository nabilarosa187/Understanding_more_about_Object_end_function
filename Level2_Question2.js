const account = {
    owner : "Nabila",
    balance : 1000,

    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log(`Deposit rejected: ${amount} is not a positive amount.`);
            return false;
        }
        this.balance += amount;
        console.log(`Deposited ${amount}. Balance: ${this.balance}`);
        return false;
    },

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log(`withdrawal rejected: ${amount} is not a positive amount.`);
            return false;
        }
        if (amount > this.balance) {
            console.log(`withdrawal rejected: ${amount} exceed balance ${this.balance}.`);
            return false;
        }
        this.balance -= amount;
        console.log(`withdrew ${amount}. Balance: ${this.balance}`);
        return true;
    },
};

console.log("---Valid---");
account.deposit(500);
account.withdraw(300);
console.log("---Invalid---");
account.deposit(-50);
account.withdraw(-20);
account.withdraw(5000);
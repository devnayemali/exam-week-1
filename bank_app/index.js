class BankAccount {
    accountNumber = 0;
    ownerName = ''
    balance = 0;

    constructor(accountNumber, ownerName, balance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Deposit amount should be greater than zero.");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
            } else {
                console.log('Insufficient funds');
            }
        } else {
            console.log("Withdraw amount should be greater than zero.");
        }
    }

    getBalance() {
        console.log(`Current balance is $${this.balance}`);
    }

    displayAccountInfo() {
        console.log(`Account Number is ${this.accountNumber}`);
        console.log(`Owner name is ${this.ownerName}`);
        console.log(`Balance is ${this.balance}`);
    }
}

// Creating instances of BankAccount
const account1 = new BankAccount(1001, "John Doe", 0);
const account2 = new BankAccount(1002, "Md Nayem Ali", 0);

// Demonstrate account operations
console.log("----- Account 1 -----");
account1.deposit(1000);
account1.withdraw(200);
account1.displayAccountInfo();

console.log("\n----- Account 2 -----");
account2.deposit(600);
account2.withdraw(200);
account2.displayAccountInfo();
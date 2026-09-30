"use strict";
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Invalid withdrawal");
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(10000);
console.log(account.getBalance());
account.deposit(5000);
console.log(account.getBalance());
account.withdraw(2000); //13000
console.log(account.getBalance()); //13000

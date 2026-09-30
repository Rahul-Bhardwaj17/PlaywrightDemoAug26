class BankAccount {
  private balance: number; //10000

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
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

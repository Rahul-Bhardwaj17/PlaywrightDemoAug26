class User {
  private password: string; //admin123

  constructor(password: string) {
    this.password = password;
  }

  validatePassword(input: string): boolean {
    return this.password === input; //admin123
  }
}

const user = new User("admin123");

// console.log(user.password); // Error — direct access is blocked
// user.password = "hacked"; // Error — direct modification is blocked

console.log(user.validatePassword("admin123")); // true — the only allowed interaction
console.log(user.validatePassword("wrong")); // false

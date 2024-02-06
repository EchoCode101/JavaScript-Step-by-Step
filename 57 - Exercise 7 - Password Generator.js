class Password {
  constructor() {
    console.log("Welcome to password Generator");
  }
  generatePassword(length) {
    let smallChars = "abcdefghijklmnopqrstuvwxyz";
    let largeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "1234567890";
    let specialChar = "!@#$%^&*()_+{}:<>?~`";
    if (length < 8) {
      console.log("Your password must be at least 8 characters");
    } else {
      let i = 0;
      let password = "";
      while (i < length) {
        let random = Math.floor(Math.random() * 4);
        if (random === 0) {
          password += smallChars.charAt(Math.floor(Math.random() * 26));
        } else if (random === 1) {
          password += largeChars.charAt(Math.floor(Math.random() * 26));
        } else if (random === 2) {
          password += num.charAt(Math.floor(Math.random() * 10));
        } else {
          password += specialChar.charAt(Math.floor(Math.random() * 15));
        }
        i++;
      }
      console.log(password);
    }
  }
}
let p = new Password();
p.generatePassword(89)

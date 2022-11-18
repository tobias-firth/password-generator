// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Prompt user to choose a number of characters between 10 and 63
// If number greater than 63 or less than 10, prompt again
// Else store value as number of characters
var quantChar = 0;

while (quantChar < 10 || quantChar > 63) {
  var quantChar = prompt("How many characters would you like in your password? (Enter a value between 10 and 63 inclusive.)");
}

console.log(quantChar);

var uppercase = false;
var lowercase = false;
var numerical = false;
var special = false;

// Confirm if the user wants Lowercase, Uppercase, Numeric and Special Characters
// If yes, concatenate into array

while (uppercase === false && lowercase === false && numerical === false && special === false) {
  var uppercase = confirm("Would you like your password to contain uppercase characters?");
  var lowercase = confirm("Would you like your password to contain lowercase characters?");
  var numerical = confirm("Would you like you password to contain numerical characters?");
  var special = confirm("Would you like your password to contain special characters ($@%&*, etc)");
}

var passwordSpec = [];

passwordSpec.push(uppercase, lowercase, numerical, special);

console.log(passwordSpec);

var usedChar = [];

if (passwordSpec[0] === true) {
  usedChar = usedChar.concat(upperCasedCharacters);
}

if (passwordSpec[1] === true) {
  usedChar = usedChar.concat(lowerCasedCharacters);
}

if (passwordSpec[2] === true) {
  usedChar = usedChar.concat(numericCharacters);
}

if (passwordSpec[3] === true) {
  usedChar = usedChar.concat(specialCharacters);
}

console.log(usedChar);

var characters = [];

for (var i = 0; i < quantChar; i++) {
  var random = Math.floor(Math.random() * usedChar.length);
  characters.push(usedChar[random]);
}

// Select n random characters to make the password and store in an array/variable
console.log(characters);
var password = characters.join();

// Print password in box
console.log(password);
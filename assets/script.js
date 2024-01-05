// Assignments
var letters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = [
  " ", "!", `"`, "#", "$", "%", "&", "'", 
  "(", ")", "*", "+", ",", "-", ".", "/", 
  ":", ";", "<", "=", ">", "?", "@", "[", 
  "/", "]", "^","_", "`", "{", "|", "}", "~"
];
var random= "";
var password = "";
var passwordLength= "50";
var hasNumbers = false;
var hasSpecials = false;
var hasLetters = false;

// references
var questionPop = document.querySelector("#questions-pop");
var questionClose = document.querySelector("#q-close");
var numCheck = document.getElementById("num-check");
var letterCheck = document.getElementById("letter-check");
var specCheck = document.getElementById("spec-check");
var stringLength = document.getElementById("string-length");
var generateBtn = document.querySelector("#generate");

//function to grab random value from each array
function getLetter() {
  random = letters[Math.floor(Math.random() * letters.length)];
  return;
}
function getNumber() {
  random = numbers[Math.floor(Math.random() * numbers.length)];
  return;
}
function getSpecial() {
  random = specials[Math.floor(Math.random() * specials.length)];
  return;
}
// primary function--generates password
function generatePassword() {
  // checks for invalid input and averts it
  passwordLength = Number(stringLength.value);
  if (!hasLetters && !hasLetters && !hasSpecials){
    hasLetters=true;
  }
  if (typeof passwordLength != typeof 8 || passwordLength < 1) {
    passwordLength = 8;
  }
  // creates temporary cycle for randomization
  var ranCycle = [];
  var ranHolder;

  console.log( "password length: " + passwordLength);

  //creates a placeholder for each array
  // that the user indicates they want in their password
  if (hasLetters){
    ranCycle.push (0);
  }
  if (hasNumbers){
    ranCycle.push (1);
  }
  if (hasSpecials) {
    ranCycle.push (2);
  }

  // for desired length generates digits
  // randomly from all desired arrays using ranCycle
  for (i = 0; i< passwordLength; i++ ) {
    ranHolder = ranCycle [Math.floor(Math.random() * ranCycle.length)];
    if (ranHolder == 0) {
      getLetter();
    }
    else if (ranHolder == 1) {
      getNumber();
    }
    else if (ranHolder == 2) {
      getSpecial();
    }
    else {
      // for kicks and giggles if someone manages to brear this
      console.log ("how the hell you do that??");
    }
    console.log ( "digit: " + random);
    password += random;
  }
  return;
}
// Write password to the #password input
function writePassword() {
  generatePassword();
  console.log("password: " + password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  //resets password
  password = "";
  return;
};

// Adds event listener to generate button
//switched event to display questions
generateBtn.addEventListener("click",function(event) {
  event.preventDefault();
  questionPop.style.display = "flex";
});
//adds event listener to buttons and checkmarks
//for checkmarks, inverts boolean value on click, default of false
letterCheck.addEventListener ("click", function(event) {
  if (!hasLetters) {
    hasLetters = true;
  }
  else if(hasLetters) {
    hasLetters = false;
  }
});

numCheck.addEventListener ("click", function(event) {
  if (!hasNumbers) {
    hasNumbers = true;
  }
  else if(hasNumbers) {
    hasNumbers = false;
  }
});

specCheck.addEventListener ("click", function(event) {
  if (!hasSpecials) {
    hasSpecials = true;
  }
  else if(hasSpecials) {
    hasSpecials = false;
  }
});
//exits the pop up and triggers the password generation
questionClose.addEventListener("click", function(){
  questionPop.style.display = "none";
  writePassword ();
});
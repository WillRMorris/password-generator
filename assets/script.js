// Assignments
var upLetters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
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
var hasUpLetters = false;
var hasLowLetters = false;


// references
var questionPop = document.querySelector("#questions-pop");
var questionClose = document.querySelector("#q-close");
var numCheck = document.getElementById("num-check");
var upLetterCheck = document.getElementById("up-letter-check");
var lowLetterCheck = document.getElementById("low-letter-check");
var specCheck = document.getElementById("spec-check");
var stringLength = document.getElementById("string-length");
var generateBtn = document.querySelector("#generate");

//function to grab random value from each array
function getUpLetter() {
  random = upLetters[Math.floor(Math.random() * upLetters.length)];
  return;
}
function getLowLetter() {
  random = lowLetters[Math.floor(Math.random() * lowLetters.length)];
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
  if (!hasUpLetters && !hasLowLetters && !hasLowLetters && !hasSpecials){
    hasLowLetters=true;
  }
  if (typeof passwordLength != typeof 8 || passwordLength < 1) {
    passwordLength = 8;
  }
  else if (passwordLength > 128) {
    passwordLength = 128;
  }
  // creates temporary cycle for randomization
  var ranCycle = [];
  var ranHolder;

  // trouble shooting for password length
  console.log( "password length: " + passwordLength);

  //creates a placeholder for each array
  // that the user indicates they want in their password
  if (hasUpLetters){
    ranCycle.push (0);
  }
  if (hasLowLetters){
    ranCycle.push (1);
  }
  if (hasNumbers){
    ranCycle.push (2);
  }
  if (hasSpecials) {
    ranCycle.push (3);
  }

  // for desired length generates digits
  // randomly from all desired arrays using ranCycle
  for (i = 0; i< passwordLength; i++ ) {
    ranHolder = ranCycle [Math.floor(Math.random() * ranCycle.length)];
    if (ranHolder == 0) {
      getUpLetter();
    }
    else if (ranHolder == 1) {
      getLowLetter();
    }
    else if (ranHolder == 2) {
      getNumber();
    }
    else if (ranHolder == 3) {
      getSpecial();
    }
    else {
      // for kicks and giggles if someone manages to brear this
      console.log ("how the hell you do that??");
    }
    // adds the string value get functions pastes to temp var random to password
    // which defaults as an empty string.
    // value changes based on what value of ranCycle is placed in ranHolder
    // ranHolder value decides which function is run.
    password += random;
    console.log ( "digit: " + random);
  }
  return;
}
// Write password to the #password input
function writePassword() {
  generatePassword();

  // trouble shooting for password generation 
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
upLetterCheck.addEventListener ("click", function(event) {
  if (!hasUpLetters) {
    hasUpLetters = true;
  }
  else if(hasUpLetters) {
    hasUpLetters = false;
  }
});

lowLetterCheck.addEventListener ("click", function(event) {
  if (!hasLowLetters) {
    hasLowLetters = true;
  }
  else if(hasLowLetters) {
    hasLowLetters = false;
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
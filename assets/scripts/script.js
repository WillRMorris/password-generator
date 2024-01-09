// Assignments
const questionPop = document.querySelector("#questions-pop");
const questionClose = document.querySelector("#q-close");
const numCheck = document.getElementById("num-check");
const upLetterCheck = document.getElementById("up-letter-check");
const lowLetterCheck = document.getElementById("low-letter-check");
const specCheck = document.getElementById("spec-check");
const stringLength = document.getElementById("string-length");
const generateBtn = document.querySelector("#generate");

var hasNumbers = false;
var hasSpecials = false;
var hasUpLetters = false;
var hasLowLetters = false;

//function to grab random value from each array
function getUpLetter() {
  var upLetters = ["A","B","C","D","E","F","G","H","I","J","K",
  "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var random =  "";
  random = upLetters[Math.floor(Math.random() * upLetters.length)];
  return random;
}
function getLowLetter() {
  var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var random =  "";
  random = lowLetters[Math.floor(Math.random() * lowLetters.length)];
  return random;
}
function getNumber() {
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var random =  "";
  random = numbers[Math.floor(Math.random() * numbers.length)];
  return random;
}
function getSpecial() {
  var specials = [
    " ", "!", `"`, "#", "$", "%", "&", "'", 
    "(", ")", "*", "+", ",", "-", ".", "/", 
    ":", ";", "<", "=", ">", "?", "@", "[", 
    "/", "]", "^","_", "`", "{", "|", "}", "~"
  ];
  var random =  "";
  random = specials[Math.floor(Math.random() * specials.length)];
  return random;
}
// primary function--generates password
function generatePassword() {
  var password = ""
  var random = ""
  var passwordLength = "";
  // checks for invalid input and averts it
  passwordLength = Number(stringLength.value);
  if (!hasUpLetters && !hasLowLetters && !hasLowLetters && !hasSpecials){
    alert ( "please choose at least one option");
  }
  if (typeof passwordLength != typeof 8 || passwordLength < 1) {
    alert ( "please enter valid password length");
    
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
      random = getUpLetter();
    }
    else if (ranHolder == 1) {
      random = getLowLetter();
    }
    else if (ranHolder == 2) {
      random = getNumber();
    }
    else if (ranHolder == 3) {
      random = getSpecial();
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
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  // trouble shooting for password generation 
  console.log("password: " + password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
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
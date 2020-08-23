// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","_","-",",",".","/","[","]","{","}"];
var passwordLength = 16;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

function generatePassword(){
  for(var i = 0; i <passwordLength; i++){
    pw = characters[Math.floor(Math.random()*characters.length)];
    console.log(pw);
    password = password.toString() + pw.toString();
    console.log(password);
  }
  return password;
}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

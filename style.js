var lower = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";

var newPassword = [];

var passwordLength =  parseInt(prompt("How many characters would you like your password to be?"));

if (passwordLength < 8) {
    alert("All passwords must be between 8-128 characters.");
    prompt("How many characters would you like your password to be?");
    
   }
   else if (passwordLength > 8 ); {

   }
upperC = confirm("Click ok to confirm including upper case letters."); 
lowerC = confirm("Click ok to confirm including lower case letters."); 
numericV = confirm("Click ok to confirm including numeric values."); 
specialC = confirm("Click ok to confirm including special characters."); 

if (upperC === true) {
   (newPassword.push(caps));
}
 if (lowerC === true) {
    (newPassword.push(lower));
 }
if (numericV === true) {
    (newPassword.push(numeric));
 }
if (specialC = true) {
    (newPassword.push(special));
 }

var newPWstr = newPassword.join("");
 
var password = "";

for (var i = 0; i < pWlenght; i++) {
var genChr = newPWstr.charAt(Math.floor(Math.random() * newPWstr.length));
password = password.concat(genChr);

}

alert("click generate password below to receive your new password");

function generatePW() {
   document.getElementById("passWD-text").textContent = password;
}


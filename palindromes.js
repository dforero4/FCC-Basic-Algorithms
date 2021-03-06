Check for Palindromes
*******************************************************************************************
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that is spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note:
You will need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and 
turn everything lower case in order to check for palindromes.

We will pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We will also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
********************************************************************************************

function palindrome(str) {

  var arr = [];
  var palin = "";
  var regex = /[!@#\$%\^\&*\)\(+=\.,_-\s]/g;
  var newStr = str.replace(regex,'');
  newStr = newStr.toLowerCase();
  
  arr = newStr.split("");
  arr = arr.reverse();
  palin = arr.join("");
  
  if(palin == newStr){
    return true;
  }
  return false;
}



palindrome("A man, a plan, a canal. Panama");

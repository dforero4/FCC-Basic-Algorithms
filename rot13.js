Caesars Cipher
***************************************************************************************************************************************
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
***************************************************************************************************************************************

function rot13(str) {
  
  var numArr = [];
  
  for(var i=0; i<str.length; i++){
    if(str[i] >= 'A' && str[i] <= 'M'){
      numArr.push(str.charCodeAt(i)+13);
    }else if (str[i] >= 'N' && str[i] <= 'Z'){
      numArr.push(str.charCodeAt(i)-13);
    }else{
      numArr.push(str.charCodeAt(i));
    }
  }
  
  return (numArr.map(function(x) {
           return String.fromCharCode(x);
         }).join(""));
}

// Change the inputs below to test
rot13("LBH QVQ VG");

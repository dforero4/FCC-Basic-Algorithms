Title Case a Sentence
********************************************************************************************************************************
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
********************************************************************************************************************************

function titleCase(str) {
  var arr = str.split(" ");
  
  for(var i=0; i<arr.length; i++){
    var sub = arr[i].substring(1,arr[i].length);
    sub = sub.toLowerCase();
    var upper = arr[i].substring(0,1);
    upper = upper.toUpperCase();
    arr[i] = upper+sub;
   }
  
  return arr.join(" ");
}

titleCase("I'm a little tea pot");

Find the Longest Word in a String
***********************************************************************
Return the length of the longest word in the provided sentence.

Your response should be a number.
***********************************************************************

function findLongestWord(str) {
  var arr = str.split(" ").map(function(x) {
    return x.length;
  });
  
  arr.sort(function(a,b) {
    return a-b;
  });
  
  return arr[arr.length-1];
}

findLongestWord("The quick brown fox jumped over the lazy dog");

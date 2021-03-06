Seek and Destroy
*****************************************************************************************************************************
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
*****************************************************************************************************************************

function destroyer(arr) {

  var newArr = [];
  var args = [];
  for(var i=1; i<arguments.length; i++){
    args.push(arguments[i]);
  }
  
  newArr = arr.filter(function(val){
    return args.indexOf(val) === -1;
  });
  return newArr;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

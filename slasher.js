
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var slashed = arr.slice(howMany);
  console.log(slashed);
  return slashed;
}

slasher([1, 2, 3], 2);

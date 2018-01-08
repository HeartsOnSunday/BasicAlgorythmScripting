
function titleCase(str) {
  var newStr = str.split(" ");
  console.log(newStr);
  var lowercase = newStr.toLowerCase();
  console.log(lowercase);
  var uppercased = lowercase.charAt(0).toUpperCase();
  console.log(uppercased);
  
  return str;
}

titleCase("I'm a little tea pot");

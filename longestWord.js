

function findLongestWord(str) {
  var arraySplitString =  [];
  var longest = 0; 
  
  arraySplitString = str.split(" ");
  console.log(arraySplitString);
      for (var i = 0; i < arraySplitString.length; i++) {
        if (arraySplitString[i].length > longest) {
          longest = arraySplitString[i].length;
        console.log(longest);
        }
      }
      return longest;
    } 
  


findLongestWord("The quick brown fox jumped over the lazy dog");
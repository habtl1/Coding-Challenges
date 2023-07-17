function LongestWord(sen) { 

  // code goes here  
 var words = sen.match(/\w+/g);
  var longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
  return longestWord;
}
 
   
   
// keep this function call here 
console.log(LongestWord(readline()));

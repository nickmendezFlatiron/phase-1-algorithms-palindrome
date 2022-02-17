function isPalindrome(word) {
  word = word.toLowerCase().toString()
  let wordBackwords = []
  //console.log(word)
  for (let n = 0 , i = word.length ; n < i + 1  ; n++){
    let letter = word.charAt(i - 1 - n)
 //   console.log(letter)
    wordBackwords.push(letter)
  }
  wordBackwords = wordBackwords.join("")
  console.log(wordBackwords)

  if(word === wordBackwords) {
    return true
  } else {return false}
}
/* 
  The string value of the argument "word" you pass in isPalindrome must be 
  equal to the value of the argument spelled backwards
  Iterate through the string "word" backwords and test whether it is equal to the
  value of word as it is provided in the input
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

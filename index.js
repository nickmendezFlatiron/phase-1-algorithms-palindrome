function isPalindrome(word) {
  word = word.toLowerCase().toString()
  let wordBackwords = []
  // console.log(word)
  for (let n = 1 , i = word.length ; n < i + 1  ; n++){
    let letter = word.charAt(i - n)
  // console.log(letter)
    wordBackwords.push(letter)
  }
  wordBackwords = wordBackwords.join("").toString()
  // console.log(wordBackwords)

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
  - What I wanted to do is find a way to convert the user input into a backwards string
  - I needed to swap the positions of every letter , the first being the last, 2nd first being second
  last, etc
  - I made the user input lowercase first and made it a string
  - i Iterated over each letter with charAt , using the length 
  - I pushed every letter to an array and then joined the array elements to form a new string
  - I tested whether the user input was eqaul to the backwards string and returned true if it was,
  false if it wasn't
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

export { }

// Create a function named search palindrome following your current language's style guide.
// It should take a string, search for palindromes that at least 3 characters long 
// and return a list with the found palindromes.

let trialString: string = 'dog goat dad duck doodle never';

function searchPalindrome(s: string): string[] {
  let palindromeList: string[] = [];
  for (let wordLength: number = 3; wordLength <= s.length; wordLength++) {
    for (let scanNumber: number = 0; scanNumber <= s.length - wordLength; scanNumber++) {
      let actualWord: string = s.slice(scanNumber, scanNumber + wordLength);
      if (actualWord === actualWord.split("").reverse().join("")) {
        palindromeList.push(actualWord);
      }
    }
  }
  return palindromeList;
}

console.log(searchPalindrome(trialString));

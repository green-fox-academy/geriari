export { }

function createPalindrome(text: string): string {
  let textOriginalLength: number = text.length;
  for (let i: number = 0; i < textOriginalLength; i++) {
    text = text + text[textOriginalLength - i - 1];
  }
  return text;
}

console.log(createPalindrome('GreenFox'));

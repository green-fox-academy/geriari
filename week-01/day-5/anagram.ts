export { }

function anagram(text1: string, text2: string): boolean {
  let res: boolean = true;
  if (text1.length === text2.length) {
    for (let i: number = 0; i < text1.length; i++) {
      if (text1[i] !== text2[text1.length - 1 - i]) {
        res = false;
        break;
      } else {
        continue;
      }
    }
  } else {
    res = false;
  }
  
  return res;
} 
console.log(anagram('mar', 'rim'));

export { }

function anagram(text1: string, text2: string): boolean {
  let arrayText1: string[] = Array.from(text1);
  let arrayText2: string[] = Array.from(text2);
  arrayText1.sort();
  arrayText2.sort();
  let result: boolean = true;
  for (let i: number = 0; i < arrayText1.length; i++) {
    if (arrayText1[i] !== arrayText2[i]) {
      result = false;
      break;
    } else {
      continue;
    }
  } return result;
}

console.log(anagram('korte', 'kotre'));

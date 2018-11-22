/*
New things I learned for this exercise:

if ('key' in myObj)
csekkolja, hogy létezik-e az objektumban egy key

var obj = {key1: value1, key2: value2};
obj.key3 = "value3";
egy meglévő objektumba új keyt tesz bele értékkel együtt
*/

export function countLetters(text: string): Object {
  let textArray: string[] = text.split('').sort();
  let dictionary: Object = {};
  for (let i: number = 0; i < textArray.length; i++) {
    if (textArray[i] in dictionary) {
      dictionary[textArray[i]] ++;
    } else {
      dictionary[textArray[i]] = 1;
    }
  }
  return dictionary;
} 

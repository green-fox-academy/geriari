export function areAnagrams(text1: string, text2: string): boolean {
  return text1.split('').sort().join('') === text2.split('').sort().join('');
} 

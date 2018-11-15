// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function separateByStars(text: string): string {
  if (text.lastIndexOf('*') >= text.length - 2) {
    return text;
  } else {
    return separateByStars(text.slice(0, text.lastIndexOf('*') + 2) + '*' + text.slice(text.lastIndexOf('*') + 2));
  }
}

console.log(separateByStars('Green Fox'));

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function xToY(text: string): string {
  if (!text.includes('x')) {
    return text;
  } else {
    return xToY(text.replace('x', 'y'));
  }
}

console.log(xToY('Alma x Korte x'));

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removeX(text: string): string {
  if (!text.includes('x')) {
    return text;
  } else {
    return removeX(text.replace('x', ''));
  }
}

console.log(removeX('AlmaxKortex'));

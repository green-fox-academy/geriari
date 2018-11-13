// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;
  constructor (bckgrndClr: string, txt: string, txtClr: string) {
    this.backgroundColor = bckgrndClr;
    this.text = txt;
    this.textColor = txtClr;
  }
}

let postIt1 = new PostIt('orange', 'Idea 1', 'blue');
let postIt2 = new PostIt('pink', 'Awesome', 'black');
let postIt3 = new PostIt('yellow', 'Superb!', 'green');

console.log(postIt1);
console.log(postIt2);
console.log(postIt3);

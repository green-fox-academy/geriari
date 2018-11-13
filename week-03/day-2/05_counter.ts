// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
  count: number;
  initialValue: number;

  constructor(baseCount: number = 0) {
    this.count = Math.round(baseCount);
    this.initialValue = Math.round(baseCount);
  }

  add(increment: number = 1) {
    this.count += Math.round(increment);
  }

  get() {
    return String(this.count);
  }

  reset() {
    this.count = this.initialValue;
  }
}

let num = new Counter(100);
console.log(num);
num.add();
console.log(num);
num.add(13);
console.log(num);
console.log(num.get());
num.reset();
console.log(num);

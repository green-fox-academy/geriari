import { Carrier } from "./carrier";
import { F35 } from "./F35";
import { F16 } from "./F16";

let essex = new Carrier(300, 1000);
let wasp = new Carrier(500, 100);

for (let i: number = 0; i < 5; i++) {
  i % 2 === 0 ? essex.add(new F16()) : essex.add(new F35());
}

for (let i: number = 0; i < 10; i++) {
  i % 2 === 0 ? wasp.add(new F16()) : wasp.add(new F35());
}

essex.fill();
wasp.fill();

console.log(essex.getStatus());
console.log(wasp.getStatus());

essex.fight(wasp);

console.log(essex.getStatus());
console.log(wasp.getStatus());

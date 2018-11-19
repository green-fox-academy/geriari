import { Aircraft } from './Aircraft';
import { F16 } from './F16';
import { F35 } from './F35';

let aircraft1 = new F16('Falcon');
let aircraft2 = new F35('Eagle');

console.log(aircraft1.getType());
console.log(aircraft2.getType());
console.log(aircraft1.getStatus());
console.log('100 ammoból ennyi marad feltöltés után:');
console.log(aircraft1.refill(100));
console.log(aircraft1.getStatus());
console.log(aircraft1.fight());
console.log(aircraft1.getStatus());
console.log(aircraft1.isPriority());
console.log(aircraft2.isPriority());


import { Garden } from './Garden';
import { Flower } from './Flower';
import { Tree } from './Tree';

let fuveszKert = new Garden('Fuveszkert');

fuveszKert.addFlower(new Flower('blue', 0));
fuveszKert.addFlower(new Flower('yellow', 0));
fuveszKert.addTree(new Tree('purple', 0));
fuveszKert.addTree(new Tree('orange', 0));

fuveszKert.print();
fuveszKert.water(40);
fuveszKert.water(70);

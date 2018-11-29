import { Garden } from "./garden";
import { Flower } from "./flower";
import { Tree } from "./tree";

let botanicGarden = new Garden();

botanicGarden.addPlant(new Flower('yellow'));
botanicGarden.addPlant(new Flower('blue'));
botanicGarden.addPlant(new Tree('purple'));
botanicGarden.addPlant(new Tree('orange'));

botanicGarden.print();

console.log('Watering with 40');
botanicGarden.water(40);
console.log('Watering with 70');
botanicGarden.water(70);




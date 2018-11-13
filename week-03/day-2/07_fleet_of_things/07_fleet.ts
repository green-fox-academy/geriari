import { Thing } from "./07_thing";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }

    // returnValueOfFleet(i: number) {
    //     return this.things[i];
    // }

    thingComplete(i: number) {
        this.things[i].complete();
    }

    print() {
        for (let j: number = 0; j < this.things.length; j++) {
            console.log(j + 1 + '. ' + this.things[j].print());
        }
    }
}

export { Fleet };
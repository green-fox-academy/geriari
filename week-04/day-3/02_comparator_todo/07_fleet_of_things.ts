import { Thing } from "./07_thing";
import { Fleet } from "./07_fleet";

let fleet = new Fleet();

fleet.add(new Thing('Get milk'));
fleet.add(new Thing('Remove the obstacles'));
fleet.add(new Thing('Stand up'));
fleet.add(new Thing('Eat lunch'));

// fleet.returnValueOfFleet(2).complete();
// fleet.returnValueOfFleet(3).complete();

fleet.thingComplete(2);
fleet.thingComplete(3);

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

fleet.print();

fleet.things.sort(function (a: Thing , b: Thing): number {
  return a.compareTo(b);
});

fleet.print();

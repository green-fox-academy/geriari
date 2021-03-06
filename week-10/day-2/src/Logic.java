public class Logic {

  public static void main(String[] args) {
    Carrier essex = new Carrier(300, 1000);
    Carrier wasp = new Carrier(500, 100);

    for (int i = 0; i < 5; i ++) {
      if (i % 2 == 0) {
        essex.add(new F16());
      } else {
        essex.add(new F35());
      }
    }

    for (int i = 0; i < 10; i ++) {
      if (i % 2 == 0) {
        wasp.add(new F16());
      } else {
        wasp.add(new F35());
      }
    }

    essex.fill();
    wasp.fill();

    System.out.println(essex.getStatus());
    System.out.println(wasp.getStatus());

    essex.fight(wasp);
  }
}

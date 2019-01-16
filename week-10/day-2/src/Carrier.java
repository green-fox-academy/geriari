import java.util.ArrayList;

public class Carrier {
  private ArrayList<Aircraft> aircrafts = new ArrayList<>();
  private int storeOfAmmo;
  private int health;

  Carrier(int storeOfAmmo, int health) {
    this.storeOfAmmo = storeOfAmmo;
    this.health = health;
  }

  public void add(Aircraft aircraft) {
    aircrafts.add(aircraft);
  }

  public void fill() {
    if (this.storeOfAmmo == 0) {
      System.out.println("Carrier is out of ammo.");
    }
    for (Aircraft aircraft: this.aircrafts) {
      if (aircraft.isPriority() && this.storeOfAmmo > 0) {
        this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
      }
    }
    for (Aircraft aircraft: this.aircrafts) {
      if (!aircraft.isPriority() && this.storeOfAmmo > 0) {
        this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
      }
    }
  }

  public void fight(Carrier opponent) {
    for (Aircraft aircraft: this.aircrafts) {
      opponent.health -= aircraft.fight();
    }
  }

  public int getAllDamage() {
    int damage = 0;
    for (Aircraft aircraft: this.aircrafts) {
      damage += aircraft.getAllDamage();
    }
    return damage;
  }

  public String getStatus() {
    String status = "HP: " + this.health + ", Aircraft count: " + this.aircrafts.size() + ", Ammo storage: " + this.storeOfAmmo + ", Total damage: " + this.getAllDamage() + ", Aircrafts: ";
    for (Aircraft aircraft: this.aircrafts) {
      status = status + "\n" + aircraft.getStatus();
    }
    return this.health <=0 ? status : "It's dead, Jim :(";
  }
}

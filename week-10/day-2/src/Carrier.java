public class Carrier {
  private Aircraft[] aircrafts = new Aircraft[100];
  private int storeOfAmmo;
  private int health;

  Carrier(int storeOfAmmo, int health) {
    this.storeOfAmmo = storeOfAmmo;
    this.health = health;
  }

  public void add(Aircraft aircraft) {
    //how to add to an array
  }

  public void fill() {
    if (this.storeOfAmmo == 0) {
      //throw 'Carrier is out of ammo.'
    }
    
  }

  /*
    fill(): void {
    if (this.storeOfAmmo === 0) {
      throw 'Carrier is out of ammo.';
    }
    this.aircrafts.forEach(aircraft => {
      if (aircraft.isPriority() && this.storeOfAmmo > 0) {
        this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
      }
    });
    this.aircrafts.forEach(aircraft => {
      if (!aircraft.isPriority() && this.storeOfAmmo > 0) {
        this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
      }
    });
  }

   */
}

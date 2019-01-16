public abstract class Aircraft {
  protected int maxAmmo;
  protected int baseDamage;
  protected int currentAmmo = 0;

  Aircraft(int maxAmmo, int baseDamage) {
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }

  public int fight() {
    int damage = this.baseDamage * this.currentAmmo;
    this.currentAmmo = 0;
    return damage;
  }

  public int refill(int ammoToFill) {
    int remainingAmmo = 0;
    if (ammoToFill + this.currentAmmo > this.maxAmmo) {
      remainingAmmo = ammoToFill - (this.maxAmmo - this.currentAmmo);
      this.currentAmmo = this.maxAmmo;
    } else {
      this.currentAmmo += ammoToFill;
    }
    return remainingAmmo;
  }

  public String getType() {
    return this.getClass().getSimpleName();
  }

  public String getStatus() {
    return "Type " + this.getType() + ", Ammo: " + this.currentAmmo + ", Base Damage: " + this.baseDamage + ", All Damage: " + this.baseDamage * this.currentAmmo;
  }

  public boolean isPriority() {
    return this.getType() == "F35";
  }

  public int getAllDamage() {
    return this.baseDamage * this.currentAmmo;
  }
}

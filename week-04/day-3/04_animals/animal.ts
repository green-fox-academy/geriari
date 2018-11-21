export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected eyeColor: string;

  abstract getName();

  abstract breed();

  abstract giveSound();
}
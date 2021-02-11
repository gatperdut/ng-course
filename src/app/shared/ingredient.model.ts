export class Ingredient {
  public readonly name: string;
  public readonly amount: number;

  constructor(name: string, amount: number) {
    this.name   = name;
    this.amount = amount;
  }
}

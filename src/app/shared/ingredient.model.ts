export class Ingredient {
  public readonly name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name   = name;
    this.amount = amount;
  }

  addAmount(amount: number) {
    this.amount += amount;
  }

  clone() {
    return new Ingredient(this.name, this.amount);
  }
}

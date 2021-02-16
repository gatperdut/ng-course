export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name   = name;
    this.amount = amount;
  }

  public addAmount(amount: number):void {
    this.amount += amount;
  }

  public clone(): Ingredient {
    return new Ingredient(this.name, this.amount);
  }

  public valid(): boolean {
    return !!this.name && !!this.amount;
  }
}

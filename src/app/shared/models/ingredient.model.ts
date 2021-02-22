import { IngredientData } from "./ingredient-data.interface";

export class Ingredient implements IngredientData {

  constructor(public name: string, public amount: number) {

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

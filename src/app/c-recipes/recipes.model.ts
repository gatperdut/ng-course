export class Recipe {

  public readonly name: string;

  public readonly description: string;

  public readonly image: string;

  constructor(name: string, description: string, image: string) {
    this.name        = name;
    this.description = description;
    this.image       = image;
  }

}

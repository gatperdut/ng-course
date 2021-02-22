import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import * as _ from 'underscore';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  private index!: number;

  private recipe!: Recipe;

  private editMode: boolean = false;

  private paramsSubscription!: Subscription;

  public formGroup!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService, private router: Router) { }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.index = parseInt(params['id']);

        this.editMode = !_.isNaN(this.index);

        if (this.editMode) {
          this.recipe = this.recipesService.getRecipe(this.index);
        }

        this.initForm();
      }
    );
  }

  initForm(): void {
    let name        = '';
    let image       = '';
    let description = '';
    let ingredients = new FormArray(
      []
    );

    if (this.editMode) {
      name        = this.recipe.name;
      image       = this.recipe.image;
      description = this.recipe.description;
      if (this.recipe.getIngredients().length) {
        _.each(this.recipe.getIngredients(),
          (ingredient) => {
            ingredients.push(
              new FormGroup(
                {
                  'name': new FormControl(
                    ingredient.name,
                    [
                      Validators.required
                    ]
                  ),
                  'amount': new FormControl(
                    ingredient.amount,
                    [
                      Validators.required,
                      Validators.pattern(/^[1-9]+[0-9]*$/)
                    ]
                  )
                }
              )
            );
          }
        );
      }
    }

    this.formGroup = new FormGroup(
      {
        'name': new FormControl(
          name,
          [
            Validators.required
          ]
        ),
        'image': new FormControl(
          image,
          [
            Validators.required
          ]
        ),
        'description': new FormControl(
          description,
          [
            Validators.required
          ]
        ),
        'ingredients': ingredients
      }
    );
  }

  get ingredientsFormArray(): FormArray {
    return (this.formGroup.get('ingredients') as FormArray);
  }

  onAddIngredient(): void {
    this.ingredientsFormArray.push(
      new FormGroup(
        {
          'name': new FormControl(
            '',
            [
              Validators.required
            ]
          ),
          'amount': new FormControl(
            null,
            [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ]
          )
        }
      )
    );
  }

  onDeleteIngredient(index: number): void {
    this.ingredientsFormArray.removeAt(index);
    this.ingredientsFormArray.markAsDirty();
  }

  onDeleteAllIngredients(): void {
    this.ingredientsFormArray.clear();
    this.ingredientsFormArray.markAsDirty();
  }

  onSubmit(): void {
    let ingredients: Ingredient[] = _.map(
      this.formGroup.value['ingredients'],
      function(ingredientValues: { name: string, amount: number }) {
        return new Ingredient(ingredientValues.name, ingredientValues.amount);
      }
    );

    const recipe = new Recipe(
      this.formGroup.value['name'],
      this.formGroup.value['description'],
      this.formGroup.value['image'],
      ingredients
    );

    if (this.editMode) {
      this.recipesService.updateRecipe(this.index, recipe);
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    }
    else {
      this.recipesService.addRecipe(recipe);
      this.router.navigate(['..', 0], { relativeTo: this.activatedRoute });
    }
  }

  onCancel(): void {
    this.router.navigate(['..',], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}

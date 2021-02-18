import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import * as _ from 'underscore';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-c-recipe-edit',
  templateUrl: './c-recipe-edit.component.html',
  styleUrls: ['./c-recipe-edit.component.scss']
})
export class CRecipeEditComponent implements OnInit, OnDestroy {

  private index!: number;

  private recipe!: Recipe;

  private editMode: boolean = false;

  private paramsSubscription!: Subscription;

  public formGroup!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

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
                    ingredient.name
                  ),
                  'amount': new FormControl(
                    ingredient.amount
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
          name
        ),
        'image': new FormControl(
          image
        ),
        'description': new FormControl(
          description
        ),
        'ingredients': ingredients
      }
    );
  }

  get ingredientControls(): AbstractControl[] {
    return (this.formGroup.get('ingredients') as FormArray).controls;
  }

  onAddIngredient(): void {
    this.ingredientControls.push(
      new FormGroup(
        {
          'name': new FormControl(
            ''
          ),
          'amount': new FormControl(
            1
          )
        }
      )
    )
  }

  onSubmit(): void {
    console.log(this.formGroup);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}

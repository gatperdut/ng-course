import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import * as _ from 'underscore';

@Component({
  selector: 'app-c-recipe-edit',
  templateUrl: './c-recipe-edit.component.html',
  styleUrls: ['./c-recipe-edit.component.scss']
})
export class CRecipeEditComponent implements OnInit, OnDestroy {

  index!: number;

  editMode: boolean = false;

  paramsSubscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.index = parseInt(params['id']);

        this.editMode = !_.isNaN(this.index);
        console.log(this.editMode)
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}

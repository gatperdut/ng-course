import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.scss']
})
export class CHeaderComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  public onNewRecipe(): void {
    this.router.navigate(['/recipes', 'new']);
  }

}

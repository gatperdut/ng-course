import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: 'c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.scss']
})
export class CHeaderComponent implements OnInit {

  constructor(private router: Router, private dataStorageService: DataStorageService) {

  }

  ngOnInit(): void {

  }

  public onNewRecipe(): void {
    this.router.navigate(['/recipes', 'new']);
  }

  public onSave(): void {
    this.dataStorageService.save();
  }

  public onLoad(): void {
    this.dataStorageService.load().subscribe();
  }

}

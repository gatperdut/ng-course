import { Input } from "@angular/core";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.scss']
})
export class CHeaderComponent implements OnInit {
  @Input() state:string = 'recipes';
  @Output() stateChanged = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {

  }

  onStateChanged(state:string) {
    this.stateChanged.emit(state);
  }
}

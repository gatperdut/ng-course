import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'c-alert',
  templateUrl: './c-alert.component.html',
  styleUrls: ['./c-alert.component.scss']
})
export class CAlertComponent {

  @Input() message: string;

  @Output('onClose') onCloseEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  public onClose(): void {
    this.onCloseEventEmitter.emit();
  }

}

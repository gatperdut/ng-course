import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() message: string;

  @Output('onClose') onCloseEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  public onClose(): void {
    this.onCloseEventEmitter.emit();
  }

}
